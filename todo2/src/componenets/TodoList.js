import React from 'react'
import {Link} from 'react-router-dom'

function getServerData(page){
    const jquery = window.$

    let resultArr = null
    
    jquery.ajax({
        url:"http://192.168.41.80:8080/todo/pages/"+page,
        method:'get',
        async: false,
        success:function(result){
            console.log(result)
            resultArr = result.content
        }
    })
    return resultArr
}

export default function({match}){

    const page = match.params.page
    const arr = getServerData(page)

    const list = arr.map( ({tno,title}) => <li key={tno}>{title}</li> )

    return(
        <div>
            <h3>Todo List {page}</h3>
            <h4><Link to='/todo/register'>Add Todo</Link></h4>
            <ul>
                {list}
            </ul>

            <ul>
                <li>
                    <Link to="/todo/list/1">1</Link>
                </li>
                <li>
                    <Link to="/todo/list/2">2</Link>
                </li>
                <li>
                    <Link to="/todo/list/3">3</Link>
                </li>
                <li>
                    <Link to="/todo/list/4">4</Link>
                </li>
                <li>
                    <Link to="/todo/list/5">5</Link>
                </li>
            </ul>
        </div>
    )
}