import axios from 'axios'

// export const fetchFn = (dispatch) => {
//     console.log("test1 thunk......")
//     dispatch({ type: "START_LOADING" })
//     setTimeout(() => {
//         console.log("test2 settiomeOut")
//         dispatch({ type: "END_LOADING" })
//     }, 3000);
//}

export const fetchFn = (dispatch) => {
    console.log("test1 thunk......")
    dispatch({ type: "START_LOADING" })
    axios.get('http://192.168.41.80:8080/sample/hello')
    .then( res => {
        console.log(res.data)
        dispatch({ type: "END_LOADING" })
    })
}

function s1Reducer(state = { text1: '' }, action) {
    console.log("s1Reducer...........", action)

    const { type } = action

    let newState = state

    if (type === 'START_LOADING') {
        newState = { text1: "로딩중..." }

    } else if (type === 'END_LOADING') {
        newState = { text1: "로딩완료..." }
    }




    return newState
}

export default s1Reducer