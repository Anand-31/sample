import React from 'react';
import {FaBookmark } from 'react-icons/fa';
import call from '../Project/img/call-to-action-bg.jpg';
import factbg from '../Project/img/facts-bg.jpg';
import facts from '../Project/img/facts-img.png';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

class Services extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>   
                <div className="ser" style={{overflow:"hidden"}}>
                    <div className="container">
                        <div className="row">
                            <div className="text-center pt-5">                   
                                <h2 className="pt-2">SERVICES</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
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
                
                    <div className="calls text-center text-white p-5" style= {{backgroundImage: "url("+ call +")"}}>
                        <div className="container">
                            <h3>CALL TO ACTION</h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                            <button type="button" className="btn btn-outline-light" style={{width:"200"}}>Call to Action</button>
                        </div>
                    </div>
                    <div className="container text-center pt-5">
                        <div className="row">
                            <div className="skill">
                                <h2>OUR SKILLS</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="prg p-5">
                        <div className="container">
                            <div className="progress"  style={{height:"35px"}}>
                                <div className="progress-bar bg-success" style={{width:"100%",height:"35px"}}><span className="text-left pl-4">HTML</span> <span className="text-right pr-4">100%</span></div>
                            </div><br/>
                            <div className="progress"  style={{height:"35px"}}>
                                <div className="progress-bar bg-info" style={{width:"90%", height:"35px"}}><span className="text-left pl-4">CSS</span> <span className="text-right pr-4">90%</span></div>
                            </div><br/>
                            <div className="progress" style={{height:"35px"}}>
                                <div className="progress-bar bg-warning" style={{width:"75%", height:"35px"}}><span className="text-left pl-4">JAVASCRIPT</span> <span className="text-right pr-4">75%</span></div>
                            </div><br/>
                            <div className="progress" style={{height:"35px"}}>
                                <div className="progress-bar bg-danger" style={{width:"55%",height:"35px"}}><span className="text-left pl-4">PHOTOSHOP</span> <span className="text-right pr-4">55%</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="fact pt-3" style={{backgroundImage: "url("+ factbg +")"}}>
                        <div className="container text-center pt-3">
                            <h2 style={{fontWeight: "bold", fontSize: "45px"}}>FACTS</h2>
                            <p style={{fontSize: "20px"}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                        </div>    
                        <div className="row pt-3" style={{fontWeight:"bolder"}}>
                            <div className="col-md-3 col-12 text-center">
                                <span style={{fontSize: "60px", color: "green"}}>274</span>
                                <p>CILENTS</p>
                            </div>
                            <div className="col-md-3 col-12 text-center">
                                <span style={{fontSize: "60px", color: "green"}}>421</span>
                                <p>PROJECTS</p>
                            </div>
                            <div className="col-md-3 col-12 text-center">
                                <span style={{fontSize: "60px", color: "green"}}>1,364</span>
                                <p>HOURS OF SUPPORTS</p>
                            </div>
                            <div className="col-md-3 col-12 text-center">
                                <span style={{fontSize: "60px", color: "green"}}>18</span>
                                <p>HARD WORKERS</p>
                            </div>
                        </div>
                        <div className="container pt-3 img-fac">
                            <img src={facts} alt="factsimg" className="img-fluid"/>
                        </div>
                    </div> 
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Services;