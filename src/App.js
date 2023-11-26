import { useState } from "react"
import { Profile } from "./compunents/Profile.jsx"


export function App() {


  return (
    <div>
      {/* header */}
      <div className="flex justify-around mx-16 mt-8 ">
        {/* left section */}
        <div className="inline-block w-2/4">
          <i className="fa-solid fa-bars fa-2xl  mr-3"></i>
          <i className="fa-brands fa-github fa-2xl"></i>
          {/* <span>{profile}</span> */}
        </div>
        {/* right section */}
        <div className="inline-block w-2/4 flex">
          <div className="inline-block w-80 border-solid border-2 border-inherit rounded border-indigo-600 ... inline-block">
            <i className="fa-solid fa-magnifying-glass"></i>type
            <i className="border-solid border-2 border-indigo-600 rounded-md border-inherit">/</i>
            <p className="inline-block ">to search</p>
            <div className="inline-block pl-40">
              <i>|</i>
              <i className="fa-solid fa-arrow-right">-</i>
            </div>

          </div>
          <p className="inline-block ml-4">|</p>
          <div className="inline-block w-10 ml-4 border-solid border-2 border-inherit rounded border-indigo-600 ... inline-block">+ <i className="fa-sharp fa-solid fa-caret-down"></i>
          </div>
          <div className="flex justify-around  inline-block ml-4">
            <i className="  fa-regular fa-circle-dot"></i>
            <i className="  fa-regular fa-circle-dot"></i>
            <i className="  fa-regular fa-circle-dot"></i>

          </div>
        </div>

      </div>
      {/* navbar */}
        <div className="flex items-center mt-8 ml-16">

        <nav >
          <a className="ml-4">Overwiew</a>
          <a className="ml-4">Repositories</a>
          <a className="ml-4">Projects</a>
          <a className="ml-4">Packages</a>
        </nav>
      </div>
      {/* main */}
      <div className="mt-8 ml-16">
        <Profile/>
        
      </div>
    </div>

  )
}