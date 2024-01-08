import { Sidebar } from "../compunents/Sidebar.tsx";
import { usertype } from "../App.tsx";
import { Menu } from "../subcomponent/Menu.tsx";
import { Nav } from "../subcomponent/nav.tsx";
import { Overview } from "../subcomponent/Overview.tsx";



export function Profile() {
   
  return (
    <div className=" w-[1024px]   ">
      <Nav />
      <Menu />
      <div className="flex box-border w-[1024px]   ">
        <Sidebar  />
        <Overview  />
      </div>
    </div>
  );
}
