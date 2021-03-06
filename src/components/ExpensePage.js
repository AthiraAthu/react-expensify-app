// import React from 'react'
// import ExpenseList from './ExpenseList'
// import ExpenseListFilters from './ExpenseListFilters'

// const ExpensePage = () =>(
//     <div>
//       <ExpenseListFilters />
//       <ExpenseList />
//     </div>
// )

// export default ExpensePage

import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'
// const ExpensePage = (props) =>(
//     <div>
//      <h1>Add Expense</h1>
//      <ExpenseForm
//      onSubmit={(expense) =>{
//         props.dispatch(addExpense(expense))
//         props.history.push('/')
//      }}
//      />
//     </div>
// )
// export default connect()(ExpensePage)
export class ExpensePage extends React.Component {
    onSubmit = (expense) => {
      this.props.addExpense(expense);
      this.props.history.push('/');
    };
    render() {
      return (
        <div>
          <h1>Add Expense</h1>
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
        </div>
      );
    }
  }
  const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
  });
  
  export default connect(undefined, mapDispatchToProps)(ExpensePage);