
function memberReducer(state = {user:null}, action) {

    let newState = state

    const {type, payload} = action 

    if(type === 'SUCCESS_LOGIN'){
        newState = {user:payload}
    }

    //console.log("newState" , newState)

    return newState
}


export default memberReducer
