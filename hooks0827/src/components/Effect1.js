import React,{useState,useEffect} from 'react'
import Axios from 'axios';


export default function Effect1(props) {

    const [page,setPage] = useState(1)
    const [content,setContent] = useState([])

    useEffect( ()=>{
        console.log("useEffect ........")

        async function fetchDate(){
            const res = await Axios.get("http://192.168.41.80:8080/todo/pages/"+page)
            setContent(res.data.content)           
        }
        fetchDate()

    }, [ page ])

    const list = content.map( ({tno,title}) => <li key={tno}>{title}</li>)
    



    return(
        <div>
            <h1>TODO LIST</h1>
            <ul>
                {list}
            </ul>
            <div>
                <button onClick={ ()=>{setPage(1)} }>1</button>
            
                <button onClick={ ()=>{setPage(2)} }>2</button>
            
                <button onClick={ ()=>{setPage(3)} }>3</button>
            
                <button onClick={ ()=>{setPage(4)} }>4</button>
            
                <button onClick={ ()=>{setPage(5)} }>5</button>
            </div>

        </div>
    )
}