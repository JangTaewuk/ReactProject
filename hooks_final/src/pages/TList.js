import React,{useState,useEffect} from 'react';

export default function TList(props){

    console.log(props)

    const {history,match} = props

    const [page,setPage] = useState(match.params.page)

    return(
        <div>
            <h1>Todo List Page ---- {page}</h1>
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