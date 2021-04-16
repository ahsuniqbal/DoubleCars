import React,{useState} from 'react';
import '../styles/resetpassword.css'
import {Row, Col, Button,Input, Container, Label, FormGroup, Form} from 'reactstrap'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import DCWhiteLogo from '../../../../assets/DCWhiteLogo.svg'
import Eyepiece from '../../../../assets/eyepiece.png';
import Eye from '../../../../assets/eye.svg'
import {emailValidation} from '../../../../utils/Validation.jsx';
import '../styles/changepassword.css'


const ResetPassword = () => {
    const [passwordShown, setPasswordShown] = useState(false)
const [eyePiece,setEye]=useState(true)

    const history=useHistory()
   
    //const emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const togglePasswordVisiblity = () => {
        setPasswordShown('show');
        setEye(false)
      };
       // hide passowrd on click of open-eye icon
    const toggleEyeVisiblity= () => {
        setPasswordShown('hide');
        setEye(true)
      };


    const handleLogin = (e) => {
        e.preventDefault();
        var password = document.getElementById('login-password').value
    
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
                                    Set a new password and the password must be 8 character long </Label>
                                </Col>
                            </Row>
                            <Form onSubmit={e => handleLogin(e)}>
                                
                            <div className='pass-wrapper'>
                                    <Input id="login-password" className = "login-password"  type={passwordShown=='show' ? "text" : "password"} placeholder= "New Password" required />
                                     { eyePiece ?<i onClick={togglePasswordVisiblity}><img src={Eyepiece}/></i>
                                   :<i onClick={toggleEyeVisiblity}><img src={Eye} className='password-eye'/></i>
                                   }
                                    
                                 </div>

                                 <div className='pass-wrapper'>
                                    <Input id="login-password" className = "login-password"  type={passwordShown=='show' ? "text" : "password"} placeholder= "Retype New Password" required />
                                     { eyePiece ?<i onClick={togglePasswordVisiblity}><img src={Eyepiece}/></i>
                                   :<i onClick={toggleEyeVisiblity}><img src={Eye} className='password-eye'/></i>
                                   }
                                    
                                 </div>
                               
                                <Row>
                                   <Col></Col>

                                    <Col md = "4" className = "text-right remember-login-column">
                                        <Button type="submit" color="primary" className="login-button-login"
                                        onClick={()=>history.push('/login')}>
                                       
                                         <span>Login now</span>
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