import React,{useState} from 'react'

export default function TextBox(props) {

    const [ text , setText ] = useState('Hello')

    return(
        <div>
            <input type="text" value={text} onChange={(e)=>{ setText(e.target.value)}}></input>
            <button onClick={()=> setText("")}>CLEAR</button>
        </div>
    )
}

