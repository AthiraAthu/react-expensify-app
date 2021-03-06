import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should set up default filter values', () =>{
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})
test('should set sortBy to amount', () =>{
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})
test('should set sortBy to date', () =>{
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})
test('should setup text filter', () =>{
    const text = 'my text'
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text })
    expect(state.text).toBe('my text')
})

test('should setup start date', () =>{
    const date = moment()
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', date })
    expect(state.startDate).toEqual(date)
})
test('should setup end date', () =>{
    const date = moment()
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', date })
    expect(state.endDate).toEqual(date)
})
