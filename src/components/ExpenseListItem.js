import React from 'react'
import { Link } from 'react-router-dom'
const ExpenseListItem = ({ id,description, amount, createdAt }) =>(
    <div>
    <Link to={`/edit/${id}`}>
    <h3>{description}</h3>
    </Link>
    <p>{amount}-{createdAt}</p>
    </div>
)
export default ExpenseListItem
// export default connect()(ExpenseListItem)//we just need to connect to store//we want nothing from store
//we can also destructure dispatch prop in {}