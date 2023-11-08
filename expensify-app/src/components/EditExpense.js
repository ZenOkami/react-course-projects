import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpense = (props) => {
    let { id } = useParams();
    const navigate = useNavigate();
    
    return (
    <div>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense ));
                console.log('updated', expense)
                navigate('/');
            }}
        />
        <button 
            onClick={(e) => {
                props.dispatch(removeExpense({ id }))
                navigate('/');
        }}>Remove</button>
    </div>
)};

const mapStateToProps = (state) => {
    const params = {id: window.location.pathname.split("/")[2]}
    return {
        expense: state.expenses.find((expense) => expense.id === params.id)
    }
}

export default connect(mapStateToProps)(EditExpense);