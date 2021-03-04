import React,{useState,useEffect} from 'react'
import ProfilePic from '../../../assets/Profile Picture.png'
import BellIcon from '../../../assets/Bell Icon.png'
import DownArrow from '../../../assets/DownArrow.png'
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
            {profilePic ? <img className="img-fluid dashboard-nav-img" alt='profile-pic' src={profilePic}/> : <User size={25} className="mt-2 dashboard-user-icon" /> }
                {/* <img src={ProfilePic} className='dashboard-nav-img'/> */}
                <p className='dashord-nav-text'>{userName}</p>
                {/* <img src={DownArrow} className='dashboard-nav-arrow'/> */}
                <UncontrolledDropdown nav inNavbar className='dasboard-drpdown'>
                    <DropdownToggle nav caret className=''>
                        <img  src={DownArrow} className='dashboard-nav-arrow'/> 
                    </DropdownToggle>
                                     
                    <DropdownMenu right className='dashboard-drpdown-menu'>                                    
                        <DropdownItem  onClick={()=>handleLogout()} className=''>Logout</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        </div>
    )
}
export default Nav