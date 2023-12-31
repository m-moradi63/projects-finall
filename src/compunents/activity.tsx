
import { Overview } from "../subcomponent/Overview.tsx";
import { Reposit } from "../subcomponent/Repositories.tsx";
import { Route, Routes, useParams } from "react-router-dom";
import { username } from '../compunents/profile.tsx';
import { repoTab } from "./repoTab.tsx";


/* const paramrepose = useParams()
const paramover= useParams() */

export function Activity(props:username) {
  
  return (
     <div>
       <Routes>
      <Route index element={<Overview username={props.username}/>}/>
        <Route path="/Overview" element={<Overview username={props.username}/>}/>
        <Route path="/Repository" element={<Reposit />}/>
        <Route path="/repoTab" element={<repoTab/>}/>
        
      </Routes>
     </div>

  )}
