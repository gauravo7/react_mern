import Header from './layouts/Header';
import Siderbar from './layouts/Sidebar';
import Main from './components/Main';
import Footer from './layouts/Footer';
import Counters from './components/events/Counters';
import TextHandle from './components/events/TextHandle';
import Teacher from './components/events/Teacher';
import Contact from './components/events/Contact';

function Com(){
    const mydata = [
        {name:"Gaurav Vishist", email:"o7emp03@gmail.com",city:"Jalandhar",
        quali:"M.Tech",age:30,img:"G.png"},
        {name:"Jaskarn", email:"jas@gmail.com",city:"Kartarpur",
        quali:"+2",age:17,img:"J.png"},
        {name:"Esh", email:"minder@esh.com",city:"Jalandhar",
        quali:"BCA",age:17,img:"ca.png"},        
    ]
    return(
        <div>
            {/* <Header/>
            <Siderbar/>
            <Main/>
            <Footer/> */}
            <Counters/>
            {/* <TextHandle
                name={mydata[0].name}
                email={mydata[0].email}
                city={mydata[0].city}
            /> */}
            <Teacher/>
            <Contact name="Radhe sham" subject="Need Help in Project"/>
        </div>
    );
}

export default Com;