import { useState } from "react";

export default function TurnaryConditionalCompoenet() {

    const [display,setdisplay] =useState(false);

    return display ? (
        <div>
            <h3>this is turnary operator</h3>
        </div>
    ) : (
        <div>
        <h3>this is turnary not operator</h3>
    </div>
    )
    
}