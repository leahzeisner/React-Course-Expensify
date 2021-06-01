import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import { getVisibleExpenses, getHiddenExpensesNumber } from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";


export const ExpensesSummary = ({ expenseCount, expensesTotal, hiddenExpenses }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00');

    let hiddenExpensesSummary = ''
    if (hiddenExpenses === 0) {
        hiddenExpensesSummary = 'Showing all expenses.'
    } else {
        hiddenExpensesSummary = `Not showing ${hiddenExpenses} hidden expenses due to filters.`
    }

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                Viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formattedTotal}</span>.
                </h1>

                <h2><span>{hiddenExpensesSummary}</span></h2>

                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    const hiddenExpenses = getHiddenExpensesNumber(state.expenses, state.filters)

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        hiddenExpenses
    };
};


export default connect(mapStateToProps)(ExpensesSummary);