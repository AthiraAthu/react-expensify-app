import moment from 'moment'
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters'

test('should setup startdate action object', () =>{
    const action =  setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})
test('should setup enddate action object', () =>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})
test('should setup sortByAmount action object', () =>{
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})
test('should setup sortByDate action object', () =>{
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    })
})
test('should setup set text filter action object with provided values', () =>{
    const action = setTextFilter('rent')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    })
})
test('should setup set tex filter action object with default values', () =>{
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})