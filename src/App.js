import { useState } from "react"
import {profile} from "./compunents/profile"

export function App() {
  
 
 

 
  
  
    return (
     <div>
       {/* header */}
        <div  class="flex justify-around mx-16 ">
          {/* left section */}
           <div class="inline-block w-2/4">
                <i class="fa-solid fa-bars fa-2xl  border-solid  border-2 border-indigo-600  mr-3"></i>
                 <i class="fa-brands fa-github fa-2xl"></i>
                 {/* <span>{profile}</span> */}
            </div>
            {/* right section */}
            <div class="inline-block w-2/4 flex">
               <div class="inline-block w-80 border-solid border-2 border-inherit rounded border-indigo-600 ... inline-block">
                  <i class="fa-solid fa-magnifying-glass"></i>type
                  <i class="border-solid border-2 border-indigo-600 rounded-md border-inherit">/</i>
                  <p class="inline-block ">to search</p>
                  <div class="inline-block pl-40">
                     <i>|</i>
                     <i class="fa-solid fa-arrow-right">-</i>
                  </div> 
                  
              </div>
              <p class="inline-block ml-4">|</p>  
              <div class="inline-block w-10 ml-4 border-solid border-2 border-inherit rounded border-indigo-600 ... inline-block">+ <i class="fa-sharp fa-solid fa-caret-down"></i>
              </div>
                <div class="flex justify-around  inline-block ml-4">
                  <i class="  fa-regular fa-circle-dot"></i>
                  <i class="  fa-regular fa-circle-dot"></i>
                  <i class="  fa-regular fa-circle-dot"></i>
                  
                </div>
              </div>
              
       </div>
       {/* main */}
       <profile/>
       <div class="flex items-center">
           
           <div>
           <strong>Andrew Alfred</strong>
           <span>Technical advisor</span>
           </div>
       </div>
     </div>
    
     )
  }