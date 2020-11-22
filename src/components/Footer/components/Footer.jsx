import React from "react"
import {Row, Col, Nav, NavItem, Button, NavLink} from 'reactstrap'
import '../styles/Footer.css'
import { Facebook, Instagram, Twitter } from 'react-feather';

const Footer = () => {
    return (
        <div> 
            {/* Upper header starts here */}
            <section className = "bottom-footer ">
                <div className = "container-fluid">
                    <div className = "row">
                        <div className = "col-12 footer-image">
                            <div className = "row h-100">
                                <div className = "col-md-5 offset-1 my-auto">
                                    <h1 className = "car-dealer-head">
                                    Are you a car dealer?
                                    </h1>
                                    <h5 className = "my-1 car-dealer-head5">
                                        We bring you the opporitniy to sell your car on our platmore
                                    </h5>
                                  
                                </div>

                                <div className = "col-md-2 offset-3 my-auto">
                                <Button className="learn-more-button-cover" to="">Learn More</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            
           {/* Lower header starts here */}
            <div className="container mt-5">
                <Row>
                    <Col xs="12" md="3">
                        <Nav vertical>
                            <NavItem>
                                <h4 className = "footer-dc"><strong>Double Cars</strong></h4>
                            </NavItem>
                            <NavItem >
                                <p className = "discription-dc-footer">Maecenas ante lacus, viverra is in, egestas tincidunt nulla. Aliquam mi lectus, eleifend eget felis eget,</p>
                            </NavItem>
                            
                        </Nav>
                    </Col>

                    <Col xs="12" md="2">
                        <Nav vertical>
                            <NavItem>
                                <NavLink className = "nav-text-color" href="#">New Cars</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className = "nav-text-color" href="#">Popular Cars</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className = "nav-text-color" href="#">Used Cars</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>

                    <Col xs="12" md="2">
                        <Nav vertical>
                            <NavItem>
                                <NavLink className = "nav-text-color" href="#">Certified Cars</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className = "nav-text-color" href="#">Recommended</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className = "nav-text-color" href="#">Trending</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col xs="12" md="2">
                        <Nav vertical>
                            <NavItem>
                                <NavLink className = "nav-text-color" href="#">Categories</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className = "nav-text-color" href="#">Best Manufacturers</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className = "nav-text-color" href="#">Best Offers</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col xs="12" md="3">
                        <Nav vertical>
                            <NavItem>
                            <NavLink className = "nav-text-color" href="#"><strong>Contact Information</strong></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" className = "footer-contact">support@doublecars.com</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" className = "footer-contact">01 234 67890</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
                <hr/>
            </div>

            <div className="container lower-container">
                <Row>
                    <Col md = "3">
                    <p className = "bootom-footer nav-text-color mt-2">© DoubleCars All Rights Reservered</p>
                    </Col>

                    <Col md = "2">
                    <NavLink className = "bootom-footer nav-text-color" href="#">Legal Information</NavLink>
                    </Col>
                    <Col md = "2">
                    <NavLink className = "bootom-footer nav-text-color" href="#">Privacy Policy</NavLink>
                    </Col>
                    <Col md = "2">
                    <NavLink className = "bootom-footer nav-text-color" href="#">Terms and Conditions</NavLink>
                    </Col>
                    <Col md = "3" className = "">
                    
                    <Row>
                        <Col md = "4" className = "icons-columns ">
                            <Facebook color="#1C67CE" size={20} className = "feather-icon"/>
                        </Col >
                        <Col md = "4" className = "icons-columns ">
                            <Instagram color="#1C67CE" size={20} className = "feather-icon"/>
                        </Col>
                        <Col md = "4" className = "icons-columns ">
                            <Twitter color="#1C67CE" size={20} className = "feather-icon"/>
                        </Col>
                    </Row>
                    </Col>

                </Row>

                {/* <ul className = "bottom-footer-content">
                <li>
                    <p className = "bootom-footer nav-text-color mt-2">© DoubleCars All Rights Reservered</p>
                </li>
                <li>
                <NavLink className = "bootom-footer nav-text-color" href="#">Legal Information</NavLink>
                </li>
                <li>
                <NavLink className = "bootom-footer nav-text-color" href="#">Privacy Policy</NavLink>
                </li>
                <li>
                <NavLink className = "bootom-footer nav-text-color" href="#">Terms and Conditions</NavLink>
                </li>
                <li>
                <img className = "mr-2" src = {facebookicon} alt = "fb" width = "5%"/>
                <img className = "mr-2" src = {instaicon} alt = "insta" width = "5%"/>
                <img src = {twittericon} alt = "twitter" width = "5%"/>
                </li>
                </ul> */}
            </div>
        </div>
    );
  }
  
  export default Footer;
