import React from 'react';
import '../Stylesheet/Home.css';
import img1 from '../Project/img/intro-carousel/img1.jpg';
import img2 from '../Project/img/intro-carousel/img2.jpg';
import img3 from '../Project/img/intro-carousel/img3.jpg';
import img4 from '../Project/img/intro-carousel/img4.jpg';
import img5 from '../Project/img/intro-carousel/img5.jpg';
import {FaBookmark,FaChevronRight } from 'react-icons/fa';
import Navbar from './Navbar.js';
import Footer from './Footer.js';


const emailRE=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const initialState={
    email:"",
    emailError:""
}

class Homes extends React.Component{
    state=initialState;

    handleChange = (e) =>{
        const isCheckbox = e.target.type==="checkbox";
        this.setState({
            [e.target.name]: isCheckbox? e.target.checked: e.target.value
        });
    }; 

    
    validate = (e) =>{
        let emailError="";
        
        if(!emailRE.test(this.state.email)){
            emailError="email is invalid!";
        }
        if( emailError ){
            this.setState({emailError});
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
                <div className="slide">
                    <div id="demo" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                        <li data-target="#demo" data-slide-to="3"></li>
                        <li data-target="#demo" data-slide-to="4"></li>
                        </ol>
                        <div className="carousel-inner sliding text-center">
                            <div className="carousel-item active" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("+ img1 +")"}}>
                                <div className="container d-flex h-100 align-items-center justify-content-center text-white">
                                    <h2>First slide label</h2>
                                </div>
                            </div>
                            <div className="carousel-item"  style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("+ img2 +")"}}>
                                <div className="container d-flex h-100 align-items-center justify-content-center text-white">
                                    <h2>Second slide label</h2>
                                </div> 
                            </div>
                            <div className="carousel-item" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("+ img3 +")"}}>
                                <div className="container d-flex h-100 align-items-center justify-content-center text-white">
                                    <h2>Third slide label</h2>
                                </div>
                            </div>
                            <div className="carousel-item" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("+ img4 +")"}}>
                                <div className="container d-flex h-100 align-items-center justify-content-center text-white">
                                    <h2>Fourth slide label</h2>
                                </div>
                            </div>
                            <div className="carousel-item" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("+ img5 +")"}}>
                                <div className="container d-flex h-100 align-items-center justify-content-center text-white">
                                    <h2>Fifth slide label</h2>
                                </div>  
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                    <div className="head">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 mt-5 mb-3">
                                    <FaBookmark/>
                                    <h4>Lorem Ipsum Delino</h4>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate nan provident</p>
                                </div>
                                <div className="col-md-4 mt-5 mb-3">
                                    <FaBookmark/>
                                    <h4>Lorem Ipsum Delino</h4>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate nan provident</p>
                                </div>
                                <div className="col-md-4 mt-5 mb-3">
                                    <FaBookmark/>
                                    <h4>Lorem Ipsum Delino</h4>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate nan provident</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer p-4 mb-0"  style={{backgroundColor: "#000000", backgroundImage: "linear-gradient(0deg, #000000 0%, #242323 50%, #000000 100%)", overflow:"hidden"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 text-white">
                                <h3>Bizpage</h3>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                            </div>
                            <div className="col-lg-3 col-md-6 text-white">
                                <h3>USEFUL LINKS</h3>
                                <div className="progress" style={{height:"2px"}}>
                                    <div className="progress-bar bg-success" style={{width:"40%", height:"2px"}}></div>
                                </div><br/>
                                <div style={{borderBottom:"1px solid grey", paddingBottom:"10px"}}>
                                    <FaChevronRight/>
                                    <a href="/" style={{color:"white"}}>Home</a>
                                </div>
                                <div style={{borderBottom:"1px solid grey", paddingBottom:"10px"}}>
                                    <FaChevronRight/>
                                    <a href="/about" style={{color:"white"}}>About</a>
                                </div>
                                <div style={{borderBottom:"1px solid grey", paddingBottom:"10px"}}>
                                    <FaChevronRight/>
                                    <a href="/services" style={{color:"white"}}>Service</a>
                                </div>
                                <div style={{borderBottom:"1px solid grey", paddingBottom:"10px"}}>
                                    <FaChevronRight/>
                                    <a href="/portfolio" style={{color:"white"}}>Portfolio</a>
                                </div>
                                <div style={{borderBottom:"1px solid grey", paddingBottom:"10px"}}>
                                    <FaChevronRight/>
                                    <a href="/contact" style={{color:"white"}}>Contact</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-white">
                                <h3>Contact us</h3>
                                <div className="progress" style={{height:"2px"}}>
                                    <div className="progress-bar bg-success" style={{width:"40%", height:"2px"}}></div>
                                </div><br/>
                                <p>A108 Adam Street<br/> New York, NY 535022<br/> United States<br/>Phone: +1 5589 55488 55<br/>Email: info@example.com</p>
                            </div>
                            <div className="col-lg-3 col-md-6 text-white">
                                <h3>Our newsletter</h3>
                                <div className="progress" style={{height:"2px"}}>
                                    <div className="progress-bar bg-success" style={{width:"40%", height:"2px"}}></div>
                                </div><br/>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="email" name="email" value={this.state.email} 
                                    onChange={this.handleChange}/>
                                        <div className="input-group-append">
                                            <input className="btn btn-success" id="myBtn" type="submit" value="Subscribe"/> 
                                        </div>
                                    </div>
                                    <span id="subemail" style={{color: "red"}}>{this.state.emailError}</span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
        
        )
    }
}
export default Homes;