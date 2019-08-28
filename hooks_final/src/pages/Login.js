import React, {useState} from 'react'
import Axios from 'axios';
import {useDispatch} from 'react-redux'

export default function Login() {

    const [userid,setUserid] = useState('user11')
    const [userpw,setUserpw] = useState('user11')
    const dispatch = useDispatch()

    const requestLogin = async () => {
        const res = await Axios.post(
            'http://192.168.41.80:8080/member/getUser',
            {userid,userpw})
        dispatch({type:'SUCCESS_LOGIN', payload:res.data})
    }

    return(
        <div>
            <input type='text' value={userid} readOnly></input>
            <input type='text' value={userpw} readOnly></input>
            <button onClick={()  => requestLogin() } >LOGIN</button>
        </div>
    )

}