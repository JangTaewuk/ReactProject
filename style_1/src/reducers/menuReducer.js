const initialState = {open:false}


function menuReducer (state = initialState, action) {

    console.log("menuReducer" , action)
   
    return {open: !state.open}
}

export default menuReducer
