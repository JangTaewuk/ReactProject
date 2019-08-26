import React, {Component} from 'react'
import { connect } from 'react-redux';


class TextDisplayer extends Component {

    render() {
        return(
            <div>
                <h1>Text -- {this.props.text}</h1>
            </div>
        )
    }
}

const mapStateToProps = ({textReducer}) => {

    console.log(textReducer)

    return  {text: textReducer.text}

}

export default connect(mapStateToProps)(TextDisplayer)

