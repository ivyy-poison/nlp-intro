import React from "react"

import NerPrediction from "./NerPrediction"

export default function NerPagePred(props) {
    
    var predictions = props.responses.map((prediction) => {
        return (
            <NerPrediction 
                text={props.text} 
                html={prediction[0]} 
                model_name={prediction[1]}
                key={prediction[2]} 
                id={prediction[2]} 
            />
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