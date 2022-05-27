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
        <form onSubmit={props.handleSubmit} className="p-5 bg-fuchsia-100">
            <div className="ner-form">
                <div className="model-list my-5">
                    <fieldset className=" border-2 border-slate-600 rounded sm:w-full md:w-3/5 bg-slate-100"> 
                        <legend className="ml-10">Select available NER Models here</legend> 
                        <div className="p-5 w-full h-full ">
                            <ul className="overflow-y-scroll max-h-120 checkboxes-list"> 
                                {modelOptions}
                            </ul>
                        </div>
                         
                    </fieldset> 
                </div>

                <div className="my-5 w-full ">
                    <textarea  
                        

                        placeholder="enter your text here"
                        onChange={props.handleChange}
                        name="text"
                        value={props.formData.text}
                        className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 
                        focus:bg-white \
                        focus:border-blue-600 
                        focus:outline-none"
                    />
                    <button className="mt-5 flex ml-auto bg-teal-100 submit-button shadow">submit</button>
                </div>
            </div>
        </form>
    )
}