import React,{ useState ,useEffect} from 'react';
import '../styles/Login.css'
import {Row, Col, Button,Input, Container, Label, FormGroup, Form} from 'reactstrap'
import { Link } from "react-router-dom";
import {userLogin} from '../../api/Post'
import { useHistory } from "react-router-dom";
import DCWhiteLogo from '../../../../assets/DCWhiteLogo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Checkbox from '@material-ui/core/Checkbox';
import Eyepiece from '../../../../assets/eyepiece.png'

const Login = (props) => {
    const [loading,setLoading] = useState(false)
    const [passwordShown, setPasswordShown] = useState(false)
    const eye = <FontAwesomeIcon icon={faEyeSlash} />
    const history=useHistory()
    
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

    const handleLogin = (e) => {
        e.preventDefault();
        var email = document.getElementById('login-email').value
        var password = document.getElementById('login-password').value
        var obj = {
            email,password
        }
        setLoading(true)
        userLogin(obj)
        .then(doc => {
            console.log('login',doc)
            setLoading(false)
            if(doc.ID !== -1){
                console.log("log")
                localStorage.setItem('userId',doc.ID)
                localStorage.setItem('userToken',doc.Token)
                props.history.push('/profile');
            }else{
                console.log("not")
                document.getElementById('error-label').textContent = doc.Message
                document.getElementById('error-label').style.color = "red"
            }
        })
        .catch(e => {
            setLoading(false)
            console.log(e.message)
            document.getElementById('error-label').textContent = e.message
            document.getElementById('error-label').style.color = "red"
        })
        
    }
   
    return(
        <div>
                <Container fluid = {true}>
                    <Row  className='login-main'>
                        <Col lg='7' xs = "12"  sm = "12" className = "login-left-image">
                            <Link to="/">
                                <img  src = {DCWhiteLogo} alt = "Logo" className = "logo-id-for-signup-login" width = "144px" height = "28px"/>
                            </Link>
                        </Col>

                        <Col lg='5' xs = "12" sm = "12" className = "right-side-column">
                            <Row>
                                <Col xs = "12" md = "12" className = "text-center">
                                    <h2 className = "login-now-head">Login now</h2>
                                    <Label className = "login-label">Si sine causa, nollem me ab eo ortum, tam egregios viros censes tantas.</Label>
                                </Col>
                            </Row>
                            <Form onSubmit={e => handleLogin(e)}>
                                
                                <Input id="login-email" onChange={e => document.getElementById('error-label').textContent = ""} className = "login-email" type="email" placeholder="Your Email Address" required />
                                <div className='pass-wrapper'>
                                    <Input id="login-password" onChange={e => document.getElementById('error-label').textContent = ""} className = "login-password"  type={passwordShown ? "text" : "password"} placeholder= "Your Password" required />
                                    <i onClick={togglePasswordVisiblity}><img src={Eyepiece}/></i>
                                    
                                 </div>
                                <div id="error-label"></div>

                                <Row>
                                    <Col xs="6" md = "6" className = "remember-login-column">
                                    <FormGroup check>
                                        <Label check  className = "remember-label">
                                        <Checkbox color="primary" style={{marginLeft:'5px'}} />
                                        Remember Details?
                                        </Label>
                                    </FormGroup>
                                        {/* <FormGroup >
                                            <Checkbox color="primary" />
                                            <Label check htmlFor="remember" className = "remember-label">Remember Details?</Label>
                                        </FormGroup> */}
                                    </Col>

                                    <Col xs="6" md = "6" className = "text-right remember-login-column">
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

                            <h2 className = "or-label"><span>or continue with</span></h2>

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
                </Container>
               
        </div>
    );
}

export default Login;