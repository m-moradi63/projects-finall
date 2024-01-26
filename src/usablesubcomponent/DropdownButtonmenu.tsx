import { useState  } from "react"
import React from "react"
import { UldropdownType } from "./uldropdowntype"
import { CaretDown, CaretRight } from "phosphor-react";

export const DropdownButton = ((props:string[])=>{

    const [isExpanded , setisExpanded] = useState(false)

    const iscaretRight = isExpanded
    const isCaretdown = !isExpanded
    
    
    return (
    
    <div className="border-2 border-solid px-4 py-1 rounded-lg h-[2rem] bg-[#fff] w-[6rem]">
        <button className="flex items-center gap-[10px]" onClick={()=>setisExpanded(!isExpanded) }>
        Type
        {isCaretdown && <CaretDown size={18} />}
        {iscaretRight && <CaretRight size={18} />}
        </button>
        {isExpanded &&  <div className=" border-2 solid bg-gray-200 relative z-20 solid w-[6rem] h-[13rem]">
            <ul >
            {props.listmenu.map((itm)=>{
              return (
              <li className="cursor-pointer z-40 border-b-2 border-solid" 
              onClick={()=>{props.setfilter(itm);
                setisExpanded(!isExpanded);
                
            }
                 } 
                key={itm}>{itm}</li>
              )
            })}
            </ul>
            
            </div>}
    
    </div>
  
  
    
        )
})