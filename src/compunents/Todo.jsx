import { useState } from "react"
export function Todo(prop){
  
    return (
        <div className="item">
        <input type="checkbox" name="" id="" defaultChecked={prop.status} />
        <span>{prop.title}</span>
        <button  onClick={()=>{
            /*  {List1.map((todo, index)=>{
                return todo.title!=prop.title ;
                
             })}
             */
            
            }} id="delet_btn" className="delet_btn" >delet</button>
        </div>
    )
}