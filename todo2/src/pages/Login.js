import React,{Component} from 'react'


export default class Login extends Component{

    state = {userid:null,userpw:null}
    
    render(){
        
        return(
            <div>
                <p>
                    USERID:<input type='text' onChange={(e)=>{this.state.userid = e.target.value}}></input>
                </p>
                <p>
                    USERPW:<input type='text' onChange={(e)=>{this.state.userpw = e.target.value}}></input>
                </p>
                <p>
                    <button onClick={()=>{this.props.doLogin(this.state)}}>Login</button>
                </p>
            </div>
        )
    
    }
}
