import React from "react"
import parse from "html-react-parser"
import axios from "axios"

export default function NerPrediction(props){
    
    const baseURL = process.env.REACT_APP_BASE_URL
    const disabled = ({show}) => <div style={{disabled: show ? "true" : "false"}}></div>
    
    const [formData, setFormData] = React.useState({
        text: props.text,
        model: props.id,
        rating: null
    })
    const [isDisabled, setIsDisabled] = React.useState(false)
    const [message, setMessage] = React.useState("")

    function handleClick(event){
        console.log(`button pressed: ${event.target.id}`)
        setIsDisabled(true)
        
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                rating: event.target.value
            }
        })


        if (event.target.value === "true"){
            console.log("TRUE")
            setMessage("You liked the model prediction") 
        } else if (event.target.value === "false"){
            console.log("FALSE")
            setMessage("You did not like the model prediction")
        } 

        axios.post(`${baseURL}/models/ner/${event.target.id}/ratings`, {
            translated_text: formData.text,
            model_id: formData.model,
            rating: event.target.value
        }).then((response) => {
            console.log("rating posted successfully")
        })
    }

    if (formData.rating === true){
        // console.log(formData.rating)
        setMessage("You liked the model prediction") 
    } else if (formData.rating === false){
        // console.log(formData.rating)
        setMessage("You did not like the model prediction")
    }
    

    return (
        <div className="ner-prediction-box">
            {parse(props.html)}
            <div className="rating">
                <div className="show-rating">
                    <p>{message}</p>
                </div>
                <div className="rate-buttons">
                    <button disabled={isDisabled} onClick={handleClick} id={props.id} value={true}>like</button>
                    <button disabled={isDisabled} onClick={handleClick} id={props.id} value={false} >hate</button>
                </div>
            </div>
        </div>
    )
}
