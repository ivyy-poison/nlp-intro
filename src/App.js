import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";


import Home from "./pages/Home"
import NerPage from "./pages/NerPage"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/ner" element={<NerPage/>} />
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    )
}

export default App