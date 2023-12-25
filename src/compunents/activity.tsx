
import { Overview } from "../subcomponent/Overview.tsx";
import { Reposit } from "../subcomponent/Repositories.tsx";
import { Route, Routes } from "react-router-dom";

export function Activity() {
  
  return (
     <div>
       <Routes>
      <Route index element={<Overview/>}/>
        <Route path="/Overview" element={<Overview/>}/>
        <Route path="/Repository" element={<Reposit/>}/>
      </Routes>
     </div>

  )}
