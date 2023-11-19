import { useState } from "react"
import { Todo  } from "./compunents/Todo"
import { Todoinput } from "./compunents/Todoinput"
import { Filter } from "./compunents/Filter"
import uuid from 'react-uuid';
import { listenerCount } from "process";





export function App() {
  const [List , setList] = useState([])
  const [curentFilter , setCurentFilter]=useState("all") 

  console.log("list:" , List)
  

  console.log(curentFilter)
  const deleteTask = (val)=>{
      
   const  deletlist = List.filter((item) =>{
  
  return  item.title !== val 

    })  
      setList(deletlist)
  }
  
  const  toggleTask = (val) =>{
      toggList = List.map((item) => {
        if(item.title===val){
          return {
            title:val,
            status:!item.status,
           
           }
        }
     
     return item
     
        
        })
        
     setList(toggList);
     console.log("toggList:" , toggList)
    }
  const submitTask = (value)=>{ 
  const newlst=[...List ,
    { 
     title:value, 
     status:false} ]
   setList(newlst)
   }
 const filterList = List.filter((todo)=>{
  console.log("curentFilter:" , curentFilter)
 
  if(curentFilter==="done"){
    return todo.status===true;
  }
  else if(curentFilter==="todo"){
    return todo.status===false;
  }
  else{
    return true;
  }
 })
 console.log("filterList:" ,filterList)
  
  
    return (
    <div   className="container">
     <div className="form">
       
       <Todoinput submitHandler = {submitTask}/>
        <br /><br />
       <Filter curentFilter={curentFilter} setCurentFilter={setCurentFilter} />
     </div>
     
     <div className="list">
            {filterList.map((todo)=>{
               return (
               <Todo   
               title={todo.title} 
               status={todo.status} 
               toggleTask={toggleTask} 
               deleteTask={deleteTask}/>
                );
            })}
           
     </div>
</div>
     )
  }