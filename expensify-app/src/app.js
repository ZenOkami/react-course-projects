import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
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

store.dispatch(addExpense({ description: 'Gas bill', amount: 80, createdAt: -1000000 }));
store.dispatch(addExpense({ description: 'Water Bill', amount: 60, createdAt: 10000012345 }));
store.dispatch(addExpense({ description: 'Rent', amount: 850, createdAt: 1500005555555 }));

const root = ReactDOM.createRoot(document.getElementById('app'));

const jsx = (
    <Provider store={store}>
        <Routes />
    </Provider>
);

root.render(jsx);