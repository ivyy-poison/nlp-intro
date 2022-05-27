import React from "react"
import axios from "axios"
import NerPageForm from "./NerPageForm"
import NerPagePred from "./NerPagePred"

export default function NerPageMain(){

    const [modelOptions, setModelOptions] = React.useState([])
    const [formData, setFormData] = React.useState({text: "", modelType: []})
    
    const [predictionCalled, setPredictionCalled] = React.useState(false)
    const [predictions, setPredictions] = React.useState({})

    const baseURL = process.env.REACT_APP_BASE_URL

    React.useEffect(() => {
        axios.get(`${baseURL}/models/ner`).then((response) => {
            setModelOptions(response.data)
            for (let i = 0; i < response.data.length; i ++) {
                setFormData(prevFormData => {
                    return {
                        ...prevFormData,
                        [response.data[i].id]: false
                    }
                })
            }
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
    console.log(formData.modelType)

    function handleSubmit(event){
        event.preventDefault()   // this is to prevent everything to be embedded on the URL itself.   
        console.log("button pressed")  
        setPredictions({text: "", responses: []})  

        Promise.all(formData.modelType.map(function(model) {
            axios.post(`${baseURL}/models/ner/${model}/prediction`, {
                text: formData.text,
                html: true
            }).then((response) => {
                setPredictions((prevPredictions) => {
                    return {
                        text: response.data.text, 
                        responses: [...prevPredictions.responses, [response.data.html, response.data.model_name, response.data.model_id]]}
                    })
                })
            })
        )
        
        setPredictionCalled(true)

    }

    return(
        <main className="p-10">
            <NerPageForm 
                modelList = {modelOptions} 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
            />
            {predictionCalled && <NerPagePred responses={predictions.responses} text={predictions.text}/>}
        </main>
    )
}