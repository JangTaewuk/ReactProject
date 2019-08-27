import React,{useState} from 'react'

export default function ProductList (props) {

    const items = [
        {pno:1, name:'연필' , price: 500},
        {pno:2, name:'샤프' , price: 800},
        {pno:3, name:'노트' , price: 1000},
        {pno:4, name:'볼펜' , price: 1500}
    ]

    const [cart,setCart] = useState([])

    const addCart = (pno)=>{
        console.log("pno: "+pno);
       
        // Object.assign([], ...cart,pno)
        setCart( [...cart,pno] )
    }


    const itemList = items.map(({pno,name,price}) => 
        <li key={pno}>{name} - {price}
            <input type='checkbox' onChange={()=> addCart(pno)}></input>
        </li>)

    const cartList = cart.map( (pno,idx)=> <li key={idx}>{pno}</li>)

    return(
        <div>
            <ul>
                {itemList}
            </ul>
            <hr/>
            <h2>ToTal Price</h2>
                <ul>
                   {cartList}
                </ul>            
        </div>
    )
}