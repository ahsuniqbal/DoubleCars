import React from "react"
import {Row, Col, Nav, NavItem, NavLink} from 'reactstrap'
import '../styles/Footer.css'
import FooterImage from '../../../assets/Footer-image.png'
import facebookicon from '../../../assets/facebook-icon.png'
import instaicon from '../../../assets/insta-icon.png'
import twittericon from '../../../assets/twitter-icon.png'

const Footer = () => {
    return (
        <div> 
            
            <div className = "footer-image">
                <Row>
                    <Col xs = "12">
                           <Row>
                               <Col className = "col-6 align-self-center">
                               <h1 className = "">
                                        Are you a car dealer?
                                    </h1>
                                    <h5 className = "my-3">
                                        We bring you the opporitniy to sell your car on our platmore
                                    </h5>
                               </Col>
                                

                                <Col  className = "col-md-6">
                                    <NavLink className="nav-link download-button-cover mb-5 float-center" to="">Learn More</NavLink>
                                </Col>
                            </Row>
                            </Col>
                    </Row>
                
            </div>
           
            


            <div className="container-fluid ">
                <Row>
                    <Col xs="12" md="3">
                        <Nav vertical>
                            <NavItem>
                                <h4>Double Cars</h4>
                            </NavItem>
                            <NavItem>
                                <p>Maecenas ante lacus, viverra is in, egestas <br/>tincidunt nulla. Aliquam mi lectus, eleifend <br/> eget felis eget,</p>
                            </NavItem>
                            
                        </Nav>
                    </Col>

                    <Col xs="12" md="2">
                        <Nav vertical>
                            <NavItem>
                                <NavLink href="#">New Cars</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Popular Cars</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Used Cars</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>

                    <Col xs="12" md="2">
                        <Nav vertical>
                            <NavItem>
                                <NavLink href="#">Certified Cars</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Recommended</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Trending</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col xs="12" md="2">
                        <Nav vertical>
                            <NavItem>
                                <NavLink href="#">Categories</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Best Manufacturers</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Best Offers</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col xs="12" md="3">
                        <Nav vertical>
                            <NavItem>
                                <h6>Contact Information</h6>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">support@doublecars.com</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">01 234 67890</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </div>

            <div className="container">
                <Row>
                    <Col xs="6" md="3">
                        <Nav vertical>
                            <NavItem>
                                <p className = "reserved-text">© DoubleCars All Rights Reservered</p>
                            </NavItem>
                            
                        </Nav>
                    </Col>

                    <Col xs="6" md="2">
                        <Nav vertical>
                            <NavItem>
                                <NavLink className = "reserved-text" href="#">Legal Information</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>

                    <Col xs="6" md="2">
                        <Nav vertical>
                            <NavItem>
                                <NavLink href="#">Privacy Policy</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col xs="6" md="2">
                        <Nav vertical>
                            <NavItem>
                                <NavLink href="#">Terms and Conditions</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col xs="6" md="3">
                        <Nav vertical>
                        <NavItem>
                                <img className = "mr-2" src = {facebookicon} alt = "fb" width = "4%"/>
                                <img className = "mr-2" src = {instaicon} alt = "insta" width = "4%"/>
                                <img src = {twittericon} alt = "twitter" width = "4%"/>
                        </NavItem>
                            
                        </Nav>
                    </Col>
                </Row>
            </div>
        </div>
    );
  }
  
  export default Footer;
