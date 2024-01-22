import { faCode } from "@fortawesome/free-solid-svg-icons";
import { checkPrime } from "crypto";
import React, { useState } from "react";
import { checkServerIdentity } from "tls";


export const Menudynamic = ()=>{
    const [checked , setchecked] = useState<string>("Code")
    const selection = ((items:string)=>{
        setchecked(items)
    })
    const slidered = ((val:string)=>{
     if (val==="Code") return "left-[0%]       top-11     absolute h-[0.2rem] bg-[#6f55ca] w-[3rem]  "
    else if (val==="issues-tab") return  "left-[12%] rounded-lg   top-11    absolute h-[0.2rem] bg-[#6f55ca] w-[7rem]  "
    else if (val==="Actions") return  "left-[32%]    rounded-lg     top-11     absolute h-[0.2rem] bg-[#6f55ca] w-[5rem]  "
    else if (val==="Projects") return  "left-[48%]   rounded-lg    top-11     absolute h-[0.2rem] bg-[#6f55ca] w-[6rem]  "
    else if (val==="Security") return  "left-[65%]   rounded-lg    top-11      absolute h-[0.2rem] bg-[#6f55ca] w-[6rem]  "
    else if (val==="Insights") return  "left-[82%]   rounded-lg    top-11       absolute h-[0.2rem] bg-[#6f55ca] w-[6rem]  "
    })
    return(
        <div className="bg-gray-300 relative  fonts-sans w-full">
        <div className=" w-[50%] flex justify-between rounded-lg flex items-center content-center flex-col">
            <input type="radio" name="slider"  value="no" id="Code" className=" hidden"  onChange={()=>{selection("Code")}} />
            <input type="radio" name="slider"  value="no" id="issues-tab"  className=" hidden  " onChange={()=>{selection("issues-tab")}} />
            <input type="radio" name="slider"  value="no" id="Actions" className=" hidden" onChange={()=>{selection("Actions")}} />
            <input type="radio" name="slider"  value="no" id="Projects" className=" hidden" onChange={()=>{selection("Projects")}}/>
            <input type="radio" name="slider" value="no" id="Security" className=" hidden" onChange={()=>{selection("Security")}}/>
            <input type="radio" name="slider" value="no" id="Insights" className=" hidden" onChange={()=>{selection("Insights")}}/>
            <nav className="relative   mr-[1rem]   ">
                <label htmlFor="Code" className= {checked==="Code"?"me-8 text-blue-600 relative  h-[100%]  items-center text-xl font-semibold transition-all cursor-pointer":"me-8 relative  h-[100%] w-[100%] items-center text-xl font-semibold transition-all cursor-pointer"} >Code</label>
                <label htmlFor="issues-tab" className={checked==="issues-tab"?"me-8 text-blue-600 relative h-[100%] items-center text-xl font-semibold cursor-pointer peer-checked-label:text-blue-600 ":"me-8 relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer peer-checked-label:text-blue-600 "} >issues-tab</label>
                <label htmlFor="Actions" className={checked==="Actions"?"me-8 text-blue-600 relative h-[100%] ] items-center text-xl font-semibold cursor-pointer":"me-8 relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer" } >Actions</label>
                <label htmlFor="Projects" className={checked==="Projects"?"me-8 text-blue-600 relative h-[100%]  items-center text-xl font-semibold cursor-pointer":"me-8 relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer" }>Projects</label>
                <label htmlFor="Security" className={checked==="Security"?"me-8 text-blue-600 relative h-[100%]  items-center text-xl font-semibold cursor-pointer":"me-8 relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer" }>Security</label>
                <label htmlFor="Insights" className={checked==="Insights"?"me-8 text-blue-600 relative h-[100%]  items-center text-xl font-semibold cursor-pointer":"me-8 relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer" }>Insights</label>
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

