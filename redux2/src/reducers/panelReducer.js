import { inferredPredicate } from "@babel/types";

const initialState = {
    current : 'All'
}

function panelReducer(state = initialState,action){

    console.log("panelReducer...", state , action)

    let newState = state

    const {type,payload} = action

    if(type === 'CHANGE'){
        newState = {current:payload}
    }

    return newState
}

export default panelReducer