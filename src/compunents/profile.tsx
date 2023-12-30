import { useEffect, useState } from "react";
import { apiRequest, apiRepos } from "./getUser.ts";
import { Activity } from "./activity.tsx";
import { Sidebar } from "./Sidebar.tsx";
import { Route, Routes } from "react-router-dom";


const username = "shahramardalan"
export interface usertype {
  username :string
}

export function Profile() {
  return (
    <div className="flex box-border w-[1024px]   ">
   <Sidebar username={username}/>
   <Activity username={username}/>
    </div>
  );
}
