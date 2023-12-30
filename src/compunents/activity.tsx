
import { Overview } from "../subcomponent/Overview.tsx";
import { Reposit } from "../subcomponent/Repositories.tsx";
import { Route, Routes, useParams } from "react-router-dom";


const paramrepose = useParams()
const paramover= useParams()
export function Activity() {
  
  return (
     <div>
       <Routes>
      <Route index element={<Overview/>}/>
        

        <Route path="/:username/:Overview" element={<Overview/>}/>
        <Route path="/:username/:Repository" element={<Reposit/>}/>
        
      </Routes>
     </div>

  )}
