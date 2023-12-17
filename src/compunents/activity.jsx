import { apiRepos , apiRequest } from "./getUser.js";
import { useEffect, useState } from "react";
import GitHubCalendar from 'react-github-calendar';

export function Activity(props) {
  const [repository, setrepository] = useState([]);
  const [ contributions , setcontributions ] = useState([]);
  useEffect(() => {
    apiRepos().then(function (data) {
      setrepository(data  );
      console.log( "contributions is :",  repository )
    })

  }, []);
  useEffect(() => {
    apiRequest().then(function (data) {
      setcontributions(data)
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

    <div className="w-[750px] bg-slate-100  text-xs ">

      <p>Popular repositories</p>
      <div className="flex flex-wrap  ">{repository.map((item, index) => {
        if (index < 6)
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
      })}
      </div>
     <GitHubCalendar username={contributions.login}/>
      </div> 
   
  )}
