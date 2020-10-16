//Higher Order Component (HOC) === A component that renders another component
// advantages
//Reuse code
//render hijacking
//prop manipulation
//abstarct state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
      <h1>Info</h1>
     <p>The information : {props.info}</p>
    </div>
)

const withadminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is the private info. Please dont share !!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props} /> : <p>Please authenticate</p>}
        </div>
    )
}
const AdminInfo = withadminWarning(Info)
const AuthInfo = requireAuthentication(Info)
// ReactDOM.render(<AdminInfo isAdmin = {true} info = "These are the details" />, document.getElementById("app"))
ReactDOM.render(<AuthInfo isAuth = {false} info = "These are the details" />, document.getElementById("app"))
