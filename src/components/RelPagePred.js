import React from "react"
import RelPrediction from "./RelPrediction"

export default function RelPagePred(props){

    

    var predictions = props.predictions.map((prediction) => {
        return (
            <RelPrediction 
                predictions={prediction.result}
                model={prediction.model_id}
                text={prediction.text} 
                key={prediction.model_id} 
            />
        )
    })


    return (
        <div className="rel-prediction">
            {/* <h1>Prediction goes below here</h1> */}
            {predictions}
        </div>
    )

}