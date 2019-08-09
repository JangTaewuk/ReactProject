import React from 'react'

const TodoList= ({todos,change,del}) => {

    const list = todos.map( ({tno, title, complete}) => {

        const style = complete ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : {}

        return (
            <li key={tno} style={style}>{title} 
                <input type='checkbox' checked = {complete ?'checked':''} onChange={() => change(tno)} ></input>
                <button onClick={()=>{del(tno)}}>삭제</button>
                </li>
        )
    })

    return(
        <ul>
            {list}
        </ul>
    )
}

export default TodoList