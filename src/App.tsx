
import { Profile } from "./compunents/profile.tsx"
import { Nav } from "./compunents/headers.tsx"
import {Activity} from "./compunents/activity.tsx"
import { Octokit  } from "octokit";
import { Main } from "./compunents/Main.tsx"
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./compunents/Sidebar.tsx";


  

export function App() {
 
 return (
    
    <div >
      <Routes>
       <Route path="/" element={<Sidebar/>} />
            </Routes>
      <Nav />
      <Main/>
      
      
    </div>
  )
}