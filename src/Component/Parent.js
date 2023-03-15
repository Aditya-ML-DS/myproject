import { useState } from "react"
import Child from "./Child";

export default function Parent() {
    const [childcount, setchildcount] = useState(0);
    const [parentcount, setparentcount] = useState(0);

    const increaseparent = () => {
        setparentcount(parentcount + 1);
    }
    const increasechild = () => {
        setchildcount(childcount + 1);
    }
    return (
        <div>
            parent count is:{parentcount}
            <Child count={childcount}/>
            <button onClick={increaseparent} >parentcount</button>
            <button onClick={increasechild} >childcount</button>
        </div>

    )

}