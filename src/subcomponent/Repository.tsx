import { RenderCateg } from "./renderCateg.tsx";
import { usertype } from "../App.tsx";
import { useProfile } from "../hooks/useprofile.ts";
import { useParams } from "react-router-dom";
import { SearchRepository } from "../usablesubcomponent/searchrepository.tsx";
import { DropdownButton } from "../usablesubcomponent/DropdownButtonmenu.tsx";
import { DropdownLanguage } from "../usablesubcomponent/dropdownlanguage.tsx";

export function Reposit() {
  const repo_params = useParams()
  const { languageItem,setlanguageItem, repositState,setrepositState , loadingREPO, filter, setfilter,searchItem,setSearchItem } = useProfile(repo_params.username!);
 const listmenu=[ 'Select Type','All', 'Forks' ,'Archived', 'Can be sponsored' , 'Mirrors' , 'Template']
 const listlanguage=[ 'Select Language','All','TypeScript','JavaScript','HTML' , 'CSS' ,'Objective-C', 'Java' , 'c' ]


  return (
    <div className="w-[750px]   text-xs  ">
      <div className="flex z-50 justify-between w-[45rem] border-b mb-[1rem] h-[3rem]">
      <input
        className="border-2 border-solid w-[30rem] rounded-lg h-[2rem]"
          type="text"
          placeholder="find a repository"
          value={searchItem}
          onChange={(e) => {
            
            setSearchItem(e.target.value);
            console.log("searchItem" , searchItem)
          }}
        />

        {<DropdownButton setfilter={setfilter} listmenu={listmenu} listclick={(option)=>{console.log("optionoption",option)}} />}
        {<DropdownLanguage setlanguageItem={setlanguageItem} languageItem={languageItem} listlanguage={listlanguage} listclick={(option)=>{console.log("optionoption",option)}} />}
 
       {/*  <button className="flex h-[2rem] items-center p-1  w-14 border-solid border-2 border-slate-300 border-indigo-600 ... rounded-lg">
          <span>Sort</span>
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="inline-block octicon octicon-triangle-down"
          >
            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
          </svg>
        </button> */}
      </div>

      <RenderCateg renderReposit={repositState} />
    </div>
  );
}
