import React from 'react';
import { login } from '../../../../config/LoginAuth';
import '../styles/Login.css'
import {Row, Col, Input, Button, NavLink, Container, Label} from 'reactstrap'

const Login = (props) => {
    const handleLogin = () => {
        login();
        props.history.push('/profile');
    }
    return(
        <div>
                <Container fluid = {true}>
                    <Row>
                        <Col xs = "12" md = "7" sm = "12" className = "login-left-image"></Col>
                        <Col xs = "12" md = "5" sm = "12" className = "right-side-column text-center">
                            <h2 className = "login-now-head">Login now</h2>
                            <Label className = "login-label">Si sine causa, nollem me ab eo ortum, tam egregios viros censes tantas.</Label>
                            <Input type = "email" className = "login-email" placeholder = "Your Email Address"></Input>
                            <Input type = "password" className = "login-password" placeholder = "Your Password"></Input>
                        </Col>
                    </Row>
                </Container>
           
        </div>
    );
}

export default Login;