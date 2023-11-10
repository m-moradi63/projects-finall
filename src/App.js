import { Todo  } from "./compunents/Todo"
import { Todoinput } from "./compunents/Todoinput"
import { Filter } from "./compunents/Filter"

const todo_list = [
  {
    title:"item1",
    status:"true"
  },
  {
    title:"item2",
    status:"true"
  },
  {
    title:"item3",
    status:"true"
  },

]
export function App() {
    return (
    <div   className="container">
     <div className="form">
       <Todoinput/>
        <br /><br />
       <Filter/>
     </div>
     <div className="list">
            {todo_list.map((todo)=>{
               return <Todo title={todo.title} status={todo.status}/>
            })}
            
     </div>
</div>
     )
  }