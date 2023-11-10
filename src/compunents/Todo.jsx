export function Todo(props){
    return (
        <div className="item">
        <input type="checkbox" name="" id="" checked={props.status} />
        <span>{props.title}</span>
        <button id="delet_btn" className="delet_btn" >delet</button>
        
         </div>
    )
}