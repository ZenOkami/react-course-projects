import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal}) => (
        <div>
            <h1>Viewing {expenseCount} expense{expenseCount === 1 ? '' : 's' } totalling {numeral(expensesTotal / 100).format('$0,0.00')}</h1>
        </div>
    )

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary)

// import React from 'react';
// import { connect } from 'react-redux';
// import numeral from 'numeral';
// import selectExpenses from '../selectors/expenses';
// import expensesTotal from '../selectors/expenses-total';

// export const ExpensesSummary = ({ expenseCount, expensesTotal }) => (
//     <div>
//         <h3>Viewing {expenseCount} expense{expenseCount === 1 ? '' : 's'} totalling {numeral(expensesTotal / 100).format('$0,0.00')}</h3>
//     </div>
// )

// const mapStateToProps = (state, props) => {
//     const visibleExpenses = selectExpenses(state.expenses, state.filters);

//     return {
//         expenseCount: visibleExpenses.length,
//         expensesTotal: expensesTotal(visibleExpenses)
//     }
// };

// export default connect(mapStateToProps)(ExpensesSummary);