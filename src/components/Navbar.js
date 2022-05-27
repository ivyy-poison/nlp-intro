import React from "react"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        // <nav className="navbar shadow">
        //     <Link to="/" className="nav-title"><h2>NLP Project</h2></Link>
        //     <ul className="nav-items-list">
        //         <Link to="/ner" className="nav-links"><li className="nav-items">NER</li></Link>
        //         <Link to="/rel" className="nav-links"><li className="nav-items">Rel Extraction</li></Link>
        //     </ul>
        // </nav>
        <nav className="shadow-md flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">

            <div className="md:pl-10 mb-2 sm:mb-0 ">
                <Link to="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"><h2>NLP Project</h2></Link>
            </div>
            <div className="md:pr-10">
                <Link to="/ner" className="rounded-lg px-5 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">NER</Link>
                <Link to="/rel" className="rounded-lg px-5 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">REL</Link>
                
            </div>
        
        </nav>
    )
}

export default Navbar