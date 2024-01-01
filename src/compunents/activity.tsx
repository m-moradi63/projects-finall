import { Overview } from "../subcomponent/Overview.tsx";
import { Reposit } from "../subcomponent/Repositories.tsx";
import { Route, Routes, useParams } from "react-router-dom";
import { username, usertype } from "../App.tsx";

import { repoTab } from "./repoTab.tsx";

/* const paramrepose = useParams()
const paramover= useParams() */

export function Activity(props: usertype) {
  
  return (
    <div>
      <Routes>
        <Route index element={<Overview username={username} />} />

        <Route
          path="/Reposit"
          element={<Reposit username={props.username} />}
        />
        <Route
          path="/over"
          element={<Overview username={props.username} />}
        />
      </Routes>
    </div>
  );
}
