import React,{useEffect,useState} from "react"
import { Link, NavLink } from "react-router-dom";
import "../styles/NavigationBar.css"
import DCLogo from '../../../assets/DCNewlogo.svg'
import DCWhiteLogo from '../../../assets/DCWhiteLogo.svg'
import {Input, InputGroup ,Form,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import NavbarSearchIcon from '../../../assets/NavbarSearchIcon.svg'
import socketIOClient from "socket.io-client";
import { useHistory } from 'react-router-dom';
import {getUser} from '../../../pages/Profile/api/Get';
import AppbarDropdown from '../../../assets/uper-arrow-appbar.png'
import { User } from 'react-feather'; 

import { connectionString } from '../../../config/ConnectionString'

const NavigationBar = () => {
    const history = useHistory();
    const ENDPOINT = connectionString;

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
        window.location.reload();
    };

    //get user data to show dropdown at navbar
    const [userName,setUserName] = useState(null)
    const [profilePic,setProfilePic] = useState(null)
    const path=window.location.pathname 
    console.log(path)
    useEffect(()=>{
    
    if(localStorage.getItem("userId")!=null){
        getUser(localStorage.getItem("userId"))
        .then(doc => {
            console.log("a", doc)
            setUserName(doc[0].fullName)
            setProfilePic(doc[0].profilePic)
        })
        .catch(e => {
            console.log(e.message)
        }) 
    }

    },[])
   
    // logout function
    const handleLogout = () => {
        localStorage.removeItem('userId')
        history.push('/');
    }
    // useEffect(()=>{
    //     GetFilterResult(localStorage.getItem('Query Param'))
    //     .then(doc=>{
    //         console.log(doc)
    //     })
    //     .catch(e=>{
    //         alert(e.message)
    //     })
    //  },[])
   

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

    // style for new car /used car span
    const styleDiv={
        fontWeight:'bold',
        color:'#1C67CE',
    }
    return (
        <div style={{display:window.location.pathname==='/dashboard' && 'none'}}> 
            <nav className="navbar navbar-expand-lg navbar-light fixed-top navigation-bar-box"
                // to change style on full view header page
                style={{
                    boxShadow: window.location.pathname==='/fullviewheader' ? 'none' : '0px 4px 4px rgba(0, 0, 0, 0.03)',
                    backgroundColor:window.location.pathname==='/fullviewheader' ? '#1C67CE ' : '#ffffff',
                    padding: '1.1rem 1rem 1.1rem 0 ',
                }}
            >
                <Link to="/">
                    {window.location.pathname==='/fullviewheader' ?
                    <img  src = {DCWhiteLogo} alt = "Logo" className = "double-car-logo" width = "144px" height = "28px" /> :
                    <img  src = {DCLogo} alt = "Logo" className = "double-car-logo" width = "144px" height = "28px" />    
                }
                    
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
                            <a className={window.location.pathname!=='/fullviewheader' ? "nav-link navigation-items" : 'nav-link white-navigation-item'}
                              href='/products?isUsed=false'>
                                    {window.location.search==='?isUsed=false' ?
                                    <span style={styleDiv}>New Cars</span>:
                                    <span >New Cars</span>}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={window.location.pathname!=='/fullviewheader' ? "nav-link navigation-items" : 'nav-link white-navigation-item'}
                                     href='/products?isUsed=true'>
                                     {window.location.search==='?isUsed=true' ?
                                    <span style={styleDiv}>Used Cars</span>:
                                    <span >Used Cars</span>}
                            </a>
                        </li>
                        <li className="nav-item">
                            <NavLink className={window.location.pathname!=='/fullviewheader' ? "nav-link navigation-items" : 'nav-link white-navigation-item'}
                             id='nav-link-id' to= {'/blogs'}>Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={window.location.pathname!=='/fullviewheader' ? "nav-link navigation-items" : 'nav-link white-navigation-item'}
                             id='nav-link-id' to= {'/about'}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={window.location.pathname!=='/fullviewheader' ? "nav-link navigation-items" : 'nav-link white-navigation-item'}
                            id='nav-link-id' to={'/contactus'}>Contact</NavLink>
                        </li>
                       
                        <li className="nav-item">
                            {/* <NavLink className="nav-link download-button" to="">Download App</NavLink> */}
                            <Form onSubmit={(e) => TopSearch(e)}>
                            <InputGroup className="search-group">
                                <img src = {NavbarSearchIcon} alt='seach-bar' className = "search-icon-image"/>
                                <Input className="search-box" type="text" placeholder="Search" id='top-search-box' />
                            </InputGroup>
                                {/* <InputGroup className="search-group">
                                    <InputGroupText className = "search-navigation-icon">
                                        <img src = {NavbarSearchIcon} className = "img-fluid"/>
                                    </InputGroupText>
                                <Input className="search-box" type="text" placeholder="Search" id='top-search-box' />
                                </InputGroup> */}
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
                            localStorage.getItem("userId") &&
                            window.location.pathname !== '/fullviewheader'
                            ?  <li className="profile-nav-item">
                             <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className='dropdown-toggle-image'>
                                    {profilePic ? <img className="img-fluid profile-navbar-image" alt='profile-pic' src={profilePic}/> : <User size={25} className="mt-2" /> }
                                </DropdownToggle>
                                     
                                <DropdownMenu right className='dropdown-menu'>
                                    <DropdownItem className='dropdown-arrow' disabled><img src={AppbarDropdown} alt='' className='dropdown-arrow-pic'/> </DropdownItem>
                                    <DropdownItem disabled className='navigation-profile-name'>{userName}</DropdownItem>
                                    <DropdownItem onClick={() => history.push('/profile')} className='navigation-profile-item'>Edit Profile</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={() => history.push('/chat')} className='navigation-profile-item'>Messages</DropdownItem>
                                    <DropdownItem onClick={() => history.push('/saved-cars')} className='navigation-profile-item'>Saved Cars</DropdownItem>
                                    <DropdownItem  onClick={e => handleLogout()} className='navigation-profile-item'>Logout</DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                             </li> : null
                            }
                       
                    </ul>   
                </div>
            </nav>
        </div>
    );
  }
  
  export default NavigationBar;
