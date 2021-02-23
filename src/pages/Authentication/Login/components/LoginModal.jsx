import React,{ useState } from 'react';
import '../styles/Login.css'
import {Row, Col, Button,Input, Label, FormGroup, Form,Modal, ModalBody, ModalHeader} from 'reactstrap'
import {userLogin} from '../../api/Post'
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Checkbox from '@material-ui/core/Checkbox';
import Eyepiece from '../../../../assets/eyepiece.png';
import Eye from '../../../../assets/eye.svg'
import {emailValidation} from '../../../../utils/Validation.jsx';

const LoginModal = (props) => {
    const [loading,setLoading] = useState(false)
    const [passwordShown, setPasswordShown] = useState(false)
    const [eyePiece,setEye]=useState(true)
    const emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const eye = <FontAwesomeIcon icon={faEyeSlash} />
    const history=useHistory()
    
    //show passowrd on click of closed-eye icon
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
        var email = document.getElementById('login-email').value
        var password = document.getElementById('login-password').value

        if(emailValidation(email)) {
            // Email is wrong
            document.getElementById('email-error').textContent = "";

            var obj = {
                email,password
            }

            setLoading(true);

            userLogin(obj).then(doc => {
                setLoading(false);
                if(doc.ID !== -1) {
                    localStorage.setItem('userId',doc.ID)
                    localStorage.setItem('userToken',doc.Token)
                    Promise.all([localStorage.setItem('userId',doc.ID),localStorage.setItem('userToken',doc.Token)])
                    .then(doc => {
                        props.history.push('/');
                    })
                    .catch(e => {
                        console.log(e.message)
                    })
                    
                    
                }
                else {
                    document.getElementById("error-label").textContent = doc.Message
                }
            }).catch(error => {
                document.getElementById("error-label").textContent = error.message;
            })
        }
        else {
            // Email is wrong
            document.getElementById('email-error').textContent = "Email is badly formatted. Please enter a valid email address";
        }   
    }
   
    return(
       
        <Modal {...props} className = "" size = "lg"  centered>
        <ModalHeader {...props} charCode="X" >
        </ModalHeader>

        <ModalBody>
            
      <Row>
      <Col lg='12' xs = "12" sm = "12" className = "right-side-column">
                            <Row>
                                <Col xs = "12" md = "12" className = "text-center">
                                    <h2 className = "login-now-head">Login now</h2>
                                    <Label className = "login-label">Si sine causa, nollem me ab eo ortum, tam egregios viros censes tantas.</Label>
                                </Col>
                            </Row>
                            <Form onSubmit={e => handleLogin(e)}>
                                
                                <Input id="login-email" className = "login-email" type="text" placeholder="Your Email Address" required />
                                <div id="email-error" className="error"></div>

                                <div className='pass-wrapper'>
                                    <Input id="login-password" className = "login-password"  type={passwordShown=='show' ? "text" : "password"} placeholder= "Your Password" required />
                                     { eyePiece ?<i onClick={togglePasswordVisiblity}><img src={Eyepiece}/></i>
                                   :<i onClick={toggleEyeVisiblity}><img src={Eye} className='password-eye'/></i>
                                   }
                                    
                                 </div>
                                <div id="error-label" className="error"></div>

                                <Row>
                                    <Col md = "8" className = "remember-login-column">
                                    <FormGroup check>
                                        <Label check  className = "remember-label">
                                        <Checkbox color="primary" className='login-checkbox' />
                                            <span>Remember Details?</span>
                                        </Label>
                                    </FormGroup>
                                        {/* <FormGroup >
                                            <Checkbox color="primary" />
                                            <Label check htmlFor="remember" className = "remember-label">Remember Details?</Label>
                                        </FormGroup> */}
                                    </Col>

                                    <Col md = "4" className = "text-right remember-login-column">
                                        <Button type="submit" color="primary" className="login-button-login">
                                        {loading && <span>Logging in...</span>}
                                        {!loading && <span>Login</span>}
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="6" md = "6" className = "register-forgot-column">
                                        <Label className="not-register-label"
                                         onClick={()=>history.push('/signup')}
                                        >Not Registered?</Label>
                                    </Col>

                                    <Col xs="6" md = "6" className = "text-right register-forgot-column">
                                        <Label className="forgot-label">Forgot Details?</Label>
                                    </Col>
                                </Row>
                                
                            </Form>

                            <h2 className = "login-or-label"><span>or continue with</span></h2>

                            <div className = "icons">
                                <div className="google-button">
                                    <span className=""></span>
                                </div>
                                <div className="facebook-button">
                                    <span className=""></span>
                                </div>
                            </div>

                            <div className='bottom'>
                                <hr />
                                <span>Not a member? <Label className='signup-label'  onClick={()=>history.push('/signup')}>Sign up now</Label></span>
                            </div>
                        </Col>
      </Row>

        </ModalBody>

        
    </Modal>
   
    )
}

export default LoginModal;