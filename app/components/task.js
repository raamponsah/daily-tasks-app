"use client"
import { useState } from "react"

export function TaskItem(props){
    const [name, setName] = useState("")
    const [isCompleted,setIsCompleted] = useState(false)
    


    return <div>
    <li className="flex justify-between gap-4 p-2 rounded-lg shadow-lg my-4 hover:bg-fuchsia-700 cursor-pointer hover:text-white bg-fuchsia-100 text-sm text-fuchsia-900 font-medium">
                <span>{isCompleted? <strike>{props.title}</strike>:props.title}</span>
           <div className="flex justify-center items-center gap-2">
           <button onClick={()=>{
                    setName(props.title);
                    setIsCompleted(true);
                    
                }} className={`${isCompleted ? 'bg-green-500': 'bg-orange-500'}  rounded text-xs text-white shadow-lg p-1`}>
                    <small>{isCompleted ? 
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4 rounded-full">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4 rounded-full">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                    }</small></button>

                {
                    isCompleted && <button onClick={()=>{
                        setName(props.title);
                        setIsCompleted(false);
                        
                    }} className={`bg-slate-400  rounded text-xs text-white shadow-lg p-1`}>
            <small>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4 rounded">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499" />
                </svg>
            </small>
            </button>
                }
           </div>

                    
        </li>
    </div>
}