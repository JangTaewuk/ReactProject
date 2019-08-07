import React from 'react'

const PrintSum = ({arr}) => {
    const cart = arr.filter((obj) => obj.selected === true)

    let sum = 0

    cart.forEach(product => {
        sum += product.price
    })

    return (
        <div>
            <hr></hr>
            <h1>{sum}</h1>
        </div>
    )
}

export default PrintSum