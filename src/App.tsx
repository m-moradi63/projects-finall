
import { Profile } from "./compunents/profile.tsx"
import { Nav } from "./compunents/headers.tsx"
import {Activity} from "./compunents/activity.tsx"
import { Octokit  } from "octokit";
import { Main } from "./compunents/Main.tsx"
import React from "react";


  

export function App() {
 
 return (
    <div >
      <Nav />
      <Main/>
      
      
    </div>
  )
}