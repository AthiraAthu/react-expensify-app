import moment from 'moment'
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default value state', () =>{
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})
test('should remove expenses by id', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})
test('should not remove expenses if id not found', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '123'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
test('should add an expense', () =>{
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '143',
            description: 'new rent',
            amount: 2300,
            note: 'nothing',
            createdAt: moment()
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expense])
})
test('should edit an expense', () =>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'New gum'
        }
    }
        const state = expensesReducer(expenses, action)
        expect(state[0].description).toBe('New gum')
})
test('should not edit if no id found', () =>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1234',
        updates: {
            amount: 1245
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})