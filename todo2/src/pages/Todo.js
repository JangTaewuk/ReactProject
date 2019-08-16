import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import TodoList from '../componenets/TodoList';
import TodoInput from '../componenets/TodoInput';

export default class Todo extends Component{

    constructor(props){
        super()
       
    }

    render(){

        const {match} = this.props
        console.log(match.path)
        if(match.path === '/todo'){
            return (
            <Router>
            <Redirect to="/todo/list/1"></Redirect>
            <Route path="/todo/list/:page" component={TodoList}></Route>
            <Route path="/todo/register"  component={TodoInput}></Route>
            </Router>
            )        
        }

        return(
            <Router>
            <div>
                <h1>Todo Page</h1>
            </div>
            <Route path="/todo/list/:page"  component={TodoList}></Route>
            </Router>
        )
    }
}