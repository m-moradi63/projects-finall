import { apiRepos } from "./getUser.js";
import { useEffect, useState } from "react";

export function Activity(props) {
  const [repository, setrepository] = useState([]);
  useEffect(() => {
    apiRepos().then(function (data) {
      setrepository(data);
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
  return (
    <span>Popular repositories</span> +
    <div className="w-[750px] bg-slate-100  text-xs flex flex-wrap">
   
    
    {repository.map((item)=>{
     return(
     
      <div className="border-2 solid w-[20rem]  h-[8rem] rounded-md">
        <div className="flex justify-between">
          <p>{item.name}</p>
          <button className="border-2 solid w-[3.4rem] h-[1.8rem] rounded-xl ">
            {repository.visibility}
          </button>
        </div>
        &nbsp;&nbsp;

        <div>{(item.fork) ? "forked from" + item.forks_url : ''}</div>

        &nbsp;&nbsp;

        <span>{item.description} </span>

        &nbsp;&nbsp;
        
          <div className="inline-block">
          {(repository.language) ?
            <div className=" solid w-[1rem] h-[1rem] bg-[#f1e05a] rounded-full inline-block" >
              {item.language}
          </div> : 'ffff' }
    </div> 
    </div> 
   

  
    )})}
     </div> 
   
  )}
