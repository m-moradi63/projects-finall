import { useState } from "react"
const todo_list = []
export function Todoinput(props){
    
    const my_string_react = useState(todo_list)
    const [my_string , update_string] = my_string_react
    return(
        <div>
        <h1>your todo title:{my_string}</h1>
        <form id="todo_form"   >
        <input value={my_string} onChange={(e)=> update_string(e.target.value)}

       type="text" placeholder="write to do item...." id="title"  />
        <button onClick = {(event)=>{
          event.preventDefault()
          props.submitHandler(my_string);
          update_string ('');
         }} 
         id="saveBtn" >save</button>
        </form>
        </div>
    )
}