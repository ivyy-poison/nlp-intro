import React from "react"

export default function ModelOption(props) {
    return (
        <li className="inline-block w-max md:w-5/12 py-3 px-5">
            <div className="flex items-center">
                <input 
                    type="checkbox" 
                    onChange={props.handleChange}
                    id={props.id} 
                    value={props.id} 
                />
                <label className="px-2" htmlFor={props.id}>{props.model} ({props.lang})</label>
            </div>   
        </li> 
    )
}