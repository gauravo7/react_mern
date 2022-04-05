import { useState } from "react";

function Teacher(props){
    const [name,setName] = useState('Gaurav')
    const nameHandler = (event)=>{
        setName(event.target.value);
    }
    const [email,setEmail] = useState('')
    const emailHandler = (event)=>{
        setEmail(event.target.value);
    }
    const [quali,setQuali] = useState('')
    const qualiHandler = (event)=>{
        setQuali(event.target.value);
    }

    const [city,setCity] = useState('')
    const cityHandler = (event)=>{
        setCity(event.target.value);
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        let data = {
            name: name,
            email:email,
            qualification:quali,
            age:18,
            city:city,
            img:"noimage.jpg",
        }
        props.onSaveTeacherData(data);
        setCity('')
        setName('')
        setEmail('')
        setQuali('')
    }
    return(
        <div>
            <h2>Welcome to Teacher   {name}</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={nameHandler} />
                </div>
                <div>
                    <label>Eamil</label>
                    <input type="email"value={email} onChange={emailHandler}/>
                </div>
                <div>
                    <label>Qualification</label>
                    <input type="quali"value={quali} onChange={qualiHandler}/>
                </div>
                <div>
                    <label>City</label>
                    <input type="text"value={city} onChange={cityHandler}/>
                </div>
                <div>
                    <button type="submit">Save My Data</button>
                </div>
            </form>
        </div>
    );
}
export default Teacher;