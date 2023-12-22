import React, {useEffect , useState} from 'react';
import { apiRepos ,Repositoryes } from '../compunents/getUser';

export function Reposit():object {
  const [repositState, setrepositState] = useState<Array<Repositoryes > | []>([]);
  useEffect(() => {
    apiRepos().then(function (data) {
      setrepositState(data);
      /* console.log("contributions is :", repositState) */
    })

  }, []);

  /* function forks(props) {
    if (!props) {    return null;  }
    return (
      <div>
     
      <span>Forked from </span> 
      <a src= {repositState.forks_url} href = "Document URL" className="color-blue" ></a>
  </div>
    );
  } */
  return (

    <div className="w-[750px]   text-xs  ">
      <div className="flex justify-between w-[45rem] border-b mb-[1rem] h-[3rem]">
        <input className="border-2 border-solid w-[30rem] rounded-lg h-[2rem]" placeholder="Find a repository...">
        </input>
        <select className="border-2 border-solid  rounded-lg h-[2rem] bg-[#fff]">
        <option className="border-b" hidden>Type</option>
          <option className="" disabled>Select Type</option>
          <option className="border-2 border-solid">All</option>
          <option className="border-b">Sources</option>
          <option className="border-b">Forks</option>
          <option className="border-b">Archived</option>
          <option className="border-b">Can be sponsored</option>
          <option className="border-b">Mirrors</option>
          <option className="border-b">Templates</option>
          
          
        </select>
        {/* <button className="flex h-[2rem] items-center p-1  w-14 border-solid border-2 border-slate-300 border-indigo-600 ... rounded-lg">
          <span>Type</span>
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="inline-block octicon octicon-triangle-down">
            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
          </svg>
        </button> */}
       { <button className="flex h-[2rem] items-center p-1  w-18 border-solid border-2 border-slate-300 border-indigo-600 ... rounded-lg">
          <span>Language</span>
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="inline-block octicon octicon-triangle-down">
            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
          </svg>
        </button>}
        <button className="flex h-[2rem] items-center p-1  w-14 border-solid border-2 border-slate-300 border-indigo-600 ... rounded-lg">
          <span>Sort</span>
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="inline-block octicon octicon-triangle-down">
            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
          </svg>
        </button>
      </div>

      <div className="flex flex-wrap  ">{repositState.map((item,i) => {
        return (

          <div className="border-b-[1px] border-neutral-300 mb-[1rem]  w-[45rem] " key={i}>
            <div className="border-2 solid w-[45rem]  h-[6rem] rounded-md mr-[2rem] mb-[2rem] px-2.5 py-2.5">
              <div className="flex justify-between" >
                <div className="flex  justify-left">
                  <a className="text-blue-600 text-xl">{item.name}</a>
                  <button className="border-2 solid w-[3.4rem] h-[1.2rem] rounded-xl ml-[1rem] ">
                    {item.visibility}
                  </button>
                </div>
                <button className="flex justify-between   items-center p-1  w-28 border-solid border-2 border-slate-300 border-indigo-600 ... rounded-md">
                  <div className="flex">
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star d-inline-block mr-2">
                      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                    </svg>
                    <span>start</span>
                  </div>
                  <button className="flex  items-center    w-10 border-solid border-l-2 border-slate-300 ... ">

                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="inline-block octicon octicon-triangle-down">
                      <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                    </svg>
                  </button>
                </button>

              </div>
              &nbsp;&nbsp;

              {/*  <div className="text-xl">{(item.fork) ? "forked from" + item.forks_url : ''}</div> */}

              &nbsp;&nbsp;

              <span>{item.description} </span>

              &nbsp;&nbsp;

              <div>
                {(item.language) ?
                  <div className="flex  ">
                    <span className=" solid w-[1rem] h-[1rem] bg-[#94a3b8] rounded-full inline-block"></span>{item.language}
                  </div> : ''}
              </div>
            </div>
          </div>




        )
      })}
      </div>

    </div>

  )
}
