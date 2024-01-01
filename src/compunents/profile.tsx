import { useEffect, useState } from "react";
import { apiRequest, apiRepos } from "./getUser.ts";
import { Activity } from "./activity.tsx";
import { Sidebar } from "./Sidebar.tsx";
import { Route, Routes } from "react-router-dom";
import { usertype } from "../App.tsx";
import { Link } from "react-router-dom"
import { Menu } from "../subcomponent/Menu.tsx";
import { repoTab } from "./repoTab.tsx";



export function Profile(props:usertype) {
  
  return (
    <div className="flex box-border w-[1024px]   ">
 
   <Sidebar username={props.username}/>
   <Activity username={props.username}/>
    </div>
    
  );
}
