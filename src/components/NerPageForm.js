import React from "react"

export default function NerPageForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="ner-form">

                {/* <div className="ner-form-right"> */}
                <div className="ner-model-list">
                    <fieldset className="group"> 
                        <legend>Select available NER Models here</legend> 
                        <div className="ner-checkboxes">
                            <ul className="ner-checkboxes-list"> 
                                {props.optionList}
                            </ul>
                        </div>
                         
                    </fieldset> 
                </div>

                {/* <div className="ner-form-left"> */}
                <div className="ner-input">
                    <textarea  
                        placeholder="enter your text here"
                        onChange={props.handleChange}
                        name="text"
                        value={props.formData.text}
                        className="ner-input-text"
                    />
                    <button className="submit-button">submit</button>
                </div>
                
                
                

            </div>
        </form>
    )
}