import { useState  } from "react"
import React from "react"
import { UldropdownType } from "./uldropdowntype"
import { CaretDown, CaretRight } from "phosphor-react";

export const DropdownLanguage = ((props:string[])=>{

    const [isExpanded , setisExpanded] = useState(false)

    const iscaretRight = isExpanded
    const isCaretdown = !isExpanded
    
    
    return (
    
    <div className="border-2 border-solid px-4 py-1 rounded-lg h-[2rem] bg-[#fff] w-[6rem]">
        <button className="flex mx-auto text-center items-center gap-[4px]" onClick={()=>setisExpanded(!isExpanded) }>
        Language
        {isCaretdown && <CaretDown size={18} />}
        {iscaretRight && <CaretRight size={18} />}
        </button>
        {isExpanded &&  <div className=" border-2 solid bg-gray-200 relative z-20 solid w-[6rem] h-[10.2rem]">
            <ul >
            {props.listlanguage.map((itm)=>{
              return (
              <li className="cursor-pointer z-40 border-b-2 border-solid" 
              onClick={()=>{props.setlanguageItem(itm);
                console.log("languageItem" ,props.languageItem);
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