import React, { useState,useEffect} from 'react';
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


const Signup = (props) => {
    const [loading,setLoading] = useState(false)
    const [passwordShown, setPasswordShown] = useState(false)
    const [firstName,setFirstName]=useState('')
    const [lastName,setlastName]=useState('')
    const [password,setPassword]=useState('')
    const [phNum,setNumber]=useState('')
    const [email,setEmail]=useState('')
    // regex values
    const emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordRegex=/^[0-9a-zA-Z@!#$%^&*()_+?.,'"\|]{8,16}$/
    // const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    // const NumberRegex=/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/
    const hasNumber=/\d/
    const NumberRegex=/^\d+$/
    const userNameRegex=  /^[a-zA-Z]*$/
    const history=useHistory()

    // code to show passowrd on click of eye icon
    const eye = <FontAwesomeIcon icon={faEyeSlash} />
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

    //   handle singup
    const handleSignUp = (e) => {
        e.preventDefault();
        var obj = {
            firstName,lastName,phNum,email,password
        }
        userSignUp(obj).then(doc=>{
            console.log('eee',doc)
        })
        .catch(e=>{
            console.log(e.message)
        })
        console.log(obj)
        setLoading(true)
        document.getElementById('signup-error-label').textContent = ''
          // regex errors
          const checkEmailofQA=email.split('@')[1].split('.com')[0].split('').includes('.')
        if(email.split('@')[1].split('.com')[0].split('').includes('.')) {
            setLoading(false)
            document.getElementById('signup-error-label').textContent = 'invalid email'
            }        
         else if(NumberRegex.test(email.split('@')[0])){
            setLoading(false)
            document.getElementById('signup-error-label').textContent = 'invalid email'
          }
         else if(hasNumber.test(email.split('@')[1].split('.com')[0])){
            setLoading(false)
            document.getElementById('signup-error-label').textContent = 'invalid email'
          }
         else if (!emailRegex.test(email)){
            setLoading(false)
            document.getElementById('signup-error-label').textContent = 'invalid email'
         }
          else if (!userNameRegex.test(firstName+lastName)){
            document.getElementById('signup-error-label').textContent = 'username contain letters only'
            setLoading(false)
         }
         else if (!NumberRegex.test(phNum)){
            document.getElementById('signup-error-label').textContent = 'incorrect number'
            setLoading(false)
         }
        
         else if (!passwordRegex.test(password)){
            document.getElementById('signup-error-label').textContent = 'passowrd should contain 8-16 characters'
            setLoading(false)
         }
         else{
            userSignUp(obj)
            .then(doc => {
                console.log('ddd',doc)
                setLoading(false)
                if(doc.code === 1){
                    localStorage.setItem('userId',doc.id)
                    localStorage.setItem('userToken',doc.Token)
                    props.history.push('/profile');
                }
                else{
                     document.getElementById('signup-error-label').textContent = doc.message
                }
            })
            .catch(e => {
                setLoading(false)
                console.log(e.message)
                //  document.getElementById('signup-error-label').textContent = e.message
            })
         }
       
        
    }

    return(
        <div>
                <Container fluid = {true}>
                    <Row>
                        <Col xs = "12" lg = "7" sm = "12" className = "signup-left-image">
                            <Link to="/">
                                <img  src = {DCWhiteLogo} alt = "Logo" className = "logo-id-for-signup-login" width = "144px" height = "28px"/>
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
                                    <Input id="firstName" className = "signup-register-textfield" type="text" 
                                    placeholder="First Name"  
                                    value={firstName}
                                    onChange={(e)=>setFirstName(e.target.value)}
                                  required
                                    />

                                    </Col>
                                    <Col xs = "12" md = "6" className='last-name-col'>
                                    <Input id="lastName" className = "signup-register-textfield" type="text" 
                                    placeholder="Last Name"  
                                    value={lastName}
                                    onChange={(e)=>setlastName(e.target.value)}
                                    required
                                    />

                                    </Col>
                                </Row>
                                    <Input id="phNum" className = "signup-register-textfield" type="text" 
                                    placeholder="Mobile Number"  
                                    value={phNum}
                                    onChange={(e)=>setNumber(e.target.value)}
                                    required
                                    />

                                    <Input id="signup-email" className = "signup-register-textfield" type="text" 
                                    placeholder="Your Email"  
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required
                                    />
                                <div className='pass-wrapper'>
                                    <Input id="signup-password" className = "signup-register-textfield" 
                                     type={passwordShown ? "text" : "password"} placeholder= "Create a Password"  
                                     value={password}
                                     onChange={(e)=>setPassword(e.target.value)}
                                     required
                                     />
                                    <i onClick={togglePasswordVisiblity}><img src={Eyepiece}/></i>
                                 </div>
                                {/* <Input id="signup-password" className = "register-textfield" type="password" placeholder= "Create a password" required/> */}
                                <div id="signup-error-label"></div>

                                <Row>
                                    <Col xs="6" md = "7" className = "terms-signup-column">
                                        <FormGroup check className='t-c-checkbox-form-class'>
                                            <Label check  className = "remember-label">
                                            <Checkbox color="primary" style={{marginLeft:'-11px'}} />
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
                                    <img src={googleIcon} className='google-icon'/>
                                    <span className="icon-text">Sigup with Google</span>
                                </button>
                               
                                <button className="facebook-signup-button">
                                    <img src={FbIcon} className='fb-icon'/>
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

export default Signup;