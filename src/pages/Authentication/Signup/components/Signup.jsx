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


const Signup = (props) => {
    const [loading,setLoading] = useState(false)
    const [passwordShown, setPasswordShown] = useState(false)
    const history=useHistory()

    const eye = <FontAwesomeIcon icon={faEyeSlash} />
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

    const handleSignUp = (e) => {
        e.preventDefault();
        var firstName = document.getElementById('firstName').value
        var lastName = document.getElementById('lastName').value
        var phNum = document.getElementById('phNum').value
        var email = document.getElementById('signup-email').value
        var password = document.getElementById('signup-password').value
        var obj = {
            firstName,lastName,phNum,email,password
        }
        setLoading(true)
        userSignUp(obj)
        .then(doc => {
            setLoading(false)
            if(doc.code === 1){
                localStorage.setItem('userId',doc.id)
                localStorage.setItem('userToken',doc.Token)
                props.history.push('/profile');
            }else{
                document.getElementById('error-label').textContent = doc.message
            }
        })
        .catch(e => {
            setLoading(false)
            console.log(e.message)
            document.getElementById('error-label').textContent = e.message
        })
        
    }
    return(
        <div>
                <Container fluid = {true}>
                    <Row>
                        <Col xs = "12" lg = "7" sm = "12" className = "signup-left-image">
                            <Link to="/">
                                <img  src = {DCWhiteLogo} alt = "Logo" className = "double-car-logo" width = "144px" height = "28px"/>
                            </Link>
                        </Col>
                        
                        <Col xs = "12" lg = "5" sm = "12" className = "signup-right-side-column">
                            
                            <Row>
                                <Col xs = "12" md = "12" className = "text-center">
                                    <h2 className = "register-head">Register Account</h2>
                                    <Label className = "register-label">Si sine causa, nollem me ab eo ortum, tam egregios viros censes tantas.</Label>
                                </Col>
                            </Row>
                            <Form onSubmit={e => handleSignUp(e)}>
                            
                                <Row>
                                    <Col xs = "12" md = "6" className='names'>
                                    <Input id="firstName" className = "register-textfield" type="text" placeholder="First Name" required />

                                    </Col>
                                    <Col xs = "12" md = "6" className='names'>
                                    <Input id="lastName" className = "register-textfield" type="text" placeholder="last Name" required />

                                    </Col>
                                </Row>
                                <Input id="phNum" className = "register-textfield" type="number" placeholder="Mobile Number" required />

                                <Input id="signup-email" className = "register-textfield" type="email" placeholder="Your Email" required />
                                <div className='pass-wrapper'>
                                    <Input id="signup-password" className = "register-textfield"  type={passwordShown ? "text" : "password"} placeholder= "Enter password" required />
                                    <i onClick={togglePasswordVisiblity}>{eye}</i>
                                 </div>
                                {/* <Input id="signup-password" className = "register-textfield" type="password" placeholder= "Create a password" required/> */}
                                <div id="error-label"></div>

                                <Row>
                                    <Col xs="6" md = "6" className = "terms-signup-column">
                                        <FormGroup check>
                                            <Label check  className = "remember-label">
                                            <Checkbox color="primary" />
                                            I agree with <span to = {''} className = "t-and-c">Terms & Conditions</span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col xs="6" md = "6" className = "text-right terms-signup-column">
                                        <Button type="submit" color="primary" className="signup-button">
                                        {loading && <span>Signing up....</span>}
                                        {!loading && <span>Sign Up</span>}
                                        </Button>
                                    </Col>
                                </Row>
                                
                                
                            </Form>

                            <h2 className = "or-label"><span>or</span></h2>

                            <div className='signup-icon'>
                                
                                <div className="google-signup-button ">
                                    <img src={googleIcon} className='google-icon'/>
                                    <span className="icon-text">Sigup with Google</span>
                                </div>
                               
                                <div className="facebook-signup-button">
                                    <img src={FbIcon} className='fb-icon'/>
                                <span className="icon-text">Signup with Facebook</span>
                                </div>
                                
                            </div>
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

export default Signup;