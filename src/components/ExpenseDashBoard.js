// import React from 'react'
// const ExpenseDashBoard = () =>(
//     // <div>
//     //  <p>This is from my dashboard</p>
//     // </div>
// )
// export default ExpenseDashBoard
import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashBoard = () =>(
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
)

export default ExpenseDashBoard