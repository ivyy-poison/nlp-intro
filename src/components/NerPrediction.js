import React from "react"
import parse from "html-react-parser"
import axios from "axios"

export default function NerPrediction(props){
    
    const baseURL = "http://127.0.0.1:8000"
    var prediction = props.prediction


    const disabled = ({show}) => <div style={{disabled: show ? "true" : "false"}}></div>
    
    const [formData, setFormData] = React.useState({
        text: prediction.text,
        model: prediction.model_id,
        rating: null
    })
    const [isDisabled, setIsDisabled] = React.useState(false)

    function handleClick(event){
        console.log("clicked")
        console.log(`button pressed: ${event.target.id}`)
        setIsDisabled(true)

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                rating: event.target.value
            }
        })

        setIsDisabled(true)

        axios.post(`${baseURL}/ner/models/${event.target.id}/ratings`, {
            translated_text: formData.text,
            model_id: formData.model,
            rating: event.target.value
        }).then((response) => {
            console.log("rating posted successfully")
        })
    }

    return (
        <div className="ner-prediction-box">
            {parse(prediction.html)}
            <div className="rating">
                <div>
                    <button disabled={isDisabled} onClick={handleClick} id={prediction.model_id} value={true}>like</button>
                    <button disabled={isDisabled} onClick={handleClick} id={prediction.model_id} value={false} >hate</button>
                </div>
            </div>
        </div>
    )
}
