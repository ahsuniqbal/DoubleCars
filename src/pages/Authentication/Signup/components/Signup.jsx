import React, { useState} from 'react';
import '../styles/Signup.css'
import {Row, Col, Input, Button, Container, Label, FormGroup, Form} from 'reactstrap'
import { Link } from "react-router-dom";
import {SocialLogin, userSignUp} from '../../api/Post'
import DCWhiteLogo from '../../../../assets/DCWhiteLogo.svg'
import googleIcon from '../../../../assets//icons/google-icon.svg'
import FbIcon from '../../../../assets//icons/fb-icon.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from "react-router-dom";
import Eyepiece from '../../../../assets/eyepiece.png'
import Eye from '../../../../assets/eye.svg'
import { emailValidation, nameValidation, passwordValidation,mobileValidation } from '../../../../utils/Validation';
import SocialButton from '../../SocialLogin';


const Signup = (props) => {
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

    // function to validate number on keypress event
      const formatToPhone = (event) => {
        // if(isModifierKey(event)) {return;}
        const target = event.target;
        const input = target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
        const areaCode = input.substring(0,3);
        const middle = input.substring(3,6);
        const last = input.substring(6,10);
    
        if(input.length > 6){target.value = `(${areaCode})${middle}-${last}`;}
        else if(input.length > 3){target.value = `(${areaCode})${middle}`;}
        else if(input.length > 0){target.value = `(${areaCode}`;}

        document.getElementById('phNum-error-label').textContent = "";
        
    };


    // handle sign up
    const handleSignUp = (e) => {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phNum = document.getElementById('phNum').value;
        // const phNum = value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        

        if(nameValidation(firstName + lastName)) {
            // Name is okay
            document.getElementById('name-error-label').textContent = "";

            // if(Number.isInteger(parseInt(phNum)))
             if(mobileValidation(phNum)){
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

    const handleSocialLogin = (loginObj) => {
        SocialLogin(loginObj).then(doc => {
            console.log(doc)
            Promise.all([localStorage.setItem('userId', doc.ID),localStorage.setItem('userToken', doc.Token)]).then(doc => {
                props.history.push('/');
            })
            .catch(e => {
                alert(e.message)
            })
        }).catch(error => {
            alert(error)
        })
    }

    const FBLoginSuccess = (user) => {
        console.log(user.profile);

        const obj = {
            firstName: user.profile.firstName,
            lastName: user.profile.lastName,
            phNum: "",
            email: user.profile.email,
            password: "socialLoginPassword",
        }
        
        handleSocialLogin(obj);
    }

    const FBLoginFailure = (error) => {
        alert(error);
    }

    const GLoginSuccess = (user) => {
        console.log(user.profile);

        const obj = {
            firstName: user.profile.firstName,
            lastName: user.profile.lastName,
            phNum: "",
            email: user.profile.email,
            password: "socialLoginPassword",
        }

        handleSocialLogin(obj);
    }

    const GLoginFailure = (error) => {
        alert(error);
    }
 

    return(
        <div>
                <Container fluid = {true}>
                    <Row>
                        <Col xs = "12" lg = "7" sm = "12" className = "signup-left-image">
                            <Link to="/">
                                <img loading="lazy"  src = {DCWhiteLogo} alt = "Logo" className = "logo-id-for-signup-login" width = "144px" height = "28px"/>
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
                                    <Col xs = "12" md = "6" className='first-name-col'>
                                        <Input id="firstName" className = "signup-register-textfield" type="text" placeholder="First Name *"required
                                            onKeyDown={() => document.getElementById('name-error-label').textContent = ""}
                                        />
                                        <div id="name-error-label" className="error-label"></div>
                                    </Col>
                                    <Col xs = "12" md = "6" className='last-name-col'>
                                        <Input id="lastName" className = "signup-register-textfield" type="text" placeholder="Last Name *" required
                                            onKeyDown={() => document.getElementById('name-error-label').textContent = ""}
                                        />
                                    </Col>
                                </Row>
                                    <Input id="phNum" className = "signup-register-textfield" type="text" placeholder="Mobile Number *"  
                                        onKeyDown={e => formatToPhone(e)}
                                        maxLength={13} required />
                                    <div id="phNum-error-label" className="error-label"></div>

                                    <Input id="signup-email" className = "signup-register-textfield" type="text" placeholder="Your Email *" required />
                                    <div id="email-error-label" className="error-label"></div>

                                    <div className='pass-wrapper'>
                                    <Input id="signup-password" className = "signup-register-textfield" 
                                     type={passwordShown=='show' ? "text" : "password"} placeholder= "Create a Password *" 
                                     required
                                     onKeyDown={() => document.getElementById('signup-error-label').textContent = ""}
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

                                <SocialButton
                                    provider='google'
                                    appId='864485035255-voh1e1n1jr71rmk1kjmhonnplgg6el5g.apps.googleusercontent.com'
                                    onLoginSuccess={GLoginSuccess}
                                    onLoginFailure={GLoginFailure}
                                    className="google-signup-button"
                                >
                                    <img src={googleIcon} alt = "loading..." className='google-icon'/>
                                    <span className="icon-text">Sigup with Google</span>
                                </SocialButton>

                                <SocialButton
                                    provider='facebook'
                                    appId='259221362572154'
                                    onLoginSuccess={FBLoginSuccess}
                                    onLoginFailure={FBLoginFailure}
                                    className="facebook-signup-button"
                                >
                                    <img alt = "loading..." src={FbIcon} className='fb-icon'/>
                                    <span className="icon-text">Signup with Facebook</span>
                                </SocialButton>
                                
                                {/* <button className="google-signup-button ">
                                    <img src={googleIcon} alt = "loading..." className='google-icon'/>
                                    <span className="icon-text">Sigup with Google</span>
                                </button> */}
                               
                                {/* <button className="facebook-signup-button">
                                    <img alt = "loading..." src={FbIcon} className='fb-icon'/>
                                <span className="icon-text">Signup with Facebook</span>
                                </button> */}
                                
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

export default Signup;