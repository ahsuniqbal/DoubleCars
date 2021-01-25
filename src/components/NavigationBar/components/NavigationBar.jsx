import React,{useEffect,useState} from "react"
import { Link, NavLink } from "react-router-dom";
import "../styles/NavigationBar.css"
import DCLogo from '../../../assets/DCNewlogo.svg'
import {Input, InputGroup, InputGroupText ,Form,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import { Search } from 'react-feather';
import NavbarSearchIcon from '../../../assets/NavbarSearchIcon.svg'
import socketIOClient from "socket.io-client";
import { useHistory } from 'react-router-dom';
import {getUser} from '../../../pages/Profile/api/Get';
import AppbarDropdown from '../../../assets/uper-arrow-appbar.png'
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

    //get user data to show dropdown at navbar
    const [userName,setUserName] = useState(null)
    const path=window.location.pathname 
    console.log(path)
    useEffect(()=>{
    
    if(path=='/profile' && localStorage.getItem("userId")!=null){
        getUser(localStorage.getItem("userId"))
        .then(doc => {
            setUserName(doc[0].fullName)
        })
        .catch(e => {
            alert(e.message)
        }) 
    }
    },[])
   
    // logout function
    const handleLogout = () => {
        localStorage.removeItem('userId')
        history.push('/');
    }

    // to apply css on navbar active tab
    // const navClickColorFunction=function (e) {
    //     var elems = document.querySelector(".active");
    //     if(elems !==null){
    //      elems.classList.remove("active");
    //     }
    //    e.target.className = "active";
    //   }
      
    //code to hide navbar on scroll down and show on scroll up
    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    // var currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos) {
    //     document.querySelector(".navbar").style.top = "0";
    //   } else {
    //     document.querySelector(".navbar").style.top = "-100px";
    //   }
    //   prevScrollpos = currentScrollPos;
    // }
    return (
        <> 
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navigation-bar-box">
                <Link to="/">
                    <img  src = {DCLogo} alt = "Logo" className = "double-car-logo" width = "144px" height = "28px" />
                </Link>
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target=".navigation-bar"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="true"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse navigation-bar" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link navigation-items" to={{pathname: '/products', heading:'New Cars', search: '?isUsed=false'}}>New Cars</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navigation-items" to={{pathname: '/products', heading:'Used Cars', search: '?isUsed=true'}}>Used Cars</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navigation-items" to= {'/blogshome'}>Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navigation-items" to= {'/about'}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navigation-items" to={'/contactus'}>Contact</NavLink>
                        </li>
                       
                        <li className="nav-item">
                            {/* <NavLink className="nav-link download-button" to="">Download App</NavLink> */}
                            <Form onSubmit={(e) => TopSearch(e)}>
                                <InputGroup className="search-group">
                                    <InputGroupText className = "search-navigation-icon">
                                        <img src = {NavbarSearchIcon} className = "img-fluid"/>
                                    {/* <Search className = "search-icon-navbar"/> */}
                                    </InputGroupText>
                                <Input className="search-box" type="text" placeholder="Search" id='top-search-box' />
                                </InputGroup>
                            </Form>
                        </li>

                            {
                                localStorage.getItem("userId") ? null : <li className="nav-item">
                                <NavLink className="nav-link navigation-items login-button" to="/login" >Log in</NavLink>
                                </li>
                            }
                            {
                                localStorage.getItem("userId") ? null : <li className="nav-item">
                                <NavLink className="nav-link navigation-items signup-button" to="/signup">Sign up</NavLink>
                                </li>
                            }

                            {/* show this when user is login and route is profile */}
                            {
                            path=='/profile' && localStorage.getItem("userId") ?  <li className="nav-item mt-1">
                             <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className='dropdown-img'>
                                    pic
                                </DropdownToggle>
                                     
                                <DropdownMenu right className='dropdown-menu'>
                                    <DropdownItem className='dropdown-arrow'><img src={AppbarDropdown} className='dropdown-arrow-pic'/> </DropdownItem>
                                    <DropdownItem style={{fontWeight:'bold'}} >{userName}</DropdownItem>
                                    <DropdownItem >Edit Profile</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem >Messages</DropdownItem>
                                    <DropdownItem >Saved Cars</DropdownItem>
                                    <DropdownItem  onClick={e => handleLogout()}>Logout</DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                             </li> : null
                            }
                        
                        
                       
                    </ul>   
                </div>
            </nav>
        </>
    );
  }
  
  export default NavigationBar;
