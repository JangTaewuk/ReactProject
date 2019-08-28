import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav(props){
    
    return(
        <div>
            <Link to="/">Main</Link>
            <Link to="/list/1">List</Link>
            <Link to="/register">Register</Link>
        </div>
    )
}