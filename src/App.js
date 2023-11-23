import { useState } from "react"
import { Todo  } from "./compunents/Todo"
import { Todoinput } from "./compunents/Todoinput"
import { Filter } from "./compunents/Filter"
import uuid from 'react-uuid';
import { listenerCount, title } from "process";





export function App() {
  const [List , setList] = useState([])
  const [curentFilter , setCurentFilter]=useState("all") 
  
  const reload =(val)=>{
    tmp = [...val]
    console.log("tmp of :" , tmp)
    
    setList('tmp')
  }
  
  const deleteTask = (val)=>{
      
   const  deletlist = List.filter((item) =>{
  
  return  item.id !== val 

    })  
      setList(deletlist)
  }
  
  const  toggleTask = (val) =>{
      toggList = List.map((item) => {
        if(item.id===val){
          return {
            id:item.id,
            title:item.title,
            status:!item.status,
           
           }
        }
     
     return item
     
        
        })
        
     setList(toggList);
    }
  const submitTask = (value)=>{ 
  const newlst=[...List ,
    { 
     id:uuid(),
     title:value, 
     status:false} ]
   setList(newlst)
   }
   const submitLoadTask = (value)=>{
      const nwList=[{ 
       id:value.id,
       title:value.title, 
       status:value.status}]
     setList(nwList)
     }
    
 const filterList = List.filter((todo)=>{
  
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
 

 
  
  
    return (
    <div   className="container">
     <div className="form">
       
       <Todoinput reload={reload} submitHandler = {submitTask} List= {List} setList={setList} submitTask={submitTask} submitLoadTask={submitLoadTask} />
        <br /><br />
       <Filter curentFilter={curentFilter} setCurentFilter={setCurentFilter} />
     </div>
     
     <div className="list">
            {filterList.map((todo)=>{
               return (
               <Todo   
               id={todo.id}
               key={todo.id}
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