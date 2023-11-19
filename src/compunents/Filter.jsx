import { useState } from "react"
import { App } from "../App"
export function Filter(props){
   
    return(
       <div>
        <p>{props.curentFilter }</p>
        status:
        <select 
        value={props.curentFilter}
        onChange={(e)=>{
           const value = e.target.value
           props.setCurentFilter(value)
        }}
        id="filters">
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="todo">Todo</option>
            
        </select>
        </div>
    )
}