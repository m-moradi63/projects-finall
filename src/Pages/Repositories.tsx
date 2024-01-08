import { Sidebar } from "../compunents/Sidebar.tsx";
import { usertype } from "../App.tsx";
import { Menu } from "../subcomponent/Menu.tsx";
import { Nav } from "../subcomponent/nav.tsx";
import { Reposit } from "../subcomponent/Repository.tsx";
import React from "react";

export function Repositories() {
  return (
    <div className="w-[1024px]">
      <Nav />
      <Menu />
      <div className="flex box-border w-[1024px]   ">
        <Sidebar  />
        <Reposit />
      </div>
    </div>
  );
}
