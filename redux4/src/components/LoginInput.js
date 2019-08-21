import React,{Component} from 'react'
import {connect} from 'react-redux'


class LoginInput extends Component{

    state = {userid:'', userpw:''}

    render(){
        return(
            <div>
                userid: <input type='text' onChange={
                    (e)=>{this.setState({userid:e.target.value})}}></input>
                userpw: <input type='text'  onChange={
                    (e)=>{this.setState({userpw:e.target.value})}}></input>
                <button onClick={()=> this.props.doLogin(this.state) }>Login</button>
            </div>
        )
    }

}
const  mapDispatchToProps = (dispatch) => {

    return{
        doLogin : (userObj) => {console.log("do Login ...... ", userObj)}
    }
}

export default connect(null,mapDispatchToProps)(LoginInput)