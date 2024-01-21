import { Sidebar } from "../compunents/Sidebar.tsx";
import {Menurepo} from "../subcomponent/MenuRepo.tsx"
import { Mainrepo } from "../subcomponent/Mainrepo.tsx";
import { Nav } from "../subcomponent/nav.tsx";

import React from "react";
import { Menudynamic } from "../usablesubcomponent/menudynamic.tsx";

export function Repotab() {
  
  return (
    <div className=" w-[100%]   ">
       <div className="border-1 solid bg-gray-50 w-full">
      <Nav />
      <Menudynamic />
      <div className="flex box-border w-[100%] ml-[10rem] mt-[1rem]  ">
       
        <Mainrepo />
       
      </div>
    </div>
    </div>
    )
  }
