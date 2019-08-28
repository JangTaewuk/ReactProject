import React,{useState,useEffect} from 'react';
import Axios from 'axios';

export default function TList(props){

    const {history,match} = props
    

    const [page,setPage] = useState(match.params.page)
    const [content,setContent] = useState([])

    useEffect( ()=> {
        if(history.action === 'PUSH'){
            console.log("Push Effect....................")
            history.push("/list/"+page)
        }
    },[page])


    useEffect( ()=> {        
        if(history.action === 'POP'){
            console.log("Pop Effect.....................")
            setPage(match.params.page)
        }
    })


    useEffect( ()=> {
        const fetchData = async() => {
            const res = await Axios.get("http://192.168.41.80:8080/todo/pages/"+page)
            setContent(res.data.content)
        }
        fetchData()        
    },[page])

    const list = content.map( ({tno,title})=> <li key={tno}>{title}</li>  ) 
    console.log(history)
    
    return(
        <div>
            <h1>Todo List Page ---- {page}</h1>
            <ul>
              {list}
            </ul>
            <div>
                <button onClick={()=> setPage(1)}>1</button>
                <button onClick={()=> setPage(2)}>2</button>
                <button onClick={()=> setPage(3)}>3</button>
                <button onClick={()=> setPage(4)}>4</button>
                <button onClick={()=> setPage(5)}>5</button>                
            </div>
        </div>
    )
}