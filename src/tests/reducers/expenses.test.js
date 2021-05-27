import moment from "moment";
import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses"

// Tests for expensesReducer

test('should set up default expense (empty array)', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});


test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2'
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([ expenses[0], expenses[2] ]);
});


test('should NOT remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '5'
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});


test('should add an expense', () => {
    const newExpense = {
        id: '4',
        description: 'Water Bill',
        note: '',
        amount: 500,
        createdAt: moment(0).add(10, 'days').valueOf()
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, newExpense]);
});


test('should edit an expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '3',
        updates: {
            note: 'edited note test'
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state[2].note).toBe('edited note test');
});


test('should NOT edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5'
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});