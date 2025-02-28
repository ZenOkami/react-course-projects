import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm'; 
import { startAddExpense } from '../actions/expenses';
import { useNavigate } from "react-router";

export const AddExpensePage = ({ startAddExpense }) => {
  const navigate = useNavigate();
  const onSubmit = (expense) => {
        console.log('Expense data received in AddExpensePage:', expense);
        startAddExpense(expense);
        navigate('/');
    };
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={onSubmit}
                />
             </div>
        );
}

const mapDispatchToProps = (dispatch) => (
    {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    }
);

export default connect(undefined, mapDispatchToProps)(AddExpensePage);