import React,{Component} from 'react'

export default class Sample2 extends Component{

    constructor(){
        super()
        this.state = {num:0}
    }

    increase = () => {
        const value = ++this.state.num;
        alert("increase: "+ value)
        this.setState({num: value})       
    }

    render() {
        return(
            <div>
                <button onClick={this.increase}> Sample2 </button>
            </div>
        )
    }
}

// export default Sample2