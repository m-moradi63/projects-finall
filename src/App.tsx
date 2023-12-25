
import { Profile } from "./compunents/profile.tsx"
import { Nav } from "./compunents/headers.tsx"
import {Activity} from "./compunents/activity.tsx"
import { Octokit  } from "octokit";
import { Main } from "./compunents/Main.tsx"

import { Sidebar } from "./compunents/Sidebar.tsx";
import { Overview } from "./subcomponent/Overview.tsx";


  

export function App() {
 
 return (
    
    <div >
     
     
      <Nav />
      <Main/>
      
      
    </div>
  )
}