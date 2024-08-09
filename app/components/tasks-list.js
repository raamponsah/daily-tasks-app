import { TaskItem } from "./task"

export function TasksList(props) {
    // An array of tasks
    
    return <>
        <ul className="">
            {
                // Loop through the array and render each task as a list item
                // using .map function of the array data structure in javascript
                props.items.map((task,index)=>{
                    return <TaskItem title={task} key={index}></TaskItem>
                })
            }
      </ul>

    </>
}

