import { Sidebar } from "../compunents/Sidebar.tsx";
import {Menurepo} from "../subcomponent/MenuRepo.tsx"
import { Mainrepo } from "../subcomponent/Mainrepo.tsx";
import { Nav } from "../subcomponent/nav.tsx";

import React from "react";

export function Repotab() {
  
  return (
    <div className="w-[1024px]">
      <Nav />
      <Menurepo />
      <div className="flex box-border w-[1024px]   ">
       
        <Mainrepo />
       
      </div>
    </div>
  );
}
