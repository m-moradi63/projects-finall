import { useState } from "react"
import { Profile } from "./compunents/Profile.jsx"
import { Nav } from "./compunents/headers.jsx"



export function App() {


  return (
    <div>
      <Nav />
      <div className="flex mt-8 columns-3 ">
        <div className="columns-12 ">
          <div className="columns border-4 solid ">
            <img  src="https://avatars.githubusercontent.com/u/3523430?v=4" />
          </div>
          <div className="border-4 solid">
            <img  src="https://avatars.githubusercontent.com/u/3523430?v=4" />
          </div>
        </div>
        {/* <div className=" h-[20rem] bg-black  border-solid border-2 border-slate-300 border-indigo-600   ">
           
        </div>
        <div className="   border-solid border-2 border-slate-300 border-indigo-600">
        
        </div>
        <div className="   border-solid border-2 border-slate-300 border-indigo-600">
        
        </div>
        <div className="   border-solid border-2 border-slate-300 border-indigo-600">
       
        </div>
        <div className="  border-solid border-2 border-slate-300 border-indigo-600">
       
        </div> */}
      </div>
    </div>
  )
}