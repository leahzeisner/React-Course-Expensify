import { createStore, combineReducers } from "redux";
import uuid from "uuid";































store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});





const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));





const demoState = {
    expenses: [{
        id: 'asdfghjkl',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,     // in pennies
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',  // 'date' or 'amount'
        startDate: undefined,
        endDate: undefined
    }
};