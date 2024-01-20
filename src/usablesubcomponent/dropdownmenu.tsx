import React, { useState } from "react";



export const DropdownMenu = ()=>{
    return(
        <div className="absolute border-2 w-[20rem] h-[18rem] bg-white text-justify px-[2rem] rounded-xl">
         <ul>
            <li className="border-b h-[3rem]  content-end" ><br />Notifications</li>
            <li  className="border-b h-[3rem] "><i className="fa-solid fa-check mr-[1rem]"></i>Participating and @Mentions.<br /> Only receive notifications from this repository when participating or @mentioned. </li>
            <li  className="border-b h-[3rem] ">All Activity <br />Notified of all notifications on this repository.</li>
            <li  className="border-b h-[3rem] ">ignor<br /> Never be Notified</li>
            <li  className="border-b h-[3rem] ">Custom <i className="ml-[12rem] fa-solid fa-arrow-right"></i><br />   Select events you want to be notified of in addition to participating and @mentions.</li>
            <li  className="border-b h-[3rem] "> Get push notifications on</li>
           
           </ul>
        </div>
    )
}