import React from "react"

import NerPrediction from "./NerPrediction"

export default function NerPagePred(props) {
    var predictions = props.predictions.map((prediction) => {
        return (
            <NerPrediction prediction={prediction} key={prediction.model_id} />
        )
    })

    return (
        <div>
            <h1>Prediction goes below here</h1>
            
            <div className="entity-predictions">
                {predictions}
            </div>
            
        </div>
        
    )
}