


function textReducer(state = {text:''}, action) {

    console.log("textReducer.....................", action)

    const {type, payload} = action

    if(type === 'REQUEST'){
        return {text:'LOADING.................'}
    }else if(type === 'SUCCESS'){
        return {text: action.payload}
    }
    return state
}

export default textReducer