// Export a stateless functional component
// description, amount, createdAt
import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import moment from "moment";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {moment(createdAt).fromNow()}</p>
        <button onClick={(e) => {
            dispatch(removeExpense({ id }))
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);