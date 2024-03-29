import React, { useState } from 'react';
import '../styles/resetpassword.css'
import {Row, Col, Button,Input, Container, Label, FormGroup, Form} from 'reactstrap'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import DCWhiteLogo from '../../../../assets/DCWhiteLogo.svg'


import {emailValidation} from '../../../../utils/Validation.jsx';
import { SendEmailForgotPwd } from '../../api/Post';


const ResetPassword = () => {

    const [loading, setLoading] = useState(false);
    
    const history=useHistory()
   
    //const emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  

    const handleLogin = (e) => {
        e.preventDefault();
        var email = document.getElementById('login-email').value

        setLoading(true);
      

        if(emailValidation(email)) {
            // Email is wrong
            document.getElementById('email-error').textContent = "";

            var obj = {
                email
            }


            SendEmailForgotPwd(obj).then(doc => {
                setLoading(false);
                if(doc.code === 1) {
                    document.getElementById('email-error').textContent = "An email has been sent to you with password reset instructions.";
                }
                else {
                    document.getElementById("email-error").textContent = doc.message
                }
            }).catch(error => {
                setLoading(false);
                document.getElementById("email-error").textContent = error.message;
            })
        }
        else {
            setLoading(false);
            // Email is wrong
            document.getElementById('email-error').textContent = "Email is badly formatted. Please enter a valid email address";
        }
        
   
    }


    
   
    return(
        <div>
                <Container fluid = {true}>
                    <Row  className='login-main'>
                        <Col lg='7' xs = "12"  sm = "12" className = "login-left-image">
                            <Link to="/">
                                <img  loading="lazy" src = {DCWhiteLogo} alt = "Logo" className = "logo-id-for-signup-login" width = "144px" height = "28px"/>
                            </Link>
                        </Col>

                        <Col lg='5' xs = "12" sm = "12" className = "right-side-column">
                            <Row>
                                <Col xs = "12" md = "12" className = "text-center">
                                    <h2 className = "login-now-head">Reset Password</h2>
                                    <Label className = "login-label">
                                    Please Enter you email and we will send you a link to reset password. </Label>
                                </Col>
                            </Row>
                            <Form onSubmit={e => handleLogin(e)}>
                                
                                <Input id="login-email" className = "login-email" type="text" placeholder="Your Email Address" required />
                                <div id="email-error" className="error text-success"></div>


                                <Row>
                                    <Col md = "8" className = "remember-login-column">
                                    
                                        <Label className="forgot-label" style={{marginTop: '10px'}}
                                        onClick={()=>history.push('/login')}>Back to login</Label>
                                        
                                    </Col>

                                    <Col md = "4" className = "text-right remember-login-column">
                                        <Button type="submit" color="primary" className="login-button-login" disabled={loading}>
                                       
                                         <span>{loading ? "Loading..." : "Submit"}</span>
                                        </Button>
                                    </Col>
                                </Row>
                                
                                
                            </Form>

                          
                            
                        </Col>
                    </Row>
                </Container>
               
        </div>
    );
}

export default ResetPassword;