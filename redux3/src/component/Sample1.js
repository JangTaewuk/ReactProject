import React from 'react'
import { connect } from 'react-redux';
import {fetchFn} from '../reducers/s1Reducer'


function Sample1(props){

  //  const doClick = () => {
    //    props.dispatch(()=>{
      //      console.log("test1 thunk......")
        //    props.dispatch({type:"START_LOADING"})
          //  setTimeout(() => {
            //    console.log("test2 settiomeOut")
              //  props.dispatch({type:"END_LOADING"})
           // }, 3000);

        //})

    const doClick = () => {
        props.dispatch(fetchFn)


    }

    return(
        <div>
            <h1>Sample1</h1>
            <h2>Currnet : {props.text}</h2>
            <button onClick={doClick}>CLICK</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    const text1 = state.s1Reducer.text1

    return {text:text1}
}

export default connect(mapStateToProps)(Sample1)