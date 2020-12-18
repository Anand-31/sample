import React from 'react';
import '../Stylesheet/About.css';
import aboutbg from '../Project/img/about-bg.jpg';
import card1 from '../Project/img/about-mission.jpg';
import card2 from '../Project/img/about-plan.jpg';
import card3 from '../Project/img/about-vision.jpg';
import Navbar from './Navbar.js';
import Footer from './Footer.js';


class Abouts extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                    <div className="heading pb-2" style={{backgroundImage:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("+ aboutbg +")"}}>
                        <div className="container">
                            <div className="row">
                                <div className="text-center text-white pt-5">
                                    <h2 className="pt-2">ABOUT US</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="container p-3">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 pt-2">
                                    <div className="card">
                                            <img className="card-image-top" src={card1} alt="card1" style={{width: "100%"}}/>
                                            <div className="card-body">
                                            <h4 className="card-title  text-center">Our mission</h4>
                                                <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 pt-2">
                                    <div className="card">
                                        <img className="card-image-top" src={card2} alt="card2" style={{width: "100%"}}/>
                                        <div className="card-body">
                                            <h4 className="card-title  text-center">Our mission</h4>
                                            <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 pt-2">
                                    <div className="card">
                                        <img className="card-image-top" src={card3} alt="cardr3" style={{width: "100%"}}/>
                                        <div className="card-body">
                                            <h4 className="card-title text-center">Our mission</h4>
                                            <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default Abouts;