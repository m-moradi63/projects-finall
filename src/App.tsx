import { Profile } from "./compunents/profile.tsx";
import { Nav } from "./subcomponent/nav-top.tsx";
import { Reposit } from "./subcomponent/Repositories.tsx";
import { Octokit } from "octokit";
import { Main } from "./compunents/Main.tsx";
import { repoTab } from "./compunents/repoTab.tsx";
import { Overview } from "./subcomponent/Overview.tsx";
import { Route , Routes} from "react-router-dom";
export const username = "shahramardalan"
export interface usertype {
  username :string
}

export function App(username:string) {
  return (
    <div>
      <Routes>
        <Route index element={<Main username={username}/>}/>
        <Route path="/repoTab" element={<repoTab />}/>
        
        
      
        
        </Routes>
     <Main username={username}/>
    
     
   

     
    </div>
  );
}
