import Student from './Student';
function Main(){
    const mydata = [
        {name:"Gaurav Vishist", email:"o7emp03@gmail.com",city:"Jalandhar",
        quali:"M.Tech",age:30,img:"G.png"},
        {name:"Jaskarn", email:"jas@gmail.com",city:"Kartarpur",
        quali:"+2",age:17,img:"J.png"},
        {name:"Esh", email:"minder@esh.com",city:"Jalandhar",
        quali:"BCA",age:17,img:"ca.png"},        
    ]
    return(
        <main>
            <Student 
                name={mydata[0].name}
                email={mydata[0].email}
                city={mydata[0].city}
                quali={mydata[0].quali}
                age={mydata[0].age}
                img={mydata[0].img}
            />
            <Student 
                name={mydata[1].name}
                email={mydata[1].email}
                city={mydata[1].city}
                quali={mydata[1].quali}
                age={mydata[1].age}
                img={mydata[1].img}
            />
            <Student 
                name={mydata[2].name}
                email={mydata[2].email}
                city={mydata[2].city}
                quali={mydata[2].quali}
                age={mydata[2].age}
                img={mydata[2].img}
            />
        </main>
    );
}
export default Main;