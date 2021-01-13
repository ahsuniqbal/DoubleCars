import React,{useEffect} from "react"
import { Link, NavLink } from "react-router-dom";
import "../styles/NavigationBar.css"
import DCLogo from '../../../assets/DCNewlogo.svg'
import {Input, InputGroup, InputGroupText ,Form} from 'reactstrap';
import { Search } from 'react-feather';
import socketIOClient from "socket.io-client";
import { useHistory } from 'react-router-dom';
const ENDPOINT = "https://magnetic-flare-280505.uc.r.appspot.com/";

const NavigationBar = () => {

    const history = useHistory();
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

    // search function
    const TopSearch = (e) => {
        e.preventDefault();
        var searchValue = document.getElementById('top-search-box').value;
        history.push({
            pathname: '/products',
            search: '?search=' + searchValue,
        })
    };

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
                            <Form onSubmit={(e) => TopSearch(e)}>
                                <InputGroup className="search-group">
                                    <InputGroupText className = "search-navigation-icon">
                                    <Search className = "search-icon-navbar"/>
                                    </InputGroupText>
                                <Input className="search-box" type="text" placeholder="Search" id='top-search-box' />
                                </InputGroup>
                            </Form>
                        </li>

                        <li className="nav-item d-flex navbar-buttons">
                            {
                                localStorage.getItem("userId") ? null : <li className="nav-item">
                                <NavLink className="nav-link navigation-items login-button" to="/login">Log in</NavLink>
                            </li>
                            }
                            {
                            localStorage.getItem("userId") ? null : <li className="nav-item">
                            <NavLink className="nav-link navigation-items signup-button" to="/signup">Sign up</NavLink>
                        </li>
                            }
                        </li>
                        
                        
                       
                    </ul>   
                </div>
            </nav>
        </>
    );
  }
  
  export default NavigationBar;
