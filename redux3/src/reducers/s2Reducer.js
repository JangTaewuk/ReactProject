

function s2Reducer(state={text2:''},action){
    console.log("s2Reducer...........",action)

    return {text2: action.type + "---" + action.type }
}

export default s2Reducer