import { TaskItem } from "./task"

export function TasksList(){
    // An array of tasks
    const tasks = [
        "Go to church",
        "Learn React and more",
        "Build a daily tasks app",
        "Work on a personal project",
        "Practice coding exercises",
      
    ]

    return <>
        <ul className="">
            {
                // Loop through the array and render each task as a list item
                // using .map function of the array data structure in javascript
                tasks.map((task,index)=>{
                    return <TaskItem title={task} key={index}></TaskItem>
                })
            }
      </ul>

    </>
}

