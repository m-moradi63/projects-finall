import { useEffect, useState } from "react"
import { apiRequest } from "./getUser";



export function Profile(props) {
  const [primary, setprimary] = useState()
  useEffect(() => {
    apiRequest().then(function (data) { 
      console.log(data)
      setprimary(data.avatar_url) })
  })
  return (
    <div className="w-4/12 h-[2rem] mt-8 flex columns-2 div border-2 solid bg-black rounded-full">
      <img src={primary} />
    </div>
  )
} 