import React, {Component} from 'react'
import { connect } from 'react-redux'



class TextButton extends Component {
    render() {
        return(
            <div>
                <button onClick={this.props.requestChange} >CHANGE TEXT</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestChange: () => { 
            console.log("requestChange click")
            dispatch({type:'REQUEST'}) 
        }
    }
}

export default connect(null, mapDispatchToProps)(TextButton)