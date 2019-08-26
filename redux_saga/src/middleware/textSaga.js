import axios from 'axios'
import {call,put, takeEvery} from 'redux-saga/effects'

function getData() {

    return axios.get("http://192.168.41.80:8080/sample/hello")
    .then(res => {
        console.log(res)
        return res.data
    })

}

function* fetchData() {

    console.log('fectchData............')

    const payload = yield call(getData)

    yield put({type:"SUCCESS", payload: payload})
    

}

function* mySaga(){
    yield takeEvery("REQUEST", fetchData )
}

export default mySaga