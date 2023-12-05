
import { Profile } from "./compunents/profile.jsx"
import { Nav } from "./compunents/headers.jsx"
import {Activity} from "./compunents/activity.jsx"
import { Octokit , app } from "octokit";
import { Main } from "./compunents/Main.jsx"


  

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