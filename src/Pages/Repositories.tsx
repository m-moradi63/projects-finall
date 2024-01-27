import { Sidebar } from "../compunents/Sidebar.tsx";
import { usertype } from "../App.tsx";
import { Menu } from "../subcomponent/Menu.tsx";
import { Nav } from "../subcomponent/nav.tsx";
import { Reposit } from "../subcomponent/Repository.tsx"
import { useRepos } from "../hooks/usereposit.ts";

export function Repositories() {
  const {loadingRepos} = useRepos()
  
  return (
    <div >
     <div className=" border-1 solid bg-gray-300  min-h-[8.1rem]  h-[8.1rem] mx-auto">
        
        <Nav />

        <Menu />
      </div>
      <div className="flex justify-center box-border    gap-0  mt-[1rem] ">
        <Sidebar  />
        <Reposit />
      </div>
    </div>
  );
}
