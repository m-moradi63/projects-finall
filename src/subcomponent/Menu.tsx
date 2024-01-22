import { Link, NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";




export const Menu = ()=>{
  const params = useParams();  
  const [checked , setchecked] = useState<string>("Overview")
    const selection = ((items:string)=>{
        setchecked(items)
        console.log("checkedddd" , items)
    })
    const slidered = ((val:string)=>{
     if (val==="Overview") return "left-[0%]       top-11     absolute h-[0.2rem] bg-[#6f55ca] w-[6rem]  "
    else if (val==="Repository") return  "left-[20%] rounded-lg   top-11    absolute h-[0.2rem] bg-[#6f55ca] w-[7rem]  "
    else if (val==="Projectss") return  "left-[45%]    rounded-lg     top-11     absolute h-[0.2rem] bg-[#6f55ca] w-[6rem]  "
    
    else if (val==="Package") return  "left-[65%]   rounded-lg    top-11      absolute h-[0.2rem] bg-[#6f55ca] w-[6rem]  "
    else if (val==="Stars") return  "left-[82%]   rounded-lg    top-11       absolute h-[0.2rem] bg-[#6f55ca] w-[6rem]  "
    })
    return(
        <div className="relative  fonts-sans w-full ">
        <div className=" w-[50%] flex justify-between rounded-lg flex items-center content-center flex-col">
            
            <input type="radio" name="slider"  value="no" id="Overview" className=" hidden"  onChange={()=>{selection("Overview")}} />
            <input type="radio" name="slider"  value="no" id="Repository"  className=" hidden  " onChange={()=>{selection("Repository")}} />
            <input type="radio" name="slider"  value="no" id="Projectss" className=" hidden" onChange={()=>{selection("Projectss")}} />
            <input type="radio" name="slider" value="no" id="Package" className=" hidden" onChange={()=>{selection("Package")}}/>
            <input type="radio" name="slider" value="no" id="Stars" className=" hidden" onChange={()=>{selection("Stars")}}/>
            <nav className="relative   mr-[1rem]   ">
               
                <label  htmlFor="Overview" className= {checked==="Overview"?"me-8 text-blue-600 relative  h-[100%]  items-center text-xl font-semibold transition-all cursor-pointer":"me-8 relative  h-[100%] w-[100%] items-center text-xl font-semibold transition-all cursor-pointer"} >
                <NavLink to={`/${params.username}/Overview`}>Overview</NavLink></label>
                
                
                <label htmlFor="Repository" className={checked==="Repository"?"me-8 text-blue-600 relative h-[100%] items-center text-xl font-semibold cursor-pointer peer-checked-label:text-blue-600 ":"me-8 relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer peer-checked-label:text-blue-600 "} >
                <NavLink to={`/${params.username}/repositories`}>Repository</NavLink></label>
                
                <label htmlFor="Projectss" className={checked==="Projectss"?"me-8 text-blue-600 relative h-[100%] ] items-center text-xl font-semibold cursor-pointer":"me-8 relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer" } >Projectss</label>
                <label htmlFor="Package" className={checked==="Package"?"me-8 text-blue-600 relative h-[100%]  items-center text-xl font-semibold cursor-pointer":"me-8 relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer" }>Package</label>
                <label htmlFor="Stars" className={checked==="Stars"?"me-8 text-blue-600 relative h-[100%]  items-center text-xl font-semibold cursor-pointer":"me-8 relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer" }>Stars</label>
                <div id="slider" 
                className= {slidered(checked)}
             
                    >
                
                </div>
                <div className="rounded-xl border-none h-[1px] mt-[1rem] w-full relative bg-slate-400"></div>
            </nav>
            
        </div>
        </div>
    )
}



/* export function Menu() {
  const [activeTab, setActiveTab] = useState("tab1");
  const params = useParams();


 
  return (
    <div className="ml-4 mr-4  h-[3rem] items-center  bg-gray-50  after:border-none after:h-[2px] after:solid after:bg-slate-400 after:w-[100%] after:block after:mt-[1rem]">
      <ul className=" mt-[2rem] flex  text-sm font-medium text-center text-gray-500 ">
        <li
          className="me-4"
        >
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className=" mr-2 inline-block octicon octicon-book UnderlineNav-octicon"
          >
            <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
          </svg>
          <NavLink
            to={`/${params.username}/Overview`}
            className={(status)=>{
           return   status.isActive 
                ? "absolut border-none h-[2px] w-[5rem] solid bg-orange-100 top-[10rem]"
                : "hover:border-b-2 solid border-slate-400  me-4"
            }
            }
            end
             >
            Overview
          </NavLink>
        </li>
        <li
          className="me-4"
         
        >
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="mr-2  inline-block octicon octicon-repo UnderlineNav-octicon"
          >
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
          </svg>
          <NavLink
            to={`/${params.username}/?tab=repositories`}
            className={(status)=>{
           return   status.isActive 
                ? "border-b-2 solid border-[#0000FF]  me-4"
                : "hover:border-b-2 solid border-slate-400  me-4"
                
            } 
            }
            end
          >
            Repository
          </NavLink>
        </li>
        <li className="me-4 ">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="mr-2 inline-block octicon octicon-table UnderlineNav-octicon"
          >
            <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
          </svg>
          <a href="" className=" hover:border-b-2 border-blue-600   ">
            Project
          </a>
        </li>
        <li className="me-4">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="mr-2  inline-block octicon octicon-package UnderlineNav-octicon"
          >
            <path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>
          </svg>
          <a href="" className=" hover:border-b-2 border-blue-600  active ">
            Packages
          </a>
        </li>
        <li className="me-4">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="mr-2  inline-block octicon octicon-star UnderlineNav-octicon"
          >
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
          </svg>
          <a href="" className=" hover:border-b-2 border-blue-600  active ">
            Packages
          </a>
        </li>
      </ul>
      
    </div>
  );
} */

/*    <div className="mt-10 flex" >
                
               <Link to={`/${params.username}/Overview`}>
               <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="ml-4 mr-4 inline-block octicon octicon-book UnderlineNav-octicon">
                    <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
                    
                </svg><span>Overwiew</span>
                </Link>
                <Link to={`/${params.username}/?tab=repositories`}>
               <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="mr-4 inline-block octicon octicon-repo UnderlineNav-octicon">
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                </svg><span>Repositories</span>
                </Link>
                
                <a className="ml-4"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="mr-4 inline-block octicon octicon-table UnderlineNav-octicon">
                    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
                </svg>Projects</a>
                <a className="ml-4"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="mr-4 inline-block octicon octicon-package UnderlineNav-octicon">
                    <path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>
                </svg>Packages</a>
                <a className="ml-4"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="mr-4 inline-block octicon octicon-star UnderlineNav-octicon">
                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                </svg>Starts</a>
            </div>
    ) */
