import React from "react"

export default function RelPredictionTable(props) {


    var temp = 1
    var relations = props.predictions.map((triplet) => {
        temp = temp + 1
        return (
            <tr key={temp}>
                <td>{triplet[0]}</td>
                <td>{triplet[1]}</td>
                <td>{triplet[2]}</td>
            </tr>
        )
    })

    return (
        <div className="table-container">
            <table className="relations-table">
                <thead>
                <tr>
                    <th>head</th>
                    <th>relation</th>
                    <th>tail</th>
                </tr>
                </thead>
                <tbody>
                    {relations}
                </tbody>
            </table>
        </div>
    )
}