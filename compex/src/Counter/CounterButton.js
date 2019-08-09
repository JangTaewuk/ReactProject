import React from 'react'

const CounterButton = ({fn,amount,text}) => {
    
    return(
        <button onClick={()=>{fn(amount)}}>{text}</button>
    )
}

export default CounterButton