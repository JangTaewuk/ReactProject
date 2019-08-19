import React from 'react'
import {connect} from 'react-redux'

const style = { 
    color:"yellow",
    margin: "2em",
    backgroundColor: "skyblue"
}

const spanStyle = {
    padding: "2em"
}

function ControlPanel(props){

    const changePanel = (target) => {
        console.log("target: " + target)
        props.dispatch({type:"CHANGE", payload:target})
    }

    return(
        <div style={style}>
            <span style={spanStyle} onClick={()=>{changePanel('All')}}>All</span>
            <span style={spanStyle} onClick={()=>{changePanel('A')}}>A_Page</span>
            <span style={spanStyle} onClick={()=>{changePanel('B')}}>B_Page</span>
            <span style={spanStyle} onClick={()=>{changePanel('C')}}>C_Page</span>
        </div>
    )
}

export default connect()(ControlPanel)