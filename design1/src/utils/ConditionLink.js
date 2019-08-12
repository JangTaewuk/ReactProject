import React from 'react'

export default function(props){
    const condition =props.condition
    const success =props.children 

    if(condition && condition()){
        return success
    }else{
        return null
    }
       
}