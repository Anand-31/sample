import React from 'react';
import app1 from '../Project/img/portfolio/app1.jpg';
import app2 from '../Project/img/portfolio/app2.jpg';
import app3 from '../Project/img/portfolio/app3.jpg';
import web1 from '../Project/img/portfolio/web1.jpg';
import web2 from '../Project/img/portfolio/web2.jpg';
import web3 from '../Project/img/portfolio/web3.jpg';
import card1 from '../Project/img/portfolio/card1.jpg';
import card2 from '../Project/img/portfolio/card2.jpg';
import card3 from '../Project/img/portfolio/card3.jpg';
import Navbar from './Navbar.js';
import Footer from './Footer.js';



class Portfolios extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="jumbotron jumbotron-fluid mb-0" style={{overflow:"hidden"}}>
                    <div className="container">
                        <h4 className="text-center pt-2" style={{fontSize: "30px"}}>OUR PORTFOLIO</h4>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 pt-2">
                                <div className="card">
                                        <img className="card-image-top" id="filter-app" src={app1} alt="app1" style={{width: "100%"}}/>
                                        <div className="card-body">
                                            <h4 className="card-title  text-center" style={{color:"blue"}}>App1</h4>
                                            <p className="card-text text-center">App1</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 pt-2">
                                <div className="card">
                                    <img className="card-image-top" id="filter-web" src={web3} alt="web3" style={{width: "100%"}}/>
                                    <div className="card-body">
                                        <h4 className="card-title  text-center" style={{color:"blue"}}>Web3</h4>
                                        <p className="card-text text-center">Web3</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 pt-2">
                                <div className="card">
                                    <img className="card-image-top" id="filter-app" src={app2} alt="app2" style={{width: "100%"}}/>
                                    <div className="card-body">
                                        <h4 className="card-title text-center" style={{color:"blue"}}>App2</h4>
                                        <p className="card-text text-center">App2</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 pt-2">
                                <div className="card">
                                        <img className="card-image-top" id="filter-card" src={card2} alt="card2" style={{width: "100%"}}/>
                                        <div className="card-body">
                                        <h4 className="card-title  text-center" style={{color:"blue"}}>Card2</h4>
                                            <p className="card-text text-center">Card2</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 pt-2">
                                <div className="card">
                                    <img className="card-image-top" id="filter-web" src={web2} alt="web2" style={{width: "100%"}}/>
                                    <div className="card-body">
                                        <h4 className="card-title  text-center" style={{color:"blue"}}>Web2</h4>
                                        <p className="card-text text-center">Web2</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 pt-2">
                                <div className="card">
                                    <img className="card-image-top" id="filter-app" src={app3} alt="app3" style={{width: "100%"}}/>
                                    <div className="card-body">
                                        <h4 className="card-title text-center" style={{color:"blue"}}>App3</h4>
                                        <p className="card-text text-center">App3</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-6 pt-2">
                                <div className="card">
                                        <img className="card-image-top" id="filter-card" src={card1} alt="card1" style={{width: "100%"}}/>
                                        <div className="card-body">
                                        <h4 className="card-title  text-center" style={{color:"blue"}}>Card1</h4>
                                            <p className="card-text text-center">Card1</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 pt-2">
                                <div className="card">
                                    <img className="card-image-top" id="filter-card" src={card3} alt="card3" style={{width: "100%"}}/>
                                    <div className="card-body">
                                        <h4 className="card-title  text-center" style={{color:"blue"}}>Card3</h4>
                                        <p className="card-text text-center">Card3</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 pt-2">
                                <div className="card">
                                    <img className="card-image-top" id="filter-web" src={web1} alt="web1" style={{width: "100%"}}/>
                                    <div className="card-body">
                                        <h4 className="card-title text-center" style={{color:"blue"}}>Web1</h4>
                                        <p className="card-text text-center">Web</p>
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

export default Portfolios;