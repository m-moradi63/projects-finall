
export function Todo(props){
    const handleDelet = ()=>{
        props.deleteTask(props.title)
    }
    const handleToggle = ()=>{
        props.toggleTask(props.title)
    }

    return ( 
        <div className="item">
        <input type="checkbox" name=""  defaultChecked={props.status} onClick={handleToggle}/>
        <span>{props.title}</span>
        <button   id="delet_btn" className="delet_btn" onClick={handleDelet} >delet</button>
        </div>
    )
    
}