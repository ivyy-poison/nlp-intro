import React from "react"

export default function ModelOption(props) {

    // const isChecked = (props.formData[props.id] !== undefined) ? props.formData[props.id] : false

    return (
        <li>
            <div className="options">
                <input 
                    type="checkbox" 
                    // checked={isChecked}
                    onChange={props.handleChange}
                    id={props.id} 
                    value={props.id} 
                    />
                <label htmlFor={props.id}>{props.model} ({props.lang})</label>
            </div>   
        </li> 
    )
}