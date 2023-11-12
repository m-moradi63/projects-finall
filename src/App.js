import { useState } from "react"
import { Todo  } from "./compunents/Todo"
import { Todoinput } from "./compunents/Todoinput"
import { Filter } from "./compunents/Filter"



let todo_list = []
export function App() {
  
  const [List1 , setList] = useState(todo_list)
    return (
    <div   className="container">
     <div className="form">
       
       <Todoinput submitHandler={(value)=>
         {
          setList([
            ...List1,
            {
              title : value,
              status:false,
             
            }
          ])
         }
      }/>
        <br /><br />
       <Filter/>
     </div>
     <div className="list">
            {List1.map((todo, index)=>{
               return <Todo key={index} title={todo.title} status={todo.status} />;
            })}
            
     </div>
</div>
     )
  }