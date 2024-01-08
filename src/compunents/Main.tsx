import { Profile } from "../Pages/profile.tsx";
import { Repotab } from "../Pages/RepoTab.tsx";
import { Route, Router, Routes, useParams } from "react-router-dom";
import { Repositories } from "../Pages/Repositories.tsx";

export function Main() {
  return (
    <div className="max-w-[1024px] m-auto  mt-8 ">
      <Routes>
      <Route  index  element={<Profile />} />
        <Route path="/:username"  element={<Profile  />} />
        <Route  path="/:username/Reposit" element={<Repositories />}/>
        <Route  path="/:username/:Repotab" element={<Repotab />}/>
        <Route  path="/:username/Overview"  element={<Profile  />} />
      
      </Routes>
    </div>
  );
}
