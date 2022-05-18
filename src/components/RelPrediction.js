import React from "react"
import RelPredictionTable from "./RelPredictionTable"

export default function RelPrediction(props) {
    return (
        <div className="rel-prediction-box-container">
            <div className="rel-prediction-box">
                <h3>Here's the prediction from model: {props.model_name}</h3>
                {props.predictions.length !== 0  && <RelPredictionTable predictions={props.predictions} />}
                {props.predictions.length === 0 && <p>Sorry, our model failed to predict any meaningful relationships between named entities</p>}
            </div>
        </div>
    )
}