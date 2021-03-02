import React,{useState,useEffect} from 'react'
import ProfilePic from '../../../assets/Profile Picture.png'
import BellIcon from '../../../assets/Bell Icon.png'
import DownArrow from '../../../assets/DownArrow.png'
import {UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import '../Styles/Nav.css'


function Nav (){
    return(
        <div className='dashboard-nav-main'>
            <div className='dashboard-nav-left'>
                {/* <img src={BellIcon} className='dashboard-bell-icon'/> */}
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
                <img src={ProfilePic} className='dashboard-nav-img'/>
                <p className='dashord-nav-text'>Jhon Smith</p>
                {/* <img src={DownArrow} className='dashboard-nav-arrow'/> */}
                <UncontrolledDropdown nav inNavbar className='dasboard-drpdown'>
                    <DropdownToggle nav caret className=''>
                        <img  src={DownArrow} className='dashboard-nav-arrow'/> 
                    </DropdownToggle>
                                     
                    <DropdownMenu right className='dashboard-drpdown-menu'>                                    
                        <DropdownItem   className=''>Logout</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        </div>
    )
}
export default Nav