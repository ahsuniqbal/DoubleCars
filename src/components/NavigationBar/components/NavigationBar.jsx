import React from "react"
import { Link, NavLink } from "react-router-dom";
import "../styles/NavigationBar.css"
import DCLogo from '../../../assets/DCLogo.jpg'

const NavigationBar = () => {
    return (
        <> 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">
                    <img src = {DCLogo} alt = "Logo" width = "252px" height = "50px"/>
                </Link>
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="true"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">New Cars</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Used Cars</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Popular Cars</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Certified Cars</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Contact Us</NavLink>
                        </li>
                       
                        <li className="nav-item">
                            <NavLink className="nav-link download-button" to="">Download App</NavLink>
                        </li>
                    </ul>   
                </div>
            </nav>
        </>
    );
  }
  
  export default NavigationBar;
