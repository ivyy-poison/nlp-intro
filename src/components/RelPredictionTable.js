import React from "react"

export default function RelPredictionTable(props) {

    var relations = props.predictions.map((triplet) => {
        return (
            <tr>
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
                {/* <tr>
                    <td>aidawouidhiu adhwahdawd</td>
                    <td>aidawouidh iuadhwahdawd</td>
                    <td>aidawouidhi uadhwahdawd</td>
                </tr> */}
                </tbody>
            </table>
        </div>
    )
}