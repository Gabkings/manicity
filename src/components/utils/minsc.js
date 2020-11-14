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

export const validate = (element) => {
    let error = [true,''];

    if(element.validation.email){
        const valid = /\S+@\S+\.\S+/.test(element.value);
        const message = `${!valid ? 'Must be a valid email':''}`;
        error = !valid ? [valid,message]: error;
    }

    if(element.validation.required){
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This field is required':''}`;
        error = !valid ? [valid,message]: error;
    }

    return error;
}



