import { apiRepos , apiRequest ,User , Repositoryes } from "../compunents/getUser";
import { useEffect, useState } from "react";
import GitHubCalendar from 'react-github-calendar';
import { usertype } from '../compunents/profile.tsx';


export function Overview(props:username ) {
    const [repository, setrepository] = useState<Array<Repositoryes>>([]);
    const [ contributions , setcontributions ] = useState<User>();
    const [loadingover, setloadingover] = useState(true)
    console.log("data" , contributions)
    useEffect(() => {
      apiRepos(props.username).then(function (data) { 
        setrepository(data);
       
      })
      .finally(()=>{
        setloadingover(false)
      })
  
    }, []);
    useEffect(() => {
      apiRequest(props.username).then(function (data) {
        setcontributions(data)
        console.log("type of" , contributions)
      })
      .finally(()=>{
        setloadingover(false)
      })
    }, []);
    /* function forks(props) {
      if (!props) {    return null;  }
      return (
        <div>
       
        <span>Forked from </span> 
        <a src= {repository.forks_url} href = "Document URL" className="color-blue" ></a>
    </div>
      );
    } */
    
    if(loadingover){
      return (
        <div className="w-[750px] bg-white  text-xs ">
              LOADING OVERVIEW
        </div>
      )
    }
    return (
  
      <div className="w-[750px] bg-white  text-xs ">
  
        <p>Popular repositories</p>
        <div className="flex flex-wrap  ">{repository.map((item, index) => {
          if (index < 6){
            return (
  
              <div className="border-2 solid w-[21rem]  h-[6rem] rounded-md mr-[2rem] mb-[2rem] px-2.5 py-2.5">
                <div className="flex justify-between">
                  <a className="text-blue-400">{item.name}</a>
                  <button className="border-2 solid w-[3.4rem] h-[1.2rem] rounded-xl ">
                    {item.visibility}
                  </button>
                </div>
                &nbsp;&nbsp;
  
                <div className="text-xl">{(item.fork) ? "forked from" + item.forks_url : ''}</div>
  
                &nbsp;&nbsp;
  
                <span>{item.description} </span>
  
                &nbsp;&nbsp;
  
                <div>
                  {(item.language) ?
                    <div className="flex  ">
                      <span className=" solid w-[1rem] h-[1rem] bg-[#f1e05a] rounded-full inline-block"></span>{item.language}
                    </div> : ''}
                </div>
              </div>
  
  
  
  
            )
                  }
        })}
        </div >
     {contributions?<GitHubCalendar username={contributions.login}/>: null}
       
       
        </div> 
     
    )}
  