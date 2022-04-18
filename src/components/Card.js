import React from "react"


export default function Card() {
    return (
        <div className="card">
            <img className="card-img"></img>
            <div className="card-stats">
                <img className="card-star"></img>
                <span>5.0</span>
                <span>(6) .</span>
                <span>USA</span>
            </div>
            <p>life lessons with person</p>
            <p><span className="bold">from $136</span>/ person</p>
        </div>
    )
}