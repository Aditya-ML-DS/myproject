import { useState } from "react"

  const ElementsVariable = () =>{
   const [display,setdisplay]=useState(false);
 
   let output
   if (display) {
    output =<h3>i need help</h3>
   }else{
    output =<h3>no one help you</h3>
   }
return <div>{output}</div>

}
export default ElementsVariable;