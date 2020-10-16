import React from 'react'

import { Link } from 'react-router-dom'


//to enable client side routing--Link ....>otherwise home page will be loaded from server once 404 error is found and we click go home
// Link and NavLink are same but few diff
// we can not customize the Link items
//We can customie with NavLink
const NotFoundPage = () =>(
    <div>
    404 - <Link to="/">Go Home</Link>
    </div>

)
export default NotFoundPage