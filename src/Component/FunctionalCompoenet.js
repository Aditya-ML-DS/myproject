
import { useState } from "react";
import ClassComponent from "./ClassComponent";
import Counter from "./Counter";
const FunctionalComponent = ()=>{
   const [count,setcounter] =useState(false);
    // const increment= ()=>{
    //   setcounter(counter+1);
    // }
    if (count) {
      return(
        <ClassComponent/>
      );
      
    } else{
      return(
      <Counter/>
      );
    }
  //  return (
  //    <div>
  //    <h1>this is FunctionalComponent:{counter}</h1>
  //    <button onClick={increment}>counter</button>
  //    </div>

  //  )

}
export default FunctionalComponent;