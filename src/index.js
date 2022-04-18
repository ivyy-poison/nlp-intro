import React from "react"
// import ReactDOM from "react-dom"
import * as ReactDOMClient from "react-dom/client"
import "./style.css"

import App from "./App"

// ReactDOM.render(<App />, document.getElementById("root"))

const root = ReactDOMClient.createRoot(document.getElementById("root"))
root.render(<App/>)