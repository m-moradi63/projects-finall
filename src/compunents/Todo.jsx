
export function Todo(props){
    const handleDelet = ()=>{
        props.deleteTask(props.id)
    }
    const handleToggle = ()=>{
        props.toggleTask(props.id)
    }

    return ( 
        <div className="item">
        <input type="checkbox" name=""  defaultChecked={props.status} onClick={handleToggle}/>
        <span>{props.title}</span>
        <button   id="delet_btn" className="delet_btn" onClick={handleDelet} >delet</button>
        </div>
    )
    
}