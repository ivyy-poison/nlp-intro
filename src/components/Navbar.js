import React from "react"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar shadow">
            {/* <img className="nav-logo" src="https://www.w3schools.com/images/lamp.jpg"></img> */}
            {/* <a href="/" className="nav-title">NLP Project</a>
            <ul className="nav-items-list">
                
                <li className="nav-items"><a href="/ner" className="nav-links">NER</a></li>
                <li className="nav-items"><a href="/rel" className="nav-links">Rel Extraction</a></li>
            
            </ul> */}
            <Link to="/" className="nav-title"><h2>NLP Project</h2></Link>
            <ul className="nav-items-list">
                
                <Link to="/ner" className="nav-links"><li className="nav-items">NER</li></Link>
                <Link to="/rel" className="nav-links"><li className="nav-items">Rel Extraction</li></Link>
            
            </ul>
        </nav>
    )
}

export default Navbar