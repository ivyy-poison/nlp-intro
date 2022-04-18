import React from "react"

function MainHomePage() {
    return (
        <main className="main-content">
            <h2 className="main-title">Exploration of NLP in various languages</h2>
            <div className="main-bodytext">
                <p>
                    Over the course of the past few months, I have explored
                    I have attempted to explore NLP in various languages including
                    in various languages including:
                </p>
                <ol>
                    <li>Chinese</li>
                    <li>Malay</li>
                    <li>Indonesian</li>
                </ol>
                <p>
                    Specifically in the area of Named Entity Recognition, which
                    is the task of identifying and classifying named entities
                    into pre-defined categories. For my project, the categories that
                    I have chosen are: Person, Location and Organisation. 
                </p>
            </div>
        </main>
    )
}

export default MainHomePage
