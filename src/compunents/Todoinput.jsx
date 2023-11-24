import uuid from "react-uuid"
import { App } from "../App"
import { useEffect, useState } from "react"
/* const init = [{
    id:uuid(),
    title : "item1",
    status : false


}] */
export function Todoinput(props){
    
    const my_string_react = useState([])
    const [my_string , update_string] = my_string_react
   const items = {my_string}
   useEffect(() => {
    const items = localStorage.getItem("items")
     update_string(items)
     props.setList(items)    
   },[])
    useEffect(() => {
        
        localStorage.setItem("items", my_string)
      }, [my_string])
    
    


    return(
        <div>
        <h1>your todo title:{my_string}</h1>
        <form id="todo_form">
        <input id="mainInput" value={my_string} 
        onKeyUp={(ev)=>{  
        ev.preventDefault()
        const char = ev.key
        const nw = char + my_string
        update_string(nw)
        
     }
    }

       type="text" placeholder="write to do item...."  />
        <button onClick = {(event)=>{
        event.preventDefault()
          props.submitTask(my_string)
         
          
         }} 
         id="saveBtn" >save</button>
        </form>
        </div>
    )
}