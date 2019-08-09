import React,{Component} from 'react'

export default class TodoInput extends Component {
    constructor(props){
        super(props)
        this.add = props.add
        this.state = {
            text:''
        }
    }

    sendDate = (event) => {
        console.log("add Btn: "+ this.state.text)
        this.add(this.state.text)
        this.setState( {text : '' })
    }

    setText = (event) => {
        const value = event.target.value
        this.setState( {text : value })
        
    }

    checkKeydown= (event)=>{
        if(event.charCode === 13){
            this.sendDate()
        }
        
    }

    render(){
        
        return(
            <div>
                <input type='text' onChange={this.setText} onKeyPress={this.checkKeydown} value={this.state.text}></input>
                <button onClick={this.sendDate}>ADD</button>
            </div>
        )
    }
}