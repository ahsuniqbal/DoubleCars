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
    const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    const NumberRegex=/^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/
    const userNameRegex=  /^[a-zA-Z0-9]+$/
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
        console.log(obj)
        setLoading(true)
        if(firstName=='' || lastName==''){
            setLoading(false)
            let getError=document.createElement('div')
            getError.innerHTML='fill all fields'
            getError.style.color='red'
            document.getElementById('signup-error-label').appendChild(getError)
            setTimeout(()=>getError.remove(),4000)
        }
          // regex errors
        else if (!emailRegex.test(email)){
            setLoading(false)
            let getError=document.createElement('div')
            getError.innerHTML='invalid email format'
            getError.style.color='red'
            document.getElementById('signup-error-label').appendChild(getError)
            setTimeout(()=>getError.remove(),4000)
         }
          else if (!userNameRegex.test(firstName+lastName)){
            setLoading(false)
            let getError=document.createElement('div')
            getError.innerHTML='username contains letters and number only'
            getError.style.color='red'
            document.getElementById('error-label').appendChild(getError)
            setTimeout(()=>getError.remove(),4000)
         }
         else if (!NumberRegex.test(phNum)){
            setLoading(false)
            let getError=document.createElement('div')
            getError.innerHTML='enter correct phone number'
            getError.style.color='red'
            document.getElementById('signup-error-label').appendChild(getError)
            setTimeout(()=>getError.remove(),4000)
         }
        
         else if (!passwordRegex.test(password)){
            setLoading(false)
            let getError=document.createElement('div')
            getError.innerHTML='password should contain 8 digits and upper lower case'
            getError.style.color='red'
            document.getElementById('signup-error-label').appendChild(getError)
            setTimeout(()=>getError.remove(),4000)
         }
         else{
            userSignUp(obj)
            .then(doc => {
                setLoading(false)
                if(doc.code === 1){
                    localStorage.setItem('userId',doc.id)
                    localStorage.setItem('userToken',doc.Token)
                    props.history.push('/profile');
                }
               
                else{
                    // document.getElementById('error-label').textContent = doc.message (prev code)
                    let getError=document.createElement('div')
                    getError.innerHTML=doc.message
                    getError.style.color='red'
                    document.getElementById('signup-error-label').appendChild(getError)
                    setTimeout(()=>getError.remove(),5000)
                }
            })
            .catch(e => {
                setLoading(false)
                console.log(e.message)
                let getError=document.createElement('div')
                getError.innerHTML='Fill all fields'
                getError.style.color='red'
                document.getElementById('signup-error-label').appendChild(getError)
                setTimeout(()=>getError.remove(),5000)
                // document.getElementById('error-label').textContent = e.message
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
                                    <Col xs = "12" md = "6" className='names'>
                                    <Input id="firstName" className = "signup-register-textfield" type="text" 
                                    placeholder="First Name"  
                                    value={firstName}
                                    onChange={(e)=>setFirstName(e.target.value)}
                                  
                                    />

                                    </Col>
                                    <Col xs = "12" md = "6" className='names'>
                                    <Input id="lastName" className = "signup-register-textfield" type="text" 
                                    placeholder="Last Name"  
                                    value={lastName}
                                    onChange={(e)=>setlastName(e.target.value)}
                                  
                                    />

                                    </Col>
                                </Row>
                                <Input id="phNum" className = "signup-register-textfield" type="text" 
                                placeholder="Mobile Number"  
                                value={phNum}
                                onChange={(e)=>setNumber(e.target.value)}
                               
                                />

                                <Input id="signup-email" className = "signup-register-textfield" type="text" 
                                placeholder="Your Email"  
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                />
                                <div className='pass-wrapper'>
                                    <Input id="signup-password" className = "signup-register-textfield" 
                                     type={passwordShown ? "text" : "password"} placeholder= "Create a Password"  
                                     value={password}
                                     onChange={(e)=>setPassword(e.target.value)}
                                     />
                                    <i onClick={togglePasswordVisiblity}><img src={Eyepiece}/></i>
                                 </div>
                                {/* <Input id="signup-password" className = "register-textfield" type="password" placeholder= "Create a password" required/> */}
                                <div id="signup-error-label"></div>

                                <Row>
                                    <Col xs="6" md = "8" className = "terms-signup-column">
                                        <FormGroup check className='t-c-checkbox-form-class'>
                                            <Label check  className = "remember-label">
                                            <Checkbox color="primary" style={{marginLeft:'-11px'}} />
                                                <span className='i-agree'>
                                                     I agree with <span to = {''} className = "t-and-c">Terms & Conditions</span>
                                                </span>
                                            </Label>
                                        </FormGroup>
                                    </Col>

                                    <Col xs="6" md = "4" className = "text-right terms-signup-column">
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
                                
                                <div className="google-signup-button ">
                                    <img src={googleIcon} className='google-icon'/>
                                    <span className="icon-text">Sigup with Google</span>
                                </div>
                               
                                <div className="facebook-signup-button">
                                    <img src={FbIcon} className='fb-icon'/>
                                <span className="icon-text">Signup with Facebook</span>
                                </div>
                                
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