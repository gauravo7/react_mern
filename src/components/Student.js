import AgeAdd from './Ageadd';
import './Student.css';
function Student(props){
    var imagepath = "assests/images/"+props.img
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
            </div >
            <div className="student-image">
                <img src={imagepath} alt="Not Found"/>
            </div>
        </div>
    );
}

export default Student;