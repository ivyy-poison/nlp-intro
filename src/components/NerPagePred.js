import React from "react"
import parse from "html-react-parser"

export default function NerPagePred(props) {

    var predictions = props.translatedText.map((translation) => {
        return (
            <div className="ner-prediction">
                {parse(translation)}
            </div>
        )
    })

    return (
        <div className="entity-prediction">
            <h1>Prediction goes below here</h1>
            {predictions}
        </div>
    )
}