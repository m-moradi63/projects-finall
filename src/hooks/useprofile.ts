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
    getUser(username!)
      .then(function (data) {
        setGetuser(data);
        
      })
      .finally(() => {
        setloadingOVER(false);
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
    repositState: applyFilter(repositState , filter),
    loadingREPO: loadingREPO,
    loadingOVER: loadingOVER,
    setloadingOVER: setloadingOVER,
    filter: filter,
    setfilter: setfilter,
    setrepositState: setrepositState,
    
  };
}


function applyFilter(List:Array<Repositoryes> , filter:string ){
  return List.filter((elm)=>{
    if (filter==="Forks") {
      return elm.fork===true
    }
    else if (filter === "Sources"){
      return elm.archived===true
    }
    return true
    
  })
}