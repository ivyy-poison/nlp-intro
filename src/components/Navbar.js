import React from "react"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar shadow">
            {/* <img className="nav-logo" src="https://www.w3schools.com/images/lamp.jpg"></img> */}
            <h1 className="nav-title">NLP Project</h1>
            <ul className="nav-items">
                
                <Link to="/ner"><li className="nav-items-options">NER</li></Link>
                <Link to="/"><li className="nav-items-options">Rel Extraction</li></Link> 
            
            </ul>
        </nav>
    )
}

export default Navbar