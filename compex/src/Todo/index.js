import React,{Component} from 'react'
import TodoList from './TodoList';
import TodoInput from './TodoInput';

export default class Todo extends Component{
    static count = 0

    constructor(){
        super()
        this.state ={
            todos:[   ]
        }
    }
    addTodo = (title) => {
        const arr = this.state.todos
        arr.push({tno: ++Todo.count, title:title, complete:false})
        this.setState({todos:arr})

    }
    changeComplete= (tno) => {
        console.log(tno)

        const target = this.state.todos.filter(obj => obj.tno === tno)[0]
        const index = this.state.todos.indexOf(target)
        const tempArr = this.state.todos
        tempArr[index] = Object.assign(target, {complete: !target.complete})

        console.log(tempArr)
        this.setState({todos:tempArr})
    }
    deleteTodo = (tno) => {
        console.log("delete.."+tno)
        const target = this.state.todos.filter(obj => obj.tno === tno)[0]
        const index = this.state.todos.indexOf(target)
        const tempArr = this.state.todos
        tempArr.splice(index,1)
        console.log(tempArr)

        this.setState({todos:tempArr})
    }

    render(){

        return(
            <div style={BackGroud}>
                <h1>ToDo</h1>
                <TodoInput add={this.addTodo}></TodoInput>
                <TodoList todos={this.state.todos} change={this.changeComplete} del={this.deleteTodo}></TodoList>
            </div>
        )
    }


}

const BackGroud = {
    backgroundColor:'skyblue',
    display:'flex',
    flexDirection: 'column',
    height: '25em'    
}