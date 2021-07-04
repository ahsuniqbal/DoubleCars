import React,{useState,useEffect} from 'react'
import ProfilePic from '../../../assets/Profile Picture.png'
import BellIcon from '../../../assets/Bell Icon.png'

import AppbarDropdown from '../../../assets/uper-arrow-appbar.png'
import {UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import {getUser} from '../../Profile/api/Get';
import { User } from 'react-feather';
import { useHistory } from 'react-router-dom';
import '../Styles/Nav.css'

function Nav (){

    const history =useHistory()

  //check user is login
  const [profilePic,setProfilePic] = useState(null)
  const [userName,setUserName] = useState(null)
  useEffect(()=>{
  
  if(localStorage.getItem("userId")!=null){
      getUser(localStorage.getItem("userId"))
      .then(doc => {
          setProfilePic(doc[0].profilePic)
          setUserName(doc[0].fullName)
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
    return(
        <div className='dashboard-nav-main'>
            <div className='dashboard-nav-left'>
                <UncontrolledDropdown nav inNavbar className='dasboard-notification'>
                    <DropdownToggle nav caret className=''>
                        <img src={BellIcon} className='dashboard-bell-icon'/> 
                    </DropdownToggle>
                                     
                    {/* <DropdownMenu left className=''>                                    
                        <DropdownItem className=''>You have no notification</DropdownItem>
                    </DropdownMenu> */}
                </UncontrolledDropdown>
            </div>
            <div className='dashboard-nav-right'>
                     {
                            localStorage.getItem("userId") &&
                            window.location.pathname !== '/fullviewheader'
                            ?  <div className="dropdown-dashboard">
                             <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className='dropdown-toggle-image'>
                                    {profilePic ? <img className="img-fluid profile-navbar-image" alt='profile-pic' src={profilePic}/> : <User size={25} className="user-icon-dashboard" /> }
                                </DropdownToggle>
                                     
                                <DropdownMenu right className='dashboard-dropdown-menu'>
                                    <DropdownItem className='dashboard-nav-dropdown-arrow d-none d-md-block' disabled><img src={AppbarDropdown} alt='' className='dashboard-nav-arrow-pic'/> </DropdownItem>
                                    <DropdownItem disabled className='dashboard-nav-profile-name'>{userName}</DropdownItem>
                                    <DropdownItem onClick={() => history.push('/profile')} className='dashboard-nav-profile-item'>Edit Profile</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={() => history.push('/chat')} className='dashboard-nav-profile-item'>Messages</DropdownItem>
                                    <DropdownItem onClick={() => history.push('/saved-cars')} className='dashboard-nav-profile-item'>Saved Cars</DropdownItem>
                                    <DropdownItem  onClick={e => handleLogout()} className='dashboard-nav-profile-item'>Logout</DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                             </div> : null
                            }
            {/* {profilePic ? <img className="img-fluid dashboard-nav-img" alt='profile-pic' src={profilePic}/> : <User size={25} className="mt-2 dashboard-user-icon" /> }
                <p className='dashord-nav-text'>{userName}</p>
                <UncontrolledDropdown nav inNavbar className='dasboard-drpdown'>
                    <DropdownToggle nav caret className=''>
                        <img  src={DownArrow} className='dashboard-nav-arrow'/> 
                    </DropdownToggle>
                                     
                    <DropdownMenu right className='dashboard-drpdown-menu'>                                    
                        <DropdownItem  onClick={()=>handleLogout()} className=''>Logout</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown> */}
            </div>
        </div>
    )
}
export default Nav