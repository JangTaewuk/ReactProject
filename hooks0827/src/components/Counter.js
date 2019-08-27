import React,{useState} from 'react';

export default function Counter(){

    const [count, setCount] = useState(0)

    return(
        <div>
            <h1>{count}</h1> 
            <div>
                <button onClick={()=>{setCount(count + 1)}}>INC</button>            
                <button onClick={()=>{setCount(count - 1)}}>DES</button>
            </div> 
        </div>
    )
}

