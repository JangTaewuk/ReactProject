import React from 'react'

export default function CountButton(props){

    return(
        <button onClick={()=>{props.fn()}}>CLICK</button>
    )
}