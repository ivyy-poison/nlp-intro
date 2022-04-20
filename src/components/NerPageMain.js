import React from "react"
import axios from "axios"
import NerPageForm from "./NerPageForm"
import NerPagePred from "./NerPagePred"
import ModelOption from "./ModelOption"


const modelList = [{modelName: "mBERT", lang: "zh"}, {modelName: "BERT-Chinese", lang: "zh"}, {modelName: "XLM-R", lang: "id"}]
// This will be replaced by a useEffect()


export default function NerPageMain(){

    // 我的名字是陈宇豪，我居住在新加坡， 我爱麦当劳。

    const [formData, setFormData] = React.useState({text: "", modelType: [], html: true})
    const [translatedText, setTranslatedText] = React.useState([])
    const [displayOptions, setDisplayOptions] = React.useState([])

    const baseURL = "http://7d09-34-125-218-182.ngrok.io"           // since now using temporary ngrok link, must change each time fastapi server is created

    // console.log("hello")
    // console.log(formData)

    React.useEffect((formData) => {
        // axios.get(`${baseURL}/ner/models`).then((response) => {
        //     var modelList = response.data.message
        //     setDisplayOptions(modelList.map((model) => {
        //         return <ModelOption 
        //                     key={`${model.modelName}-${model.lang}`} 
        //                     id = {`${model.modelName}-${model.lang}`}
        //                     model={model.modelName} 
        //                     lang={model.lang}
        //                     handleChange = {handleChange}
        //                     formData = {formData}
        //                     />
        //     }))
        // })
        setDisplayOptions(modelList.map((model) => {
            return <ModelOption 
                        key={`${model.modelName}-${model.lang}`} 
                        id = {`${model.modelName}-${model.lang}`}
                        model={model.modelName} 
                        lang={model.lang}
                        handleChange = {handleChange}
                        formData = {formData}
                        />
        }))

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

        var endPoints = []
        for (let i = 0; i < formData.modelType.length; i++) {
            endPoints.push(`${baseURL}/ner/zh/test/${formData.modelType[i]}`)
        }
        console.log("he")
        Promise.all(endPoints.map(function (endpoint) {
            axios.post(endpoint, {
                text_to_translate: formData.text,
                model_type: "temp",
                html: formData.html
            }).then((response) => {
                setTranslatedText((prevTranslatedText) => {
                    return [...prevTranslatedText, response.data.message]
                })
            })
        }))
    }

    return(
        <main className="main-content">
            <NerPageForm 
                optionList={displayOptions} 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
            />
            <NerPagePred translatedText={translatedText} />
        </main>
    )
}