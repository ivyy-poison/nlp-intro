import React from "react"
import axios from "axios"
import NerPageForm from "./NerPageForm"
import NerPagePred from "./NerPagePred"
import ModelOption from "./ModelOption"


// const modelList = [{modelName: "mBERT", lang: "zh"}, {modelName: "BERT-Chinese", lang: "zh"}, {modelName: "XLM-R", lang: "id"}]
// This will be replaced by a useEffect()


export default function NerPageMain(){

    const [modelOptions, setModelOptions] = React.useState([])
    const [formData, setFormData] = React.useState({text: "", modelType: [], html: true})
    
    const [predictionCalled, setPredictionCalled] = React.useState(false)
    const [predictions, setPredictions] = React.useState([])
    
    
    // const baseURL = "http://7d09-34-125-218-182.ngrok.io"           // since now using temporary ngrok link, must change each time fastapi server is created
    const baseURL = "http://127.0.0.1:8000"


    React.useEffect(() => {
        axios.get(`${baseURL}/ner/models`).then((response) => {
            setModelOptions(response.data.message)
        })
    }, []) 

    function handleChange(event) {
        if (event.target.type === "checkbox") {
            if (event.target.checked) {
                setFormData(prevFormData => {
                    return {
                        ...prevFormData,
                        [event.target.id]: event.target.checked, 
                        modelType: [...prevFormData.modelType, event.target.id]
                    }
                })
            } else {
                setFormData(prevFormData => {
                    return {
                        ...prevFormData,
                        [event.target.id]: event.target.checked, 
                        modelType: [...prevFormData.modelType].filter(e => e !== event.target.id)
                    }
                })
            }
        }
        else if (event.target.type === "textarea") {
            setFormData(prevFormData => {
                return{
                    ...prevFormData,
                    [event.target.name]: event.target.value
                }
            })
        }
    }       

    function handleSubmit(event){
        event.preventDefault()   // this is to prevent everything to be embedded on the URL itself.   
        console.log("button pressed")  
        setPredictions([])  

        Promise.all(formData.modelType.map(function(model) {
            axios.post(`${baseURL}/ner/zh/test/${model}`, {
                text_to_translate: formData.text,
                model_type: model,
                html: formData.html
            }).then((response) => {
                setPredictions((prevPredictions) => {
                    return [...prevPredictions, response.data.message]
                })
            })
        }))
        
        setPredictionCalled(true)

    }

    return(
        <main className="p-10">
            <NerPageForm 
                // optionList={modelOptions}
                modelList = {modelOptions} 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
            />
            {predictionCalled && <NerPagePred predictions={predictions} />}
        </main>
    )
}