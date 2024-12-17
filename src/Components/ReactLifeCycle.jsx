import React, { useState, useEffect} from "react";

function ReactLifeCycle(){
    const [count, setCount] = useState(0);
    useEffect(() =>{
        console.log("Component Mounted or updated");
        return()=>{
            console.log("Component unmounted");
        };

    },[count]
    
    
    );

    return(
        <>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>

        </>

    )

}
export default ReactLifeCycle;