import { useState } from "react"
import { Profile } from "./compunents/Profile.jsx"
import { Nav } from "./compunents/headers.jsx"


export function App() {


  return (
    <div>
    <Nav/>

          {/* main */}

          <div className="mt-8 ml-16">
            <Profile />


          </div>
        </div>
    

  )
}