import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import configureStore from 'redux-mock-store';
import { addExpense, editExpense, removeExpense, startAddExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import thunk from 'redux-thunk';
import db from '../../firebase/firebase';

test('Should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc',
    })
});

test('Should set up edit expense action object', () => {
    const action = editExpense('123abc', { note: "New Note"});
    expect(action).toEqual({ 
        type: 'EDIT_EXPENSE', 
        id: '123abc', 
        updates: {
            note: "New Note"
        } 
    });
})

test('Should update add expense action object', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('Should add expense to database and store' , () => {
    
})

test('Should add expense to database and store' , () => {
    
})

// test('Should set up add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({ 
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             amount: 0,
//             createdAt: 0,
//             description: '',
//             note: ''
//         }
//      });
// })