export function TaskItem(props){
    return <li className="p-2 rounded-lg shadow-lg my-4 hover:bg-fuchsia-700 cursor-pointer hover:text-white bg-fuchsia-100 text-sm text-fuchsia-900 font-medium">
                {props.title}
        </li>
}