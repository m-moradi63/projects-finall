import { Sidebar } from "../compunents/Sidebar.tsx";
import { Menu } from "../subcomponent/Menu.tsx";
import { Nav } from "../subcomponent/nav.tsx";
import { Overview } from "../subcomponent/Overview.tsx";
import { useSearchParams } from "react-router-dom";
import { Repositories } from "./Repositories.tsx";

export function Profile() {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log("searchparams" , searchParams)
  if(searchParams.get("tab")==="repositories"){
    return (
     <Repositories/>
    )
  }
  return (
    <div className=" w-[100%]   ">
      <div className="border-1 solid bg-gray-50 w-full">
      <Nav />
      <Menu />
      </div>
      <div className="flex box-border w-[90%] m-auto mt-[1rem] ">
        <Sidebar />
        <Overview />
      </div>
    </div>
  );
}
