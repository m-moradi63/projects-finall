import React, { useState } from "react";

export const Dropdownfile = () => {
  return (
    <div className="absolute border-2 w-[20rem] h-[6.3rem] bg-white text-justify px-[2rem] rounded-xl font-serift">
      <ul>
        <li className="border-b h-[3rem]  content-end">
          +<span className="ms-4">Create File</span>
        </li>
        <li className="border-b h-[3rem] flex">
          {" "}
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            className=" me-4 octicon octicon-upload"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path>
            <path d="M11.78 4.72a.749.749 0 1 1-1.06 1.06L8.75 3.811V9.5a.75.75 0 0 1-1.5 0V3.811L5.28 5.78a.749.749 0 1 1-1.06-1.06l3.25-3.25a.749.749 0 0 1 1.06 0l3.25 3.25Z"></path>
          </svg>
          Upload file
        </li>
      </ul>
    </div>
  );
};
