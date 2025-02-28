import {v4 as uuidv4} from 'uuid';
import { app } from '../firebase/firebase';
import db from '../firebase/firebase';
import { ref, push, get, child, remove, update } from "firebase/database";

 // add expense
export const addExpense = (expense)=>({
    type: "ADD_EXPENSE",
    expense
});

export const startAddExpense = (expenseData = {})=> {
    return (dispatch)=>{
        const {
            description = '',
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        console.log(expense);
        return push(ref(db, 'expenses'), expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });  
    };
};

// remove expense
export const removeExpense = ({ id } = {}
)=>({
    type: "REMOVE_EXPENSE",
    id
});

export const startRemoveExpense = ({ id }) => {
  return dispatch => {
      const dbRef = ref(db);
      return remove(child(dbRef, `expenses/${id}`))
      .then(() => {
        dispatch(
          removeExpense({
            id
          })
        );
      });
  };
};

// edit expense
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    const dbRef = ref(db);
    return dispatch => {
        return update(child(dbRef, `expenses/${id}`), updates).then(() => {
            dispatch(editExpense(id, updates));
        })
    }
}

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
})

export const startSetExpenses = (dispatch) => {
    return (dispatch) => {
      const dbRef = ref(db)
      return get(child(dbRef, 'expenses')).then((snapshot) => {
        if (snapshot.exists()) {
          const expenses = []
          snapshot.forEach((childSnapshot) => {
            expenses.push({
              id: childSnapshot.key,
              ...childSnapshot.val(),
            });
          });
          dispatch(setExpenses(expenses))
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
  }
