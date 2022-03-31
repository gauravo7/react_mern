import { useState } from "react";

function EventHandle(){
    var name = "Gaurav";
    const clickHandler = () =>{
        console.log("You are in Click Fun");
        name="Sharma"// This Does not Change in the Var Rather it create Local Level Name
    }
    const [count,setCount] = useState(0);
    return(
        <div>
            <h2>Welcome to EventHandle Page</h2>
            <p onClick={()=>{ alert("Welcome");}}>{name}</p>
            <p onClick={clickHandler}>{name}</p>
            <p onClick={()=>{ setCount(count+1) }}>Counter: {count}</p>
        </div>
    );
}
export default EventHandle;