import React from "react";
import { shallow } from 'enzyme';
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from '../fixtures/expenses'

let startAddExpense, history, wrapper;

beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
})

test('Should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

// test('Should handle onSubmit', () => {
//     wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
//     expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
// })