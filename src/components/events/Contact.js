import React from "react";

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = props
        console.log(this.state)
    } 
    textChanger(event){
        console.log('You are Calling Text Changer');
        this.setState({name:"Kuldeep"})
    }
    render(){
        return(
            <div>
                <h2>I am a Contact Component</h2>
                Subject: {this.state.subject}<br/>
                Name: {this.state.name}
                <button onClick={this.textChanger}>Changer</button>
            </div>
        )
    }
}
export default Contact;