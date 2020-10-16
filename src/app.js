import React from 'react'
import ReactDOM from 'React-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css'
import configureStore from './store/configureStore'
import { addExpense, editExpense, removeExpense} from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectores/expenses'
import AppRouter from './routers/AppRouter'

console.log('test')

const store = configureStore()

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)
})


// store.dispatch(setTextFilter('gas'))
// setTimeout(() =>{
//     store.dispatch(setTextFilter('water'))
// },3000)


const jsx = (
    <Provider store = {store}>
     <AppRouter />
    </Provider>
    
)
//provider allows us to provide the store to all our components
ReactDOM.render(jsx,document.getElementById('app'))