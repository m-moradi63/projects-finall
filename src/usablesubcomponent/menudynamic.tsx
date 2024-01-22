import { faCode } from "@fortawesome/free-solid-svg-icons";
import { checkPrime } from "crypto";
import React, { useState } from "react";
import { checkServerIdentity } from "tls";


export const Menudynamic = ()=>{
    const [checked , setchecked] = useState<string>("Code")
    const selection = ((items:string)=>{
        setchecked(items)
    })


    return(
        <div className="relative m-0 p-0 box-border  fonts-sans flex content-center justify-center">
        <div className="peer max-w-[600px] w-[100%] rounded-lg flex items-center content-center flex-col">
            <input type="radio" name="slider"  value="no" id="Code" className="peer1 hidden" onChange={()=>{selection("Code")}} />
            <input type="radio" name="slider"  value="no" id="Pull Request"  className="peer hidden  " onChange={()=>{selection("Pull Request")}} />
            <input type="radio" name="slider"  value="no" id="Actions" className=" hidden" onChange={()=>{selection("Actions")}} />
            <input type="radio" name="slider"  value="no" id="Projects" className=" hidden" onChange={()=>{selection("Projects")}}/>
            <input type="radio" name="slider" value="no" id="Security" className=" hidden" onChange={()=>{selection("Security")}}/>
            <input type="radio" name="slider" value="no" id="Insights" className=" hidden" onChange={()=>{selection("Insights")}}/>
            <nav className="relative flex items-center content-center  after:solid   after:bg-indigo-300 after:w-[100%] after:h-[1px] after:absolute after:bottom-[0px] ">
                <label htmlFor="Code" className= {checked==="Code"?"text-blue-600 relative  h-[100%] w-[100%] items-center text-xl font-semibold transition-all cursor-pointer":"relative  h-[100%] w-[100%] items-center text-xl font-semibold transition-all cursor-pointer"} >Code</label>
                <label htmlFor="Pull Request" className={checked==="Pull Request"?"text-blue-600 relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer peer-checked-label:text-blue-600 ":"relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer peer-checked-label:text-blue-600 "} >Pull Request</label>
                <label htmlFor="Actions" className={checked==="Actions"?"text-blue-600 relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer":"relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer" } >Actions</label>
                <label htmlFor="Projects" className={checked==="Projects"?"text-blue-600 relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer":"relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer" }>Projects</label>
                <label htmlFor="Security" className={checked==="Security"?"text-blue-600 relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer":"relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer" }>Security</label>
                <label htmlFor="Insights" className={checked==="Insights"?"text-blue-600 relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer":"relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer" }>Insights</label>
                <div id="slider" /* className={ 
                    if(checked==="Code"){"left-[20%] absolute h-[0.2rem] bg-[#6f55ca] w-[3rem] z-0 left-0 bottom-0"}
                    else if (checked==="Code"){"left-[15%] absolute h-[0.2rem] bg-[#6f55ca] w-[3rem] z-0 left-0 bottom-0"}
                    else if (checked==="Pull Request"){"left-[30%] absolute h-[0.2rem] bg-[#6f55ca] w-[3rem] z-0 left-0 bottom-0"}
                    else if (checked==="Actions"){"left-[45%] absolute h-[0.2rem] bg-[#6f55ca] w-[3rem] z-0 left-0 bottom-0"}
                    else if (checked==="Projects"){"left-[60%] absolute h-[0.2rem] bg-[#6f55ca] w-[3rem] z-0 left-0 bottom-0"}
                    else if (checked==="Security"){"left-[75%] absolute h-[0.2rem] bg-[#6f55ca] w-[3rem] z-0 left-0 bottom-0"}
                    else if (checked==="Insights"){"left-[90%] absolute h-[0.2rem] bg-[#6f55ca] w-[3rem] z-0 left-0 bottom-0"}
                } */
                    >
                
                </div>
            </nav>
        </div>
        </div>
    )
}

