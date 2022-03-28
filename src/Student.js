import AgeAdd from './Ageadd';
import logo from './ca.png';
import './Student.css';
function Student(props){
    return (
        <div className="student-block">
            <div className="student-name">
                <h2>{props.name}</h2>
            </div>
            <div className="student-info">
                <p>{props.city}</p>
                <p>{props.quali}</p>
                <p>{props.email}</p>
                <p>Current: {props.age}</p>
                <AgeAdd age={props.age}/>
                
                <img src={logo}/>
            </div >
        </div>
    );
}

export default Student;