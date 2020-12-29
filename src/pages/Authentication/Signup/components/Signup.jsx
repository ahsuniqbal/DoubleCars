import React from 'react';
import { login } from '../../../../config/LoginAuth';
import '../styles/Signup.css'
import {Row, Col, Input, Button, Container, Label, FormGroup, Form} from 'reactstrap'
import { Link, NavLink } from "react-router-dom";

import DCLogo from '../../../../assets/DCNewlogo.svg'

const Signup = (props) => {
    const handleLogin = () => {
        login();
        props.history.push('/profile');
    }
    return(
        <div>
                <Container fluid = {true}>
                    <Row>
                        <Col xs = "12" md = "7" sm = "12" className = "login-left-image">
                            <Link to="/">
                                <img  src = {DCLogo} alt = "Logo" className = "double-car-logo" width = "144px" height = "28px"/>
                            </Link>
                        </Col>
                        
                        <Col xs = "12" md = "5" sm = "12" className = "right-side-column">
                            
                            <Row>
                                <Col xs = "12" md = "12" className = "text-center">
                                    <h2 className = "register-head">Register Account</h2>
                                    <Label className = "register-label">Si sine causa, nollem me ab eo ortum, tam egregios viros censes tantas.</Label>
                                </Col>
                            </Row>
                            <Form>
                            
                                <Row>
                                    <Col xs = "12" md = "6">
                                    <Input id="" className = "register-textfield" type="text" placeholder="First Name" required />

                                    </Col>
                                    <Col xs = "12" md = "6">
                                    <Input id="" className = "register-textfield" type="text" placeholder="last Name" required />

                                    </Col>
                                </Row>
                                <Input id="" className = "register-textfield" type="number" placeholder="Mobile Number" required />

                                <Input id="" className = "register-textfield" type="email" placeholder="Your Email" required />

                                <Input id="" className = "register-textfield" type="password" placeholder= "Create a password" required/>
                                <div id="error-label"></div>

                                <Row>
                                    <Col xs="6" md = "6" className = "terms-signup-column">
                                        <FormGroup check>
                                            <Input className = "checkbox-input remember-check" type="checkbox" id="" name="remember"/>
                                            <Label check htmlFor="remember" className = "remember-label">I agree with <span to = {''} className = "t-and-c">Terms & Conditions</span></Label>
                                        </FormGroup>
                                    </Col>

                                    <Col xs="6" md = "6" className = "text-right terms-signup-column">
                                        <Button type="submit" color="primary" className="signup-button">Sign Up</Button>
                                    </Col>
                                </Row>
                                
                                
                            </Form>

                            <h2 className = "or-label"><span>or</span></h2>

                            <Row>
                                <Col xs = "6" md = "6" className = "">
                                <div className="google-button text-center">
                                    <span className="google-icon"></span>
                                </div>
                                </Col>

                                <Col xs = "6" md = "6">
                                <div className="facebook-button">
                                <span className="fb-icon"></span>
                                </div>
                                </Col>
                            </Row>
                            
                           
                        </Col>
                    </Row>
                </Container>
           
        </div>
    );
}

export default Signup;