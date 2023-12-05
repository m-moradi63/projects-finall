export function Activity(){
  return (
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
  )
}
