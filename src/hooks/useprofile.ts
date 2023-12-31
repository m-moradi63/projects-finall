import { User, apiRequest , apiRepos, Repositoryes } from "../compunents/getUser.ts";
import { useEffect, useState } from "react";
import { Profile , usertype  } from "../compunents/profile.tsx";

const username = "shahramardalan"
export function useProfile({}){
    const [Getuser, setGetuser] = useState<User>();
    const [loading, setloading] = useState(true)
    const [repositState, setrepositState] = useState<Array<Repositoryes>>([]);
    const [loadingREPO, setloadingREPO] = useState(true)
    const [filter, setfilter] = useState<string>("");
    useEffect(() => {
      apiRequest(username).then(function (data) {
        setGetuser(data);
        
    })
    .finally(()=>{
      setloading(false)
    })
  
    },[]);
    useEffect(() => {
      apiRepos(username).then(function (data) {
        setrepositState(data);
        /* console.log("contributions is :", repositState) */
      })
      .finally(()=>{
        setloadingREPO(false)
      })
  
    }, []);
    useEffect(() => {
      
      if (filter === "All") {
        apiRepos(username).then(function (data) {
          setrepositState(data.filter((elmn) => {
            return elmn
    
          }))
          
          console.log("tmmmmmp:", repositState)
        })
      }
      else if (filter === "Forks") {
        apiRepos(username).then(function (data) {
          setrepositState(data.filter((elmn) => {
            return elmn.fork===true
    
          }))
        
          console.log("tmmmmmp:", repositState)
        })
      }
      else if (filter === "Archived") {
        apiRepos(username).then(function (data) {
          setrepositState(data.filter((elmn) => {
            return elmn.archived===true
    
          }))
          console.log("archive:", repositState)
        })
      }
    }, [filter]);

return{
    Getuser: Getuser,
    loading :loading,
    repositState : repositState,
    loadingREPO : loadingREPO,
    filter : filter,
    setfilter : setfilter


}

}