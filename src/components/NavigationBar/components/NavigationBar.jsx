import React from "react"
import { Link, NavLink } from "react-router-dom";
import "../styles/NavigationBar.css"
import DCLogo from '../../../assets/DCNewlogo.svg'

const NavigationBar = () => {
    return (
        <> 
            <nav className="navbar navbar-expand-lg navbar-light bg-light navigation-bar-box">
                <Link to="/">
                    <img src = {DCLogo} alt = "Logo" className = "ml-5" width = "144px" height = "28px"/>
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

                <div className="collapse navbar-collapse navigation-bar" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link navigation-items" to="">New Cars</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navigation-items" to="">Used Cars</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navigation-items" to="">Popular Cars</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navigation-items" to="">About us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navigation-items" to="">Contact Us</NavLink>
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
