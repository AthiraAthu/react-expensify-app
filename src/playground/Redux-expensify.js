import { createStore, combineReducers } from 'redux'
//combineReducers is for creating multiple reducers and combine them together
import uuid from 'uuid'
//to create unique id

//action generators
//ADD EXPENSE

const addExpense = (
    {
        description = '', note = '', amount = 0, createdAt = 0 
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({id} = {}) => ({
    type:'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter = (text  = '') =>({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = () =>({
    type:'SORT_BY_AMOUNT'
})

const sortByDate = () =>({
    type:'SORT_BY_DATE'
})

const setStartDate = (date) =>({
    type: 'SET_START_DATE',
    date

})
const setEndDate = (date) =>({
    type: 'SET_END_DATE',
    date

})

// const demoState = {
//     expenses: [{
//         id: 'a123eft',
//         description: 'January rent',
//         note: 'This was the final payment for that address',
//         amount: 5400,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount',  //date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// }

const expenseReducerDefaultState = []

//expense reducer

const expenseReducer = (state = expenseReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            // return state.concat(action.expense) //we dont want to change the original state.instead we can return a new array using concat
            return [
                ...state,
                action.expense
            ]
            // ... is a spread operator which we can use to create new array or something with existing ones and spread out
            //eg : [...state,'hi']==>creates new array which contains all the items in the state and hi
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => action.id !== id)    
            
        case 'EDIT_EXPENSE':
            return state.map((expense) =>{
                if(expense.id === action.id){
                    return {
                        ...state,
                        ...action.updates
                    }
                }
                else{
                   return expense 
                }
            })
        default:
            return state
    }
}

//Filters reducer
const filterReducerDefaultstate = {
    text: '',
    sortBy:'date',
    startDate: undefined,
    endDate: undefined

}
const filterReducer = (state = filterReducerDefaultstate, action) =>{
    switch(action.type){
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text:action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            }
            case 'SORT_BY_DATE':
                return {
                    ...state,
                    sortBy:'date'
                }
            case 'SET_START_DATE':
                return {
                    ...state,
                    startDate:action.date
                }
                case 'SET_END_DATE':
                    return {
                        ...state,
                        endDate:action.date
                    }
        default:
            return state
    }
    
}

//get visible expenses

//to filter and sort the itmes before dispalying

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) =>{
    return expenses.filter((expense) =>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) =>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }
        if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    })

}
//store creation

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
)

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 40}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300}))
// console.log(expenseOne)
// store.dispatch(removeExpense({id: expenseOne.expense.id}))

// store.dispatch(editExpense(expenseTwo.expense.id,{amount: 1000}))

// store.dispatch(setTextFilter("rent"))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())

// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))