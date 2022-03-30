import Header from './layouts/Header';
import Siderbar from './layouts/Sidebar';
import Main from './components/Main';
import Footer from './layouts/Footer';
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
            <Header/>
            <Siderbar/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default Com;