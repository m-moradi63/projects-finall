function onAADItem1(){
    console.log("clicked")
}
function onType(){
    console.log("keyup")
}

export function Todoinput(){
    return(
        <form id="todo_form"  >
        <input  type="text" placeholder="write to do item...." id="title" onKeyUp={onType}/>
        <button id="saveBtn" onClick={onAADItem1}>save</button>
    </form>
    )
}