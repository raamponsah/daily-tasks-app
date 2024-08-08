"use client"
import { useState } from "react"

export function TaskItem(props){
    const [name, setName] = useState("")
    const [isCompleted,setIsCompleted] = useState(false)
    


    return <div>
    <li className="flex justify-between gap-4 p-2 rounded-lg shadow-lg my-4 hover:bg-fuchsia-700 cursor-pointer hover:text-white bg-fuchsia-100 text-sm text-fuchsia-900 font-medium">
                <span>{props.title == name? <strike>{name}</strike>:props.title}</span>
                <button onClick={()=>{
                    setName(props.title);
                    setIsCompleted(true);
                    
                }} className={`${isCompleted ? 'bg-green-500': 'bg-orange-500'} rounded text-xs text-white shadow-lg p-1`}>
                    <small>{isCompleted ? 
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                    }</small></button>
        </li>
    </div>
}