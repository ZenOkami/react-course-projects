import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense, startAddExpense } from "../actions/expenses";
import { useNavigate } from "react-router";

const AddExpense = (props) => {
    const navigate = useNavigate();
    return ( 
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                console.log('Expense added successfully:', expense)
                props.dispatch(startAddExpense(expense));
                navigate('/')
            }}
        />
    </div>
)};

export default connect()(AddExpense);