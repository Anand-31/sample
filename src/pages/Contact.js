import React from 'react';
import {FaEnvelope, FaMapMarkerAlt, FaPhoneSquareAlt} from 'react-icons/fa';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

/*eslint-disable*/
const nameRE= /^[a-zA-Z ]*$/;
const emailRE=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRE=/^[0-9]{10}$/;

const initialState={
    name: "",
    email: "",
    phone: "",
    subject: "",
    text: "",
    nameError: "",
    emailError: "",
    phoneError: "",
}

class Contacts extends React.Component {
    state=initialState;

    handleChange = (e) =>{
        const isCheckbox = e.target.type==="checkbox";
        this.setState({
            [e.target.name]: isCheckbox? e.target.checked: e.target.value
        });
    }; 

    
    validate = (e) =>{
        let nameError="";
        let emailError="";
        let phoneError="";

        if(!nameRE.test(this.state.name)){
            nameError="name is invalid!";
        }
        if(!emailRE.test(this.state.email)){
            emailError="email is invalid!";
        }

        if(!phoneRE.test(this.state.phone)){
            phoneError="phone no is invalid!";
        }
        

        if(nameError || emailError || phoneError){
            this.setState({nameError,emailError,phoneError});
            return false;
        }else{
            return true;
        }
    };
   
    
    handleSubmit = (e) =>{
        e.preventDefault();
        const isValid = this.validate();
        if(isValid){
            alert("Thankyou");
            this.setState(initialState);
        }
    };
    render(){
        return(
            <div>
                <Navbar/>
                <div className="jumbotron jumbotron-fluid contact mb-0" style={{overflow:"hidden"}}>
                <div className="container text-center pt-2">
                    <h3>CONTACT US</h3>
                    <p style={{fontSize: "20px"}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="address">
                                <FaMapMarkerAlt className= "fa-lg mb-2 mt-3" style={{fontSize: "48px", color: "green"}}/>
                                <h3 className="pt-2">ADDRESS</h3>
                                <p className="pt-2">A108 Adam Street, NY 535022, USA</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="phone" style={{borderRight: "1px solid grey", borderLeft: "1px solid grey"}}>
                                <FaPhoneSquareAlt className="fa-lg mb-2 mt-3" style={{fontSize: "48px", color: "green"}}>&#xf098;</FaPhoneSquareAlt>
                                <h3 className="pt-2">PHONE NUMBER</h3>
                                <p className="pt-2">+1 5589 55488 55</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="email">
                                 <FaEnvelope className="fa-lg mb-2 mt-3" style={{fontSize: "48px", color: "green"}}/>
                                <h3 className="pt-2">EMAIL</h3>
                                <p className="pt-2">info@example.com</p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <div className="row pt-4">
                          <div className="col">
                            <input type="text" className= "form-control" id="name" placeholder="Enter your name" name="name" value={this.state.name} onChange={this.handleChange}/>
                            <span>{this.state.nameError}</span>
                          </div>
                          <div className="col">
                            <input type="text" className= "form-control" id="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/>
                            <span>{this.state.emailError}</span>
                          </div>
                        </div><br/>
                        <div className="row">
                            <div className="col">
                                <input type="tel" 
                                className= "form-control" id="phone" placeholder="Phone Number" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                            <span>{this.state.phoneError}</span>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" name="subject"  value={this.state.subject} 
                                onChange={this.handleChange}/>
                            </div>
                        </div><br/>
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <textarea className="form-control" id="message" rows="5" placeholder="Message" name="text"  value={this.state.text} 
                                onChange={this.handleChange} style={{resize: "none"}}></textarea>
                                </div>
                            </div>
                        </div><br/>
                        <div className="btn">
                            <input type="submit" className="btn btn-success text-center" value="submit"/>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
        )
    }
}

export default Contacts;