import React,{Component} from "react"
import {Redirect} from 'react-router-dom'
import axios from 'axios'

export default class TodoInput extends Component{
    constructor(){
        super()
        this.state = { title:null, sended:false}
    }

    addData = () =>{
        axios.post("http://192.168.41.80:8080/todo/new",{title:this.state.title, complete:false})
        .then(res=>{
            console.log(res)
            this.setState({title:"",sended:true})
        })
    }

    render(){

        if(this.state.sended){
            return ( <Redirect to='/todo/list/1'></Redirect>)
        }

        return(
            <div>
                Title: <input type='text' onChange={(e)=> this.state.title = e.target.value }></input>
                <button onClick={this.addData}>Add</button>
            </div>
        )
    }
}