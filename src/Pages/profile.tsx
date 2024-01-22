import { Sidebar } from "../compunents/Sidebar.tsx";
import { Menu } from "../subcomponent/Menu.tsx";
import { Nav } from "../subcomponent/nav.tsx";
import { Overview } from "../subcomponent/Overview.tsx";
import { useSearchParams } from "react-router-dom";
import { Repositories } from "./Repositories.tsx";

export function Profile() {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log("searchparams" , searchParams)
 /*  if(searchParams.get("tab")==="repositories"){
    return (
     <Repositories/>
    )
  } */
  return (
    <div className=" w-screen  ">
     <div className="border-1 solid bg-gray-50 w-screen ">
        <Nav />

        <Menu />
      </div>
      <div className="flex justify-center box-border w-screen  gap-0  ">
        <Sidebar />
        <Overview />
      </div>
    </div>
  );
}
