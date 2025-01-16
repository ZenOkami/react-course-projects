import {v4 as uuidv4} from 'uuid';
import {app, database} from '../firebase/firebase';
import db from '../firebase/firebase';
import { getDatabase, ref, set, onValue, update, remove, off, push, get, child, onChildRemoved, onChildChanged, onChildAdded } from "firebase/database";


 // add expense
export const addExpense = (expense)=>({
    type: "ADD_EXPENSE",
    expense
});

export const startAddExpense = (expenseData = {})=>{
    return (dispatch)=>{
        const {
            description = '',
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
        const expense = { description, note, amount, createdAt };
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

// edit expense
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});