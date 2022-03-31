import { useState } from "react";

function TextToPara(){
    const [name,setName] = useState('Sharma G')
    const nameHandler = (event) =>{
        setName(event.target.value)
    }
    return(
        <div>
            <h2> Welcome to Text Handle- {name}</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input type="text" onChange={nameHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input type="email"/>
                        </td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>
                            <input type="city"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default TextToPara;