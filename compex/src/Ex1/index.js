import React, {Component} from 'react'
import PrintName from './PrintName';
import PrintArr from './PrintArr';
import PrintSum from './PrintSum';

export default class Ex1 extends Component{

    constructor(){
        super()
        this.state = {
            arr: [
                {pcode:1, pname:'연필', price:300, selected:false},
                {pcode:2, pname:'노트', price:1000, selected:false},
                {pcode:3, pname:'샤프', price:1500, selected:false},
                {pcode:4, pname:'축구공', price:8000, selected:false}
            ]
        }
    }
    
    checkProduct = ({pcode}) => {
  
        //console.log(pcode)

        const target = this.state.arr.filter((obj) =>  obj.pcode === pcode)[0]

        //console.log(target);

        const idx = this.state.arr.indexOf(target)

        //console.log(idx)

        this.state.arr[idx].selected =  !this.state.arr[idx].selected

        this.setState( {arr: this.state.arr})
    }

    render(){

        const {arr} = this.state;

        return(
            <div>
                <PrintArr arr={arr} fn={this.checkProduct}></PrintArr>
                <PrintSum arr={arr}></PrintSum>
                <PrintName name={"Jang Tae Wuk"}></PrintName>
            </div>
        )
    }
}
