import React from 'react';
import { login } from '../../../../config/LoginAuth';
import '../styles/Login.css'
import {Row, Col, Input, Button, Container, Label, FormGroup, Form} from 'reactstrap'
import { Link, NavLink } from "react-router-dom";

import DCWhiteLogo from '../../../../assets/DCWhiteLogo.svg'

const Login = (props) => {
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
                                <img  src = {DCWhiteLogo} alt = "Logo" className = "double-car-logo" width = "144px" height = "28px"/>
                            </Link>
                        </Col>

                        <Col xs = "12" md = "5" sm = "12" className = "right-side-column">
                            <Row>
                                <Col xs = "12" md = "12" className = "text-center">
                                    <h2 className = "login-now-head">Login now</h2>
                                    <Label className = "login-label">Si sine causa, nollem me ab eo ortum, tam egregios viros censes tantas.</Label>
                                </Col>
                            </Row>
                            <Form>
                                <Input id="login-email" className = "login-email" type="email" placeholder="Enter Email" required />

                                <Input id="login-password" className = "login-password" type="password" placeholder= "Enter password" required/>
                                <div id="error-label"></div>

                                <Row>
                                    <Col xs="6" md = "6" className = "remember-login-column">
                                        <FormGroup check>
                                            <Input className = "checkbox-input remember-check" type="checkbox" id="" name="remember"/>
                                            <Label check htmlFor="remember" className = "remember-label">Remember Details?</Label>
                                        </FormGroup>
                                    </Col>

                                    <Col xs="6" md = "6" className = "text-right remember-login-column">
                                        <Button type="submit" color="primary" className="login-button">Login</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="6" md = "6" className = "register-forgot-column">
                                        <Label className="not-register-label">Not Registered?</Label>
                                    </Col>

                                    <Col xs="6" md = "6" className = "text-right register-forgot-column">
                                        <Label className="forgot-label">Forgot Details?</Label>
                                        </Col>
                                </Row>
                                
                            </Form>

                            <h2 className = "or-label"><span>or continue with</span></h2>

                            <Row className = "justify-content-center">
                                <Col xs = "2" md = "2" className = "">
                                <div className="google-button">
                                    <span className=""></span>
                                </div>
                                </Col>

                                <Col xs = "2" md = "2">
                                <div className="facebook-button">
                                <span className=""></span>
                                </div>
                                </Col>
                            </Row>
                            
                           
                        </Col>
                    </Row>
                </Container>
           
        </div>
    );
}

export default Login;