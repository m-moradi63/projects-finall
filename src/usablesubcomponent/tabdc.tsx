import { Link, NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function Tabdc() {
  const [activeTab, setActiveTab] = useState();
 
 
  return (
    <div className="ml-4 mr-4   ">
      <ul className="mt-[1rem] border-b flex  text-sm font-medium text-center text-gray-500 ">
        <li
          className="me-4"
        >
        
          <NavLink
            /* to={`/${params.username}/Overview`} */
            className={(status)=>{
           return   status.isActive 
                ? "border-t-4 border-r-4 border-l-4"
                : "hover:border-b-2 solid  "
            }
            }
            end
             >
            Branches
          </NavLink>
        </li>
        <li
          className="me-4"
         
        >
         
          <NavLink
            /* to={`/${params.username}/?tab=repositories`} */
            className={(status)=>{
           return   status.isActive 
                ?"border-t-4 border-r-4 border-l-4"
                : "hover:border-b-2 solid border-slate-400 "
                
            } 
            }
            end
          >
            Tag
          </NavLink>
        </li>
       
      </ul>
      <hr className="w-full mt-[2rem]" />
    </div>
  );
}
