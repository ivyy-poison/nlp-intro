import React from "react"

export default function NerPageForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="ner-form">
                <div className="ner-form-left">
                    <textarea  
                        placeholder="enter your text here"
                        onChange={props.handleChange}
                        name="text"
                        value={props.formData.text}
                        id="text"
                    />
                    <button className="submit-button">submit</button>
                </div>
                
                <div className="ner-form-right">
                    <fieldset className="group"> 
                        <legend>Select available NER Models here</legend> 
                        <ul className="checkbox"> 
                            {props.optionList}
                        </ul> 
                    </fieldset> 
                </div>

            </div>
        </form>
    )
}