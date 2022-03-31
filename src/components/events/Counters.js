import { useState } from "react";

function Counters(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState('Gaurav Sharma');
    const changeNameHandler = ()=>{
        setName('Gaurav Bhaskar');
    }
    return(
        <div>
            <h2>Welcome to Counters Page</h2>
            <p onClick={()=>{ setCount(count+1) }}>Counter: {count}</p>
            <p>I am {name}</p>
            <button onClick={changeNameHandler}>Name Changer</button>
        </div>
    );
}
export default Counters;