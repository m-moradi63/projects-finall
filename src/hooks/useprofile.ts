import { User, getUser } from "../api/getUser.ts";
import { getRepos, Repositoryes} from "../api/getrepository"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';



export function useProfile(username:string ) {
  const [Getuser, setGetuser] = useState<User>();
  const [loading, setloading] = useState(true);
  const [repositState, setrepositState] = useState<Array<Repositoryes>>([]);
  const [loadingREPO, setloadingREPO] = useState(true);
  const [loadingOVER, setloadingOVER] = useState(true);
  const [filter, setfilter] = useState<string>("");
  const [searchItem, setSearchItem] = useState("");
  const [languageItem, setlanguageItem] = useState("");
 



 
  useEffect(() => {
    getRepos(username!)
      .then(function (data) {
        setrepositState(data);
      })
      .finally(() => {
        setloadingOVER(false);
      });
  }, []);
  useEffect(() => {
    setloadingOVER(false);
    getUser(username!)
      .then(function (data) {
        setGetuser(data);
        
      })
      .catch(() => {
        setloadingOVER(true);
      });
  }, []);
  useEffect(() => {
    getUser(username)
      .then(function (data) {
        setGetuser(data);
      })
      .finally(() => {
        setloading(false);
      });
  }, []);
  useEffect(() => {
    getRepos(username)
      .then(function (data) {
        setrepositState(data);
      })
      .finally(() => {
        setloadingREPO(false);
      });
  }, []);
  
  return {
    Getuser: Getuser,
    setGetuser: setGetuser,
    loading: loading,
    setloading :setloading,
    repositState: applyFilter(repositState , filter, searchItem,languageItem),
    loadingREPO: loadingREPO,
    loadingOVER: loadingOVER,
    setloadingOVER: setloadingOVER,
    filter: filter,
    setfilter: setfilter,
    setrepositState: setrepositState,
    searchItem:searchItem,
    setSearchItem:setSearchItem,
    languageItem:languageItem,
    setlanguageItem:setlanguageItem

    
  };
}


function applyFilter(List:Array<Repositoryes> , filter:string, searchItem:string , languageItem:string ){
  console.log("listtttt" , List )
  console.log("filterrrrr"  ,filter)

  return List.filter((elm)=>{
    if (filter==="Forks" && languageItem!=="All" ) {
      return elm.fork===true && elm.name.includes(searchItem) && elm.language===languageItem
    }
    else if (filter === "Archived" && languageItem!=="All"){
      return elm.Archived===true  && elm.name.includes(searchItem) && elm.language===(languageItem)
    }
    else if (filter === "Forks" && languageItem==="All"){
      return elm.fork===true  && elm.name.includes(searchItem) 
    }
    else if (filter === "Archived" && languageItem==="All"){
      return elm.Archived===true  && elm.name.includes(searchItem)
    }
    else if (languageItem!=="All" && filter==="All" ){
      return elm.language===(languageItem) && elm.name.includes(searchItem) 
      }
    else if (languageItem==="All" && filter==="All" ){
    return true && elm.name.includes(searchItem) 
    }
    else if (languageItem==="" && filter==="" ){
      return true && elm.name.includes(searchItem) 
      }
  })
 /*  function fidrepository(applyFilter , searchItem:string){
  if(searchItem) {
   applyFilter.filter ((elm)=>{
    return elm.includes(searchItem)}

    
 
  } */
}