import React from "react"
import ModelOption from "./ModelOption"

export default function NerPageForm(props) {

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
                        <legend>Select available NER Models here</legend> 
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
                        onChange={props.handleChange}
                        name="text"
                        value={props.formData.text}
                        className="input-text"
                    />
                    <button className="submit-button shadow">submit</button>
                </div>
            </div>
        </form>
    )
}