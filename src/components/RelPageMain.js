import React from "react"
import axios from "axios"
import RelPageForm from "./RelPageForm"
import RelPagePred from "./RelPagePred"

export default function RelPageMain() {

    const [modelOptions, setModelOptions] = React.useState([])
    const [formData, setFormData] = React.useState({text: "", modelType: [], html: true})
    
    const [predictionCalled, setPredictionCalled] = React.useState(false)
    const [predictions, setPredictions] = React.useState([])
    
    
    const baseURL = process.env.REACT_APP_BASE_URL


    React.useEffect(() => {
        axios.get(`${baseURL}/re/models`).then((response) => {
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
            axios.post(`${baseURL}/rel/en/test/${model}`, {
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
        <main className="main-content">
            <RelPageForm 
                modelList = {modelOptions} 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
            />
            {predictionCalled && <RelPagePred predictions={predictions} />}
        </main>
    )
}