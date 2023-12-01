import { useEffect } from "react"
import { App } from "../App"
import { Octokit, App } from "octokit";



export function Profile(){


  return (
    <div className=" mt-8  ">
    <div className="flex columns-2">
      <div className="w-4/12 h-[2rem] ">
        <img
          className="w-4/6 rounded-full m-auto"
          src="https://avatars.githubusercontent.com/u/3523430?v=4"
        />
        <div className="text-left  mt-8 ml-[5rem]">
          <h1 className=" text-2xl  ">Mojtaba Esparipour</h1>
          <p className=" text-xl  font-light ">Mojtabas</p>
          <button className="borde-2 solid bg-slate-200 w-[16rem] mt-4 h-[2rem] rounded-lg">
            follow
          </button>
          <p className="mt-4 text-justify w-[15rem]">
            Making Software. Web & Mobile Developer. Code & Design.
          </p>
          <svg
            text="muted"
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="inline-block octicon octicon-people "
          >
            <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
          </svg>
          &nbsp;&nbsp;34&nbsp;folowers&nbsp;.&nbsp;27 followers
          <div className="mt-4">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="inline-block octicon octicon-link"
            >
              <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
            </svg>
            &nbsp;&nbsp;&nbsp;&nbsp;<a>http://mojtabast.com</a>
          </div>
          <hr className="w-[14rem] h-[4rem] mt-8" />
        </div>
      </div>

      <div className="w-8/12 h-[2re] bg-slate-100">
        Pinned
        <div className="border-2 solid w-[28rem] h-[8rem] rounded-md">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-repo mr-1 color-fg-muted inline-block"
          >
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
          </svg>
          &nbsp;&nbsp;
          <a href = "Document URL" className="color-blue" >mojtabast-blog</a> 
          &nbsp;&nbsp;
          <button className="border-2 solid w-[3.4rem] h-[1.8rem] rounded-xl ">
            Public
          </button>
          <p>Mojtaba Espari Pour's Personal blog </p>
          <div class=" solid w-[1rem] h-[1rem] bg-[#f1e05a] rounded-full inline-block" ></div>
          &nbsp;&nbsp;
          <p className="inline-block">javascript</p>
        </div>
      </div>
    </div>
  
  </div>
  )
 
  }
