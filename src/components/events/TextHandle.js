import { useState } from "react";

function TextHandle(props){
    const [name,setName] = useState(props.name)
    const [email,setEmail] = useState(props.email)
    const [city,setCity] = useState(props.city)
    const nameHandler =  (event) =>{
        setName(event.target.value)
    }
    const emailHandler =  (event) =>{
        setEmail(event.target.value)
    }
    const cityHandler =  (event) =>{
        setCity(event.target.value)
    }
    const buttonHandler =  ()=>{
        var data = {
            name:{name},
            email:{email},
            city:{city}
        }
        console.log(data)
        setName('')
        setEmail('')
        setCity('')
    }
    return(
        <div>
            <h2> Welcome to Text Handle </h2>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input type="text" value={name} onChange={nameHandler} />
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input type="email" value={email} onChange={emailHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>
                            <input type="city" value={city} onChange={cityHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button" onClick={buttonHandler} value="Submit"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default TextHandle;