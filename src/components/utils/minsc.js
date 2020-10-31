import React from 'react'
import {Link} from 'react-router-dom'


export function Tag(props) {
    const template = (
    <div 
        style={{
                background: props.bck,
                color: props.color,
                fontSize: props.size,
                padding:"5px 10px",
                fontFamily:"Righteous",
                display:"inline-block",
                ...props.add
            }}
    >{props.children}</div>
    )

    if(props.link){
        return (
            <Link to={props.linkto}>
            {template}
            </Link>
        )
    }else{
        return template
    }

    
}

export function firebaseLooper(snapshort) {
    let data = []
    snapshort.forEach((childSnapshot) =>{
        data.push({
            ...childSnapshot.val(),
            id: snapshort.key
        })
    })
    return data
}

export function reverseArray(actualArr){
    let reversedArr = []

    for(let i = actualArr.length-1; i> 0 ; i--){
        reversedArr.push(actualArr[i])
    }
    return reversedArr
}




