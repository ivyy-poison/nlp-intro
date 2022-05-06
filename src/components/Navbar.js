import React from "react"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar shadow">
            <Link to="/" className="nav-title"><h2>NLP Project</h2></Link>
            <ul className="nav-items-list">
                <Link to="/ner" className="nav-links"><li className="nav-items">NER</li></Link>
                <Link to="/rel" className="nav-links"><li className="nav-items">Rel Extraction</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar