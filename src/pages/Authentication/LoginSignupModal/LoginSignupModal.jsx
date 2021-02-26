import React,{ useState } from 'react';
import '../Login/styles/Login.css'
import '../Signup/styles/Signup.css'
import {Row, Col, Button,Input, Label, FormGroup, Form,Modal, ModalBody, ModalHeader} from 'reactstrap'
import {userLogin} from '../api/Post'
import {userSignUp} from '../api/Post'
import { useHistory } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import Eyepiece from '../../../assets/eyepiece.png';
import Eye from '../../../assets/eye.svg'
import {emailValidation, nameValidation, passwordValidation} from '../../../utils/Validation.jsx';
import ModalFooter from 'reactstrap/lib/ModalFooter';
import googleIcon from '../../../assets//icons/google-icon.svg';
import FbIcon from '../../../assets//icons/fb-icon.svg';

import closeModal from '../../../assets/icons/close-modal.svg';


const LoginSignupModal = (props) => {

    const [loading,setLoading] = useState(false)
    const [passwordShown, setPasswordShown] = useState(false)
    const [eyePiece,setEye]=useState(true)
    const [showSignUp,setSignupModal]=useState(false)
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
    //   signup function
      const handleSignUp = (e) => {
        e.preventDefault();  
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phNum = document.getElementById('phNum').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        

        if(nameValidation(firstName + lastName)) {
            // Name is okay
            document.getElementById('name-error-label').textContent = "";

            if(Number.isInteger(parseInt(phNum))) {
                // Mobile is okay
                document.getElementById('phNum-error-label').textContent = "";

                if(emailValidation(email)) {
                    // Mobile is wrong
                    document.getElementById('email-error-label').textContent = "";

                    if(passwordValidation(password)) {
                        // Password is okay
                        document.getElementById('signup-error-label').textContent = "";

                        var obj = {
                            firstName,lastName,phNum,
                            email,
                            password
                        }


                        console.log(obj)


                        setLoading(true)
                        userSignUp(obj)
                            .then(doc => {
                            setLoading(false)
                            if(doc.code === 1){
                                localStorage.setItem('userId',doc.id)
                                localStorage.setItem('userToken',doc.Token)
                                props.history.push('/');
                            }
                            else{
                                document.getElementById('signup-error-label').textContent = doc.message
                            }
                        })
                        .catch(e => {
                            setLoading(false)
                            console.log(e.message)
                            document.getElementById('signup-error-label').textContent = e.message
                        })
                    }
                    else {
                        // Password is wrong
                        document.getElementById('signup-error-label').textContent = "Password must be atleast eight characters long including atleast one letter and one number.";
                    }
                }
                else {
                    // Email wrong
                    document.getElementById('email-error-label').textContent = "Please enter a valid email address";
                }
            }
            else {
                // Mobile is wrong
                document.getElementById('phNum-error-label').textContent = "Please enter a valid mobile number";
            }
        }
        else {
            // Name is wrong
            document.getElementById('name-error-label').textContent = "Please enter a valid name";
        }
              
    }

    // login function
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
        <ModalHeader charCode={<img src={closeModal} />} {...props}></ModalHeader>
        
        {showSignUp ? 
        <>
             <ModalBody className = "text-left">
            <Row>
                <Col lg='12' xs = "12" sm = "12" className = "right-side-column">
                    <Row>
                        <Col xs = "12" md = "12" >
                        <h2 className = "register-head text-left">Signup</h2>
                        </Col>
                    </Row>
                    <Form onSubmit={e => handleSignUp(e)}>
                            
                                <Row>
                                    <Col xs = "12" md = "6" className='first-name-col'>
                                        <Input id="firstName" className = "signup-register-textfield" type="text" placeholder="First Name *"required />
                                        <div id="name-error-label" className="error-label"></div>
                                    </Col>
                                    <Col xs = "12" md = "6" className='last-name-col'>
                                        <Input id="lastName" className = "signup-register-textfield" type="text" placeholder="Last Name *" required />
                                    </Col>
                                </Row>
                                    <Input id="phNum" className = "signup-register-textfield" type="text" placeholder="Mobile Number *" required />
                                    <div id="phNum-error-label" className="error-label"></div>

                                    <Input id="signup-email" className = "signup-register-textfield" type="text" placeholder="Your Email *" required />
                                    <div id="email-error-label" className="error-label"></div>

                                    <div className='pass-wrapper'>
                                    <Input id="signup-password" className = "signup-register-textfield" 
                                     type={passwordShown=='show' ? "text" : "password"} placeholder= "Create a Password *" 
                                     required
                                     maxLength={16}
                                     />
                                   { eyePiece ?<i onClick={togglePasswordVisiblity}><img alt = "loading..." src={Eyepiece}/></i>
                                   :<i onClick={toggleEyeVisiblity}><img alt = "loading..." src={Eye} className='password-eye'/></i>
                                   }
                                 </div>
                                <div id="signup-error-label" className="error-label"></div>

                                <Row>
                                    <Col xs="6" md = "7" className = "terms-signup-column">
                                        <FormGroup check className='t-c-checkbox-form-class'>
                                            <Label check  className = "remember-label">
                                            <Checkbox color="primary" style={{marginLeft:'-11px'}} required />
                                                <span className='i-agree'>
                                                     I agree with <span to = {''} className = "t-and-c">Terms & Conditions</span>
                                                </span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col xs="6" md = "5" className = "text-right terms-signup-column">
                                        <Button type="submit" color="primary" className="register-button">
                                        {loading && <span>Signing up....</span>}
                                        {!loading && <span>Sign Up</span>}
                                        </Button>
                                    </Col>
                                </Row>
                                
                                <h2 className = "or-label"><span>or</span></h2>

                            <div className='signup-icon'>
                                
                                <button className="google-signup-button ">
                                    <img src={googleIcon} alt = "loading..." className='google-icon'/>
                                    <span className="icon-text">Sigup with Google</span>
                                </button>
                               
                                <button className="facebook-signup-button">
                                    <img alt = "loading..." src={FbIcon} className='fb-icon'/>
                                <span className="icon-text">Signup with Facebook</span>
                                </button>
                                
                            </div>
                            </Form>
                        </Col>
            </Row>

        </ModalBody>
        <ModalFooter className = "text-center">
        <Label className="text-center not-a-member"  onClick={()=>setSignupModal(false)}> Already a member <span style={{color:'#1C67CE',cursor:'pointer'}}>Sign in now</span></Label>
        </ModalFooter>
        </>
        :
        <> 
        <ModalBody className = "text-left">
            <Row>
                <Col lg='12' xs = "12" sm = "12" className = "right-side-column">
                    <Row>
                        <Col xs = "12" md = "12" >
                            <h2 className = "login-now-head text-left">Login</h2>
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
                                    onClick={()=>setSignupModal(true)}
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

                            {/* <div className='bottom'>
                                <hr />
                                <span>Not a member? <Label className='signup-label' >Sign up now</Label></span>
                            </div> */}
                        </Col>
            </Row>
        </ModalBody>

        <ModalFooter>
            <Label className="text-center not-a-member" onClick={()=>setSignupModal(true)}>Not a member <span style={{color:'#1C67CE',cursor:'pointer'}}>Sign up now</span></Label>
        </ModalFooter> </>}
        
        
    </Modal>
   
    )
}

export default LoginSignupModal;