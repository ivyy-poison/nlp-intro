import React from "react"
import axios from "axios"
import RelPageForm from "./RelPageForm"
import RelPagePred from "./RelPagePred"

export default function RelPageMain() {
    return(
        <main className="main-content">
            <RelPageForm  />
            <RelPagePred  />
        </main>
    )
}