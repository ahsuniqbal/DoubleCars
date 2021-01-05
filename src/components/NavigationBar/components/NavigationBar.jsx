import React,{useEffect} from "react"
import { Link, NavLink } from "react-router-dom";
import "../styles/NavigationBar.css"
import DCLogo from '../../../assets/DCNewlogo.svg'
import {Input, InputGroup, InputGroupText} from 'reactstrap';
import { Search } from 'react-feather';
import socketIOClient from "socket.io-client";
const ENDPOINT = "https://magnetic-flare-280505.uc.r.appspot.com/";

const NavigationBar = () => {

    useEffect(() => {
        if(localStorage.getItem("userId")){
              const socket = socketIOClient.connect(ENDPOINT,{
                  reconnect: true
              })
            socket.on('new_user', function(socketClientID) {
            //console.log('Connection to server established. SocketID is ',socketClientID);
                const obj = {
                    ID : Number(localStorage.getItem("userId")),
                    ClientID : socketClientID
                }
                socket.emit('user', obj);
            });
          }
    },[])

    return (
        <> 
            <nav className="navbar navbar-expand-lg navbar-light bg-light navigation-bar-box">
                <Link to="/">
                    <img  src = {DCLogo} alt = "Logo" className = "double-car-logo" width = "144px" height = "28px"/>
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
                            <NavLink className="nav-link navigation-items" to={{pathname: '/products', heading:'New Cars'}}>New Cars</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navigation-items" to={{pathname: '/products', heading:'Used Cars'}}>Used Cars</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navigation-items" to= {'/blogshome'}>Blogs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navigation-items" to= {'/about'}>About us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navigation-items" to={'/contactus'}>Contact Us</NavLink>
                        </li>
                       
                        <li className="nav-item">
                            {/* <NavLink className="nav-link download-button" to="">Download App</NavLink> */}
                            <InputGroup className="search-group">
                                <InputGroupText className = "search-navigation-icon">
                                <Search className = "search-icon-navbar"/>
                                </InputGroupText>
                            <Input className="search-box" type="text" placeholder="Search" />
                        </InputGroup>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link navigation-items" to={'/login'}>Log in</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navigation-items signup-button" to="/signup">Sign up</NavLink>
                        </li> */}
                    </ul>   
                </div>
            </nav>
        </>
    );
  }
  
  export default NavigationBar;
