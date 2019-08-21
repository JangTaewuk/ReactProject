import React from 'react'
import { connect } from 'react-redux';
import { fetchPage } from '../actions/sampleAction'



function Sample2(props){

    // const getPage = (page) => {
    //     console.log("pageNum: " + page);
    //     props.dispatch( ()=> {
    //         console.log("inner function "+ page)
    //         axios.get("http://192.168.41.80:8080/todo/pages/"+page)
    //         .then(res => console.log(res.data))
    //     })
    // }

    // const getPage = (page) => {
    //     console.log("pageNum: " + page);
    //     props.dispatch(fetchPage(page))
    // }

    const list = props.content.map( ({tno,title})=> {
        return <li key={tno}>{title}</li>
    })

    return(
        <div>
            <h1>Sample2</h1>
            <h2>Currnet : {props.totalPages}</h2>

            <ul>
                {list}
            </ul>
            <button onClick={()=>{props.getPage(1)}}>CLICK</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        getPage: (page) => dispatch(fetchPage(page))
    }
}

const mapStateToProps = (state) => {
    const data = state.s2Reducer

    console.log(data)

    return data
}

export default connect(mapStateToProps,mapDispatchToProps)(Sample2)