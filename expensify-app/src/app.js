import React from "react";
import ReactDOM from 'react-dom/client';
import Routes from './routers/AppRouter'
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses'
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import { setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount } from "./actions/filters"; 
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: 1000 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }))
store.dispatch(addExpense({ description: 'Water Bill', amount: 100, createdAt: 100000}))
store.dispatch(addExpense({ description: 'Gas bill', amount: 80, createdAt: 1000000 }))
store.dispatch(setTextFilter('bill'))

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<Routes />);