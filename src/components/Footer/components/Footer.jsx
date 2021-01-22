import React from "react"
import {Row, Col, Nav, NavItem, Button, NavLink, Container} from 'reactstrap'
import '../styles/Footer.css'
import { Facebook, Instagram, Twitter } from 'react-feather';
import FacebookFooter from '../../../assets/facebook-icon.png'
import InstraFooter from '../../../assets/insta-icon.png'
import TwitterFooter from '../../../assets/twitter-icon.png'
import SearchBoxSearchIcon from '../../../assets/SearchBoxSearchIcon.svg'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div> 
            {/* Upper Footer starts here */}
            <section className = "bottom-footer ">
                <div className = "container-fluid">
                    <Row>
                        <Col className = "footer-image">
                            <Row className = "h-100">
                                
                                <Col md  = "6" xs = "12" className = "car-dealer-class my-auto">
                                    <h1 className = "car-dealer-head ml-4">Are you a car dealer?</h1>
                                    <h5 className = "car-dealer-subhead ml-4">Create your own virtural showroom and boost sales</h5>
                                </Col>
                              
                                <Col md = "6" xs = "12" className = "learn-more-button-class my-auto">
                                    <Button className="learn-more-button-cover">Learn More</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </section>
            
           {/* Mid Footer starts here */}
           <body className = "footer-body">
                <Container className="upper-footer">
                    <Row>
                        <Col xs="12" md="3" className = "footer-columns">
                            <Nav vertical>
                                <NavItem>
                                    <h2 className = "footer-dc">Double Cars</h2>
                                </NavItem>
                                <NavItem >
                                    <p className = "discription-dc-footer">Maecenas ante lacus, viverra is in, egestas tincidunt nulla. Aliquam mi lectus, eleifend eget felis eget</p>
                                </NavItem>
                                
                            </Nav>
                        </Col>

                        <Col xs="12" md="2" className = "footer-columns">
                            <Nav vertical>
                                <NavItem>
                                    <NavLink className = "nav-text-color" to = "">New Cars</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className = "nav-text-color" to = "">Popular Cars</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className = "nav-text-color" to = "">Used Cars</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>

                        <Col xs="12" md="2" className = "footer-columns">
                            <Nav vertical>
                                <NavItem>
                                    <NavLink className = "nav-text-color" to = "">Certified Cars</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className = "nav-text-color" to = "">Recommended</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className = "nav-text-color" to = "">Trending</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col xs="12" md="2" className = "footer-columns">
                            <Nav vertical>
                                <NavItem>
                                    <NavLink className = "nav-text-color" to = "">Categories</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className = "nav-text-color" to = "">Best Manufacturers</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className = "nav-text-color" to = "">Best Offers</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col xs="12" md="3" className = "footer-columns">
                            <Nav vertical>
                                <NavItem>
                                <NavLink className = "nav-text-color footer-contact-information" to="">Contact Information</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="" className = "footer-contact">support@doublecars.com</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="" className = "footer-contact">01 234 67890</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                    {/* <hr/> */}
                </Container>

                {/* Lower Footer starts here */}
                <Container className = "lower-footer-container">
                    <Row>
                        <Col md = "3" xs = "12" className = "lower-footer-columns text-center">
                            <p className = "bootom-footer nav-text-color mt-2">© DoubleCars All Rights Reservered</p>
                        </Col>
                        <Col md = "2" xs = "12" className = "lower-footer-columns text-center">
                            <NavLink className = "bootom-footer nav-text-color" to="">Legal Information</NavLink>
                        </Col>
                        <Col md = "2" xs = "12" className = "lower-footer-columns text-center">
                            {/* <NavLink className = "bootom-footer nav-text-color" to="">Privacy Policy</NavLink> */}
                            <Link to={'/privacypolicy/'}>
                            <NavLink className = "bootom-footer nav-text-color">Privacy Policy</NavLink>
                        </Link>
                        </Col>
                        <Col md = "2" xs = "12" className = "text-center lower-footer-columns">
                        <Link to={'/termsandconditions/'}>
                            <NavLink className = "bootom-footer nav-text-color">Terms and Conditions</NavLink>
                        </Link>
                        </Col>
                        <Col md = "3" xs = "12" className = "lower-footer-columns">
                        {/* <Facebook color="#1C67CE" size={20} className = "feather-icon"/>
                        <Instagram color="#1C67CE" size={20} className = "feather-icon"/>
                        <Twitter color="#1C67CE" size={20} className = "feather-icon"/> */}

                            <Row className='icon-row'>
                                <Col md = "2"  xs = "" className = "icons-columns">
                                    {/* <Facebook color="#1C67CE" size={20} className = "feather-icon"/> */}
                                    <img  src = {FacebookFooter} className = ""/>
                                </Col >
                                <Col md = "2" xs = "" className = "icons-columns ">
                                    {/* <Instagram color="#1C67CE" size={20} className = "feather-icon"/> */}
                                    <img  src = {InstraFooter} className = ""/>
                                </Col>
                                <Col md = "2"  xs = "" className = "icons-columns ">
                                    {/* <Twitter color="#1C67CE" size={20} className = "feather-icon"/> */}
                                    <img  src = {TwitterFooter} className = ""/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </body>
        </div>
    );
  }
  
  export default Footer;
