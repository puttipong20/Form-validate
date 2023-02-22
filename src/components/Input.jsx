import React from 'react'
import { useState } from 'react';
import './input.css'

const Input = (props) =>{
    const[focus, setFocus] = useState(false);
    const{label,errorMessage,onChange,placehoder,id,...inputProps} = props;

    const handleFocus = (e) =>{
        setFocus(true);
    }
    return(
        <div className="Input">
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur = {handleFocus}
                onFocus={() =>
                    setFocus(true)
                }
                focus = {focus.toString()}
                placeholder = {placehoder}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default Input