import React from 'react'

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import ExpenseDashBoard from '../components/ExpenseDashBoard'
import ExpensePage from '../components/ExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/Help'
import NotFoundPage from '../components/NotFoundPage'


const AppRouter = () => (
    <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={ExpenseDashBoard} exact={true} /> 
                    <Route path="/create" component={ExpensePage} />
                    <Route path="/edit/:id" component={EditExpensePage} />
                    <Route path="/help" component={HelpPage} />
                    <Route component={NotFoundPage}></Route>
                </Switch>
            </div>
        </BrowserRouter>

)
export default AppRouter

//Api for the BrowserRouter expects either 1 or nno children iside it,,so we have to wrap multiple routes into a div
//exact={true} otherwise all other contents must be shown
//exact={false} by default ,, then  all the routes that match with the "/" path will show
// const routes = (
//         <BrowserRouter>
//             <div>
//                 <Header />
//                 <Switch>
//                     <Route path="/" component={ExpenseDashBoard} exact={true} /> 
//                     <Route path="/create" component={ExpensePage} />
//                     <Route path="/edit" component={EditExpensePage} />
//                     <Route path="/help" component={HelpPage} />
//                     <Route component={NotFoundPage}></Route>
//                 </Switch>
//             </div>
//         </BrowserRouter>
    
// )