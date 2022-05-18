import React from "react"
import RelPrediction from "./RelPrediction"

export default function RelPagePred(props){

    var predictions = props.responses.map((response) => {
        return (
            <RelPrediction 
                text={props.text} 
                predictions={response[0]} 
                model_name={response[1]}
                key={response[2]} 
                id={response[2]} 
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