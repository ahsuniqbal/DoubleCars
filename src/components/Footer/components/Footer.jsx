import React from "react"
import {Row, Col, Nav, NavItem, Button, NavLink, Container, Label} from 'reactstrap'
import '../styles/Footer.css'
import FacebookFooter from '../../../assets/facebook-icon.png'
import InstraFooter from '../../../assets/insta-icon.png'
import TwitterFooter from '../../../assets/twitter-icon.png'
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

import DCLogo from '../../../assets/DCNewlogo.svg'
const Footer = () => {

    return (
        <div  style={{display:window.location.pathname=='/dashboard' && 'none'}}> 
            {/* Upper Footer starts here */}
            <section className ="bottom-footer ">
                <div className = "container-fluid footer-image">
                    <Container>
                    <Row>
                        <Col className = "footer-image">
                            <Row className = "h-100">
                                
                                <Col md  = "7" xs = "12" className = "car-dealer-class my-auto">
                                    <h1 className = "car-dealer-head ml-4">Seller or Dealership Register Now</h1>
                                    <h5 className = "car-dealer-subhead ml-4">List your car for free with us. Import your inventory instantly . No Contracts, No commitments.</h5>
                                </Col>
                              
                                <Col md = "5" xs = "12" className = "learn-more-button-class my-auto">
                                    <Link to = {'/fullviewheader'}>
                                        <Button className="learn-more-button-cover float-right">Learn More</Button>
                                    </Link>
                                    
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    </Container>
                </div>
            </section>
            
           {/* Mid Footer starts here */}
           <body className = "footer-body">
                <Container className="upper-footer">
                    <Row>
                        <Col xs="12" md="3" className = "footer-columns">
                            <Nav vertical>
                                <NavItem>
                                    {/* <h1 className = "footer-dc">Double Cars</h1> */}
                                    <Link to="/">
                                    <img  src = {DCLogo} alt = "Logo" className = "dc-logo-footer" width = "144px" height = "28px" />
                                    </Link>
                                    
                                </NavItem>
                                <NavItem >
                                    <p className = "discription-dc-footer">Maecenas ante lacus, viverra is in, egestas tincidunt nulla. Aliquam mi lectus, eleifend eget felis eget</p>
                                </NavItem>
                                
                            </Nav>
                        </Col>

                        <Col xs="6" md="2" className = "footer-columns">
                            <Nav vertical>
                                <Link to={'/products/'}>
                                    <NavLink className = "nav-text-color" href='/products?isUsed=0'>
                                    {window.location.search=='?isUsed=0' ?
                                    <span >New Cars</span>:
                                    <span >New Cars</span>}
                                    </NavLink>
                                </Link>
                                <Link to={'/products?cars=popular'}>
                                    <NavLink className = "nav-text-color" to = "">Popular Cars</NavLink>
                                </Link>
                                <Link to={'/products/'}>
                                    <NavLink className = "nav-text-color" href='/products?isUsed=1'>
                                    {window.location.search=='?isUsed=1' ?
                                    <span >Used Cars</span>:
                                    <span >Used Cars</span>}
                                    </NavLink>
                                </Link>
                            </Nav>
                        </Col>

                        <Col xs="6" md="2" className = "footer-columns">
                            <Nav vertical>
                                <Link to={'/products?cars=certified'}>
                                    <NavLink className = "nav-text-color" to = "">Certified Cars</NavLink>
                                </Link>
                                <Link to={'/products?cars=recommended'}>
                                    <NavLink className = "nav-text-color" to = "">Recommended</NavLink>
                                </Link>
                                <Link to={'/products?cars=trending'}>
                                    <NavLink className = "nav-text-color" to = "">Trending</NavLink>
                                </Link>
                            </Nav>
                        </Col>
                        <Col xs="12" md="2" className = "footer-columns">
                            <Nav vertical>
                                <Link to={'/products/'}>
                                    <NavLink className = "nav-text-color" to = "">Categories</NavLink>
                                </Link>
                                <Link to={'/products/'}>
                                    <NavLink className = "nav-text-color" to = "">Best Manufacturers</NavLink>
                                </Link>
                                <Link to={'/products/'}>
                                    <NavLink className = "nav-text-color" to = "">Best Offers</NavLink>
                                </Link>
                            </Nav>
                        </Col>
                        <Col xs="12" md="3" className = "footer-columns">
                            <Nav vertical>
                                <NavItem>
                                <Label className = "nav-text-color footer-contact-information" style = {window.screen.width > 768 ? {marginLeft: '1rem'} : null } to="">Contact Information</Label>
                                </NavItem>
                                <NavItem>
                                    <a href="mailto:support@doublecars.com" className = "footer-contact nav-link">support@doublecars.com</a>
                                </NavItem>
                                <NavItem>
                                    <a href="tel:12345678" className = "footer-contact nav-link">01 234 67890</a>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                    {/* <hr/> */}
                </Container>

                {/* Lower Footer starts here */}
                <Container className = "lower-footer-container">
                    <Row>
                        <Col md="1"></Col>
                        
                        <Col md = "2" xs = "12" className = "lower-footer-columns text-center">
                            <p className = "bootom-footer nav-text-color-bottom mt-2">© DoubleCars All Rights Reservered</p>
                        </Col>
                        <Col md = "2" xs = "12" className = "lower-footer-columns text-center">
                            <Link to={'/privacypolicy/'}>
                            <NavLink className = "bootom-footer nav-text-color-bottom" to="">Legal Information</NavLink>
                            </Link>
                        </Col>
                        <Col md = "2" xs = "12" className = "lower-footer-columns text-center">
                            {/* <NavLink className = "bootom-footer nav-text-color" to="">Privacy Policy</NavLink> */}
                            <Link to={'/termsandconditions/'}>
                            <NavLink className = "bootom-footer nav-text-color-bottom">Terms and Conditions</NavLink>
                        </Link>
                        </Col>
                        <Col md = "2" xs = "12" className = "text-center lower-footer-columns">
                        <Link to={'/privacypolicy/'}>
                            <NavLink className = "bootom-footer nav-text-color-bottom">Privacy Policy</NavLink>
                        </Link>
                        </Col>
                        <Col md = "2" xs = "12" className = "lower-footer-columns">
                        {/* <Facebook color="#1C67CE" size={20} className = "feather-icon"/>
                        <Instagram color="#1C67CE" size={20} className = "feather-icon"/>
                        <Twitter color="#1C67CE" size={20} className = "feather-icon"/> */}

                            <Row className='icon-row'>
                                <Col md = "2"  xs = "" className = "icons-columns">
                                    {/* <Facebook color="#1C67CE" size={20} className = "feather-icon"/> */}
                                    <img  src = {FacebookFooter} className = ""/>
                                </Col >
                                <Col md = "2" xs = "" className = "instra-icons-columns ">
                                    {/* <Instagram color="#1C67CE" size={20} className = "feather-icon"/> */}
                                    <img  src = {InstraFooter} className = ""/>
                                </Col>
                                <Col md = "2"  xs = "" className = "icons-columns ">
                                    {/* <Twitter color="#1C67CE" size={20} className = "feather-icon"/> */}
                                    <img  src = {TwitterFooter} className = ""/>
                                </Col>
                            </Row>
                        </Col>

                        <Col md="1"></Col>
                    </Row>
                </Container>
            </body>
        </div>
    );
  }
  
  export default Footer;
