import React from 'react';
import { Row, Col, Label, NavLink} from 'reactstrap';
import '../styles/About.css'
import AboutDealership from '../../../assets/about-dealership.svg'
import AboutMarketing from '../../../assets/about-marketing.svg'
import AboutPatnership from '../../../assets/about-partnership.svg'
import { Link} from "react-router-dom";
import { ChevronRight } from 'react-feather';
const AboutDetails = () => {
    return(
        <Row className = "">
             
            <Col xs = "12" md = "3" className = "about-detail-col">
                <img src = {AboutPatnership} alt = "message-icon" className = "mb-4 about-detail-image"/> <br/>
                <Label className = "about-detail-head">Partnership Program</Label> <br/>
                <Label className = "about-detail-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis.</Label>  
                <Link to={'/contactus/'}>
                    <NavLink className = "about-detail-contact-btn" >Contact Us <ChevronRight className = "about-contact-icon"/></NavLink>
                </Link>
            </Col>

            <Col md = "1" className = "vertical-line-col">
                <div className = "about-vertical-line"></div>
            </Col>
            <Col xs = "12" md = "3" className = "about-detail-col">
                <img src = {AboutDealership} alt = "message-icon" className = "mb-4 about-detail-image"/> <br/>
                <Label className = "about-detail-head">Dealership Dashboard</Label> <br/>
                <Label className = "about-detail-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis.</Label>  
                <Link to={'/contactus/'}>
                    <NavLink className = "about-detail-contact-btn" >Contact Us <ChevronRight className = "about-contact-icon"/></NavLink>
                </Link>

                
            </Col>
        
            <Col md = "1" className = "vertical-line-col">
                <div className = "about-vertical-line"></div>
            </Col>
            <Col xs = "12" md = "3" className = "about-detail-col">
                <img src = {AboutMarketing} alt = "message-icon" className = "mb-4 about-detail-image"/> <br/>
                <Label className = "about-detail-head">Marketing & Adversitment</Label> <br/>
                <Label className = "about-detail-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis.</Label>  
                <Link to={'/contactus/'}>
                    <NavLink className = "about-detail-contact-btn" >Contact Us <ChevronRight className = "about-contact-icon"/></NavLink>
                </Link>
            </Col>
       
    </Row>
    )
}

export default AboutDetails;