import React from "react"

export default function Example() {
    return (
    <nav className="flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">

        <div className="mb-2 sm:mb-0">
            <a href="#" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</a>
        </div>
        <div >
            <a href="#" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">One</a>
            <a href="#" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Two</a>
            <a href="#" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Three</a>
        </div>
        
    </nav>)
}
