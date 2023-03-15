 import React from "react"
 function Child({count}){
    console.log("child component rerender")
    return(
     <div>
      Child Count is:{count}
     </div>

    )
    
}
export default React.memo(Child)