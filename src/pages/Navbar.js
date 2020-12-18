import React from 'react'; 
import '../Stylesheet/Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <div className="conatiner-fluid">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                <a href="#home" className="navbar-brand brand" style={{color: "white"}}>REACT BOOTSTRAP</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapse">
                    <ul className="navbar-nav nav">
                        <li className="nav-item">
                            <a className="nav-link active mr-2" href="/" style={{color: "white"}}>HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-2" href="/about" style={{color: "white"}}>ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-2" href="/services" style={{color: "white"}}>SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-2" href="/portfolio" style={{color: "white"}}>PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-2" href="/contact" style={{color: "white"}}>CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </div>
        )
    }
}

export default Navbar;