import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenseItems from '../selectores/expenses'

//Unconnected component
export const ExpenseList  = (props) => (
    <div>
    {
        props.expenses.length === 0 ? (
            <p>No expenses</p>
        ) : (
            props.expenses.map((expense) =>{
            return <ExpenseListItem key={expense.id}{...expense} />  
        })   
        )
    }
    </div>

)


//maping the store state into the component props
const mapStateToProps = (state) =>{
    return {
        expenses: selectExpenseItems(state.expenses,state.filters)
    }
}
//connecting store to redux
export default connect(mapStateToProps)(ExpenseList)

// const ConnectedExpenseList = connect((state) =>{
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList)


// export default ConnectedExpenseList