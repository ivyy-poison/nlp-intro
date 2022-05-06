import React from "react"
import ModelOption from "./ModelOption"


export default function RelPageForm(props) {

    var modelOptions = props.modelList.map((model) => {
        return <ModelOption 
                    key={`${model.id}`} 
                    id={`${model.id}`}
                    model={model.name} 
                    lang={model.language}
                    handleChange = {props.handleChange}
                    formData = {props.formData}
                    />
    })

    return (
    <form onSubmit={props.handleSubmit}>
        <div className="ner-form">
            <div className="model-list">
                <fieldset className="group"> 
                    <legend>Select available RE Models here</legend> 
                    <div className="checkboxes">
                        <ul className="checkboxes-list"> 
                            {modelOptions}
                        </ul>
                    </div>
                     
                </fieldset> 
            </div>

            <div className="ner-input">
                <textarea  
                    placeholder="enter your text here"
                    name="text"
                    className="input-text"
                    onChange={props.handleChange}
                />
                <button className="submit-button shadow">submit</button>
            </div>
        </div>
    </form>)
}