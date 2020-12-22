import React from 'react';
import { login } from '../../../../config/LoginAuth';
import '../styles/Login.css'
import {Row, Col, Input, Button, Container, Label, FormGroup} from 'reactstrap'
import { Link, NavLink } from "react-router-dom";

import DCLogo from '../../../../assets/DCNewlogo.svg'

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
                            <img  src = {DCLogo} alt = "Logo" className = "double-car-logo" width = "144px" height = "28px"/>
                        </Link>
                        </Col>

                        <Col xs = "12" md = "5" sm = "12" className = "right-side-column">
                            <Row>
                                <Col xs = "12" md = "12" className = "text-center">
                                    <h2 className = "login-now-head">Login now</h2>
                                    <Label className = "login-label">Si sine causa, nollem me ab eo ortum, tam egregios viros censes tantas.</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs = "12" md = "6" className = "input-column">
                                    <Input type = "email" className = "login-email" placeholder = "Your Email Address"></Input>
                                    <Input type = "password" className = "login-password" placeholder = "Your Password"></Input>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col xs = "12" md = "3" className = "text-left input-column">
                                    <FormGroup check>
                                        <Input type="checkbox" id="" name="remember"/>
                                        <Label check htmlFor="remember">Remember Details?</Label>
                                    </FormGroup>
                                </Col>
                                <Col xs = "12" md = "3" className = "text-right">
                                    <Button color = "primary" size = "" className = "login-button">Login</Button>
                                </Col>
                            </Row> */}

                            {/* <Row>
                                <Col xs = "12" md = "3" className = "text-left input-column">
                                <NavLink className="" to={'/signup'}>Not Registered?</NavLink>
                                    </Col>
                                <Col xs = "12" md = "3" className = "text-right">
                                <NavLink className="" to={''}>Forgot Details?</NavLink>
                                </Col>
                            </Row> */}
                        </Col>
                    </Row>
                </Container>
           
        </div>
    );
}

export default Login;