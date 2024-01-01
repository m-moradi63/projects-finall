import { Profile } from "./profile";
import { Activity } from "./activity";

import { Overview } from "../subcomponent/Overview.tsx";
import { Reposit } from "../subcomponent/Repositories.tsx";
import { repoTab } from "./repoTab.tsx";
import { Route, Routes, useParams } from "react-router-dom";
import { Nav } from "../subcomponent/nav-top.tsx";
import { Menu } from "../subcomponent/Menu.tsx";
import { usertype } from "../App.tsx";


/* const params = useParams() */
export function Main(props:usertype) {


    return (
        <div className="max-w-[1024px] m-auto  mt-8 ">
      
          <Nav/>
          <Menu/>
          <Profile username={props.username}/>
            

        </div>
    )
}