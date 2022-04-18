import React from "react"
import parse from "html-react-parser"

export default function NerPagePred(props) {

    const predictions = props.translatedText.map((translation) => {
        return (
            <div className="Something">
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