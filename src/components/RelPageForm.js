import React from "react"

export default function RelPageForm(props) {
    return (
    <form onSubmit={props.handleSubmit}>
        <div className="ner-form">

            {/* <div className="ner-form-right"> */}
            <div className="model-list">
                <fieldset className="group"> 
                    <legend>Select available NER Models here</legend> 
                    <div className="checkboxes">
                        <ul className="checkboxes-list"> 
                            {/* {props.optionList} */}
                        </ul>
                    </div>
                     
                </fieldset> 
            </div>

            {/* <div className="ner-form-left"> */}
            <div className="ner-input">
                <textarea  
                    placeholder="enter your text here"
                    // onChange={props.handleChange}
                    name="text"
                    // value={props.formData.text}
                    className="input-text"
                />
                <button className="submit-button shadow">submit</button>
            </div>
            
            
            

        </div>
    </form>)
}