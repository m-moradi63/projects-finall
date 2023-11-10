export function Filter(){
    return(
       <div>
        status:
        <select id="filters">
            <option value="done">Done</option>
            <option value="todo">Todo</option>
            <option value="all">All</option>
        </select>
        </div>
    )
}