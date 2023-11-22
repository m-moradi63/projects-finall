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
    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem('items'));
        if(items){
            update_string(my_string)
        }
       
    },[])
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(my_string));
      }, [my_string]);
    
    


    return(
        <div>
        <h1>your todo title:{/* {my_string} */}</h1>
        <form id="todo_form">
        <input value={my_string} onChange={(e)=>{  
        update_string(e.target.value)}}

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