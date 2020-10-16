import { createStore } from 'redux'

//Action generators ----func that generate action objects
const incrementCount = ({incrementBy = 1} = {}) =>({
    type: 'INCREMENT',
    // incrementByThis: typeof payload.incrementByThis === 'number' ? payload.incrementByThis : 1
    incrementBy
})
const decrementCount = ({decrementBy = 1} = {}) =>({
    type: 'DECREMENT',
    decrementBy
})
const resetCount = () =>({
    type: 'RESET'
})
const setCount = ({count}) =>({
    type: 'SET',
    count
})

//reducers
//reducers are pure functions whose output depends on input
//they do not communicate with outside variables
//never change state or actions
const countReducer = (state = { count: 0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }

}
//for creating store
//redux state container
//setting default value to 0
//store is tracking change in data over time

const store = createStore(countReducer)

//accessing store using getState()
// console.log(store.getState())

//to change the state of data inside store we can use actions
//actions contains object with property type
//type-name is in uppercase by convention

//whenver the dispatch call occurs subscribe() will get called
//so here it will be called 3 times
//this func returns a func which we can use to unsubscribe the subscribe
const unsubscribe = store.subscribe(() =>{
    console.log(store.getState())
})
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })
store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(incrementCount())
// unsubscribe() //we will get notified the changes via this func
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 2
// })
store.dispatch(decrementCount({decrementBy: 3}))
store.dispatch(decrementCount())
// store.dispatch({type: 'RESET'})
store.dispatch(resetCount())
store.dispatch(setCount({count:50}))
// store.dispatch({
//     type: 'SET',
//     count: 100
// })