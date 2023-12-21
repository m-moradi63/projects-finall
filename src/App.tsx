
import { Profile } from "./compunents/profile.tsx"
import { Nav } from "./compunents/headers.tsx"
import {Activity} from "./compunents/activity.tsx"
import { Octokit  } from "octokit";
import { Main } from "./compunents/Main.tsx"
import React from "react";


  

export function App() {
  const token = "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"
  const octokit = new Octokit({auth: token })
    
   

  return (
    <div >
      <Nav />
      <Main/>
      
      
    </div>
  )
}