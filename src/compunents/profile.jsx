import { useEffect } from "react"
import { App } from "../App"



export function Profile() {
  useEffect(() => {
    const val = fetch("https://avatars.githubusercontent.com/u/3523430?v=4")
     .then((response) => {
      console.log(val)}
      );
   }, []);
  console.log("azmayeshi")
  return (
    <div>
      <img class="rounded-full w-60" src="https://avatars.githubusercontent.com/u/3523430?v=4"/>
    </div> 
  )
  
   

  
}