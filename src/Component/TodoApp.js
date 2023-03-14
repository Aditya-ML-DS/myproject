import { useState } from "react"
import Listitem from "./listitem";

export default function Todo() {
     
    const [todo,settodo]=useState("");
    const [todolist,settodolist]=useState([]);
    
    const handlechange = (event)=>{
        settodo(event.target.value)
        
    }
    const handlesubmit = (event)=>{
        event.preventDefault()
        const temparray=todolist
        temparray.push(todo)
        settodolist(temparray)
        settodo("");
        console.log(todolist);
    }
    return(
      <div>
        <form  onSubmit={handlesubmit}>
         <input type="text" onChange={handlechange} value={todo}></input>   
         <button type="submit">add</button>
        </form>
        {todolist.map((item,index)=>(
        //   <h3 key={index}>{item}{index}</h3>  
         <Listitem key={item} name={item}>List item</Listitem>
        ))}
      </div>


    )
    
}