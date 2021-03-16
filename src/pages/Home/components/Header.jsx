import React,{ useState } from 'react';
import { Button, Label} from 'reactstrap';
import '../styles/Header.css';
import Cover from '../../../assets/LandingPageHeaderImage.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {useHistory} from 'react-router-dom'
import LoginSignupModal from '../../Authentication/LoginSignupModal/LoginSignupModal'
import Dashboard from '../../Dashboard/Components/Dashboard'
import {Route} from 'react-router-dom'

// import headerVideo from '../../../assets/header-mov.mkv';

const Header = () => {
    const history=useHistory()
    // const [loginModal, setLoginModal] = useState(false);
    // const loginToggle = () => setLoginModal(!loginModal);
    // const [signupModal, setSignupModal] = useState(false);
    // const signupToggle = () => setSignupModal(!signupModal);

    const [popupModal, setPopupModal] = useState(false);
    const popupToggle = () => setPopupModal(!popupModal);

    return(
        <div>
            <section className = "align-items-center header-section">
                
                    <div className = "row header-main">
                 
                            <div className = "col-12 col-md-5 col-sm-6 left-cover-section width-1050">
                                <div className='left-cover-header-div'>
                                    <h1 className = "cover-left-heading ml-3">
                                        Find the most desireable car
                                    </h1>
                                    <h5 className = "my-3 header-sub-head ml-3">
                                        Buy and sell cars with ease using our app!
                                    </h5>
                                    <div>
                                        <div className = "col-md-12" className = "">
                                            <Button className="ml-3 mt-4 download-button-cover" to="" onClick={()=>window.location.href='https://play.google.com/store/apps'}>Download App</Button>
                                            
                                
                                           {/* {!localStorage.getItem('userId') ?
                                           <>
                                           <Button size = "lg" block className = "ml-3 mt-4 download-button-cover" onClick={popupToggle}>Temporary Button</Button> 
                                            <LoginSignupModal isOpen={popupModal} toggle={popupToggle} />
                                            {/* <Button size = "lg" block className = "ml-3 mt-4 download-button-cover" onClick={loginToggle}>Temporary Button</Button> 
                                            <LoginModal isOpen={loginModal} toggle={loginToggle} /> */}

                                           {/* {!localStorage.getItem('userId') ? 
                                           <>
                                           <Button size = "lg" block className = "ml-3 mt-4 download-button-cover" onClick={popupToggle}>Temporary Button</Button> 
                                            <LoginSignupModal isOpen={popupModal} toggle={popupToggle} /> </>: null
                                        } */}
                                           
                                
                                        </div>
                                    </div>
                                </div>
                            </div>

                                <div className = "col-12 col-md-7 col-sm-6 right-side-cover-div " style={{padding: '0'}}>
<<<<<<< HEAD
                                    <LazyLoadImage src={Cover} effect='blur' className=' right-cover-section img-fluid'/>
=======
                                    <LazyLoadImage src={Cover} effect='blur' className=' right-cover-section' width="100%" />
>>>>>>> 171f02907e046695a4896e76a817ec88c9c96278
                                    <Label className = "header-right-car-label float-right">Toyota Supra</Label>
                                    {/* <video width="100%" controls autoPlay loop>
                                        <source src={headerVideo} type="video/mp4" />
                                    </video> */}
                                   
                                </div>
                          
                    </div>
                    
            </section>

            
    </div>
    )
}

export default Header;

// <section className = "d-flex align-items-center">
//                 <div className = "container-fluid">
//                     <div className = "row">
//                         <div className = "col-12">
//                             <Row>
//                                 <div className = "col-md-5 xs-6 sm-6 md-12 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column left-cover-section ">
//                                     <h1 className = "cover-left-heading ml-5">
//                                         Find the most desireable car
//                                     </h1>
//                                     <h5 className = "my-3 header-sub-head ml-5">
//                                         Buy and sell cars with ease using our app!
//                                     </h5>
//                                     <Row>
//                                         <Col md = "12" className = "">
//                                         <Button className="ml-5 mt-4 download-button-cover" to="">Download App</Button>
//                                         </Col>
//                                     </Row>
                                    
                                    
//                                 </div>

//                                 <div className = "col-lg-7  order-1 order-lg-2 right-cover-section">
//                                     {/* <img src = {Cover} alt = "Cover image" className = "img-fluid" width = "100%"/> */}
//                                 </div>
//                             </Row>
//                         </div>
//                     </div>
//                 </div>
//             </section>