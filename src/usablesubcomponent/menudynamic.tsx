import { faCode } from "@fortawesome/free-solid-svg-icons";
import { checkPrime } from "crypto";
import React, { useState } from "react";
import { checkServerIdentity } from "tls";


export const Menudynamic = ()=>{
    return(
        <div className="relative m-0 p-0 box-border  fonts-sans flex content-center justify-center">
        <div className="max-w-[600px] w-[100%] rounded-lg flex items-center content-center flex-col">
            <input type="radio" name="slider"  value="no" id="Code" className="peer hidden " checked />
            <input type="radio" name="slider"  value="no" id="Pull Request"  className="peer hidden " checked />
            <input type="radio" name="slider"  value="no" id="Actions" className=" hidden" />
            <input type="radio" name="slider"  value="no" id="Projects" className=" hidden" />
            <input type="radio" name="slider" value="no" id="Security" className=" hidden"/>
            <input type="radio" name="slider" value="no" id="Insights" className=" hidden"/>
            <nav className="relative flex items-center content-center  after:solid   after:bg-indigo-300 after:w-[100%] after:h-[1px] after:absolute after:bottom-[0px] ">
                <label  className=' relative text-blue-600 h-[100%] w-[100%] items-center text-xl font-semibold transition-all cursor-pointer peer-checked:text-blue-100' htmlFor="Code">Code</label>
                <label  className=" relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer peer-checked:text-red-500 " htmlFor="Pull Request">Pull Request</label>
                <label htmlFor="Actions" className=" relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer peer-checked:text-red-500 ">Actions</label>
                <label htmlFor="Projects" className=" relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer peer-checked:text-red-500 ">Projects</label>
                <label htmlFor="Security" className=" relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer peer-checked:text-red-500">Security</label>
                <label htmlFor="Insights" className=" relative h-[100%] w-[100%] items-center text-xl font-semibold cursor-pointer peer-checked:text-red-500 ">Insights</label>
                <div id="slider" className=" absolute h-[0.2rem] bg-[#6f55ca] w-[3rem] z-0 left-0 bottom-0"  ></div>
            </nav>
        </div>
        </div>
    )
}

