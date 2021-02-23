import React, { useState} from 'react';
import '../styles/Signup.css'
import {Row, Col, Input, Button, Container, Label, FormGroup, Form} from 'reactstrap'
import { Link } from "react-router-dom";
import {userSignUp} from '../../api/Post'
import DCWhiteLogo from '../../../../assets/DCWhiteLogo.svg'
import googleIcon from '../../../../assets//icons/google-icon.svg'
import FbIcon from '../../../../assets//icons/fb-icon.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from "react-router-dom";
import Eyepiece from '../../../../assets/eyepiece.png'
import Eye from '../../../../assets/eye.svg'
import { emailValidation, nameValidation, passwordValidation } from '../../../../utils/Validation';


const SignupModal = (props) => {
    const [loading,setLoading] = useState(false)
    const [passwordShown, setPasswordShown] = useState(false)
    const [eyePiece,setEye]=useState(true)
    
    const history=useHistory()

    //show passowrd on click of closed-eye icon
    const eye = <FontAwesomeIcon icon={faEyeSlash} />
    const togglePasswordVisiblity = () => {
        setPasswordShown('show');
        setEye(false)
      };
       // hide passowrd on click of open-eye icon
    const toggleEyeVisiblity= () => {
        setPasswordShown('hide');
        setEye(true)
      };
    //   handle singup

    const regex = (obj) => {
        //yahan per sara regex kaam krna hai. whatever the fuck it is, it will goes here.
        var flag = true
        //logic goes here
        // if any regex gets failed the flag value will be false and will get return with a msg.
        return flag
    } 

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


    return(
        <div>
                <Container fluid = {true}>
                    <Row>
                        <Col xs = "12" lg = "12" sm = "12" className = "signup-right-side-column">
                            <Row>
                                <Col xs = "12" md = "12" className = "text-center">
                                    <h2 className = "register-head">Register Account</h2>
                                    <Label className = "register-label">Si sine causa, nollem me ab eo ortum, tam egregios viros censes tantas.</Label>
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

                                {/* <Row >
                                
                                <Col md='6' sm='6' className="google-signup-button ">
                                    <img src={googleIcon} className='google-icon'/>
                                    <span className="icon-text">Sigup with Google</span>
                                </Col>
                               
                                <Col md='6' sm='6' className="facebook-signup-button">
                                    <img src={FbIcon} className='fb-icon'/>
                                    <span className="icon-text">Signup with Facebook</span>
                                </Col>
                                
                            </Row> */}
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

                            
                            <div className='signup-bottom'>
                                <hr />
                                <span>Already a member? <Label className='bottom-label' onClick={()=>history.push('/login')}>Login</Label></span>
                            </div>
                           
                        </Col>
                    </Row>
                </Container>
           
        </div>
    );
}

export default SignupModal;