import { configureStore, combineReducers } from '@reduxjs/toolkit';
const { v4: uuidv4 } = require('uuid');
// import { createStore, combineReducers } from 'redux';

//ADD_EXPENSE
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})

//REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': {
            return [
                ...state, 
                action.expense
            ];
        }
        case 'REMOVE_EXPENSE': {
            return state.filter(({ id }) => id !== action.id);
        }
        case 'EDIT_EXPENSE': {
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        };
        default: 
            return state;
    }
};

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': {
            return {
                ...state,
                text: action.text
            }
        }
        default: 
            return state;
    }
}

// Store Creation

const store = configureStore({
    reducer: combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }) 
});

store.subscribe(() => {
    console.log(store.getState());
});
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 85000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300}));
const expenseThree = store.dispatch(addExpense({ description: 'Car', amount: 23200 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }))
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 750 }))
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

const demoState = {
    expenses: [{
        id: '123',
        description: 'January Rent',
        notes: 'Final Payment for that address',
        amount: 85000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};