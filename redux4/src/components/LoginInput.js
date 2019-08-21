import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchLogin} from '../actions/memberAction'

class LoginInput extends Component {

    state = {userid:'', userpw:''}

    render() {
        return(
            <div>
                USERID
                <input type="text"
                    onChange={(e) => {
                        this.setState({userid:e.target.value})
                } }>
                </input>
                USERPW
                <input type="text"
                    onChange={(e) => {
                        this.setState({userpw:e.target.value})
                } }>
                </input>
                <button onClick= {() => this.props.doLogin(this.state)} >LOGIN</button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: (userObj) => dispatch(fetchLogin(userObj))
    }
}

export default connect(null, mapDispatchToProps)(LoginInput)
