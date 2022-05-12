import React from "react"

export default function ModelOption(props) {
    return (
        <li>
            <div className="checkbox-option">
                <input 
                    type="checkbox" 
                    checked={props.formData[props.id]}
                    onChange={props.handleChange}
                    id={props.id} 
                    value={props.id} 
                />
                <label htmlFor={props.id}>{props.model} ({props.lang})</label>
            </div>   
        </li> 
    )
}