import React from 'react';
import { Col, Row, Button, Container } from 'reactstrap';
import '../styles/SellCar.css';
import GooglePlayImg from '../../../assets/GooglePlayButton.png'
import Mobile from '../../../assets/mobile Image.png'
import Upload from '../../../assets/upload.png'
import Chat from '../../../assets/message-square.png'
import Checkbox from '../../../assets/check-square.png'
import { Link } from 'react-router-dom';

const SellCar = () => {
   
      
    return(
         <div className='main'>

            <Row className='blue-bg'>
                <Col xs="12">
                    <Container>

                    <Row>
                        <Col xs={12} sm={12} md={8} >
                            <div className='app-container'>
                                <h2 className='blue-head mb-3'>
                                Sell your car quickly<br id="break" /> Get the app now
                                </h2>
                                <p className='blue-text'> 
                                Download the app now to access a wide range of features to sell your car faster. Dealerships, private sellers, or 1st time selling. We got you covered.

                                </p>
                                {/* <button className='google-play '> */}
                                    <div id="app-buttons">
                                        <Link to='https://play.google.com/store/apps'>
                                            <img src={GooglePlayImg} alt='get it on google play' className='google-play '/>
                                        </Link>
                                        {/* </button> */}
                                        <Link to = {'/about/'}>
                                            <Button outline className='learn-button '>iOS Coming Soon</Button>
                                        </Link>
                                    </div>
                                
                            </div>
                        </Col>
                        <Col md={4} xs={12} sm={12}>
                            <img src={Mobile} className='img-fluid mobile-img'/>
                        </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            
            <Row className='white-bg'>
                <Col xs="12">
                    <Container>
                        <Row>
                        <Col md={8} className = "sell-car-column" >
                            <div className=''>
                                <div className='row d-flex'>
                                    <div className='col-lg-3 md-12 px-0'>
                                        <div className='white-main'>
                                            <div className='d-flex'>
                                                <img src={Upload} className='white-section-icon'/>
                                                <h2 className='white-head ml-5'>Upload Car</h2>
                                            </div>
                                            <p className='white-text pt-2'>Download the app and upload your car in few steps</p>
                                        </div>
                                    </div>
                                    <div className = "vertical-line invisible md-visible"></div>
                                    <div className='col-lg-3 md-12 px-0'>
                                        <div  className='white-main'>
                                            <div className='d-flex'>
                                                <img src={Chat} className='white-section-icon' style={{marginTop:'3px'}}/>
                                                <h2 className='white-head  ml-5'>Get Leads</h2>
                                            </div>
                                            <p className='white-text pt-2'>Get original leads and keep track on your car's stats</p>
                                        </div>
                                    </div>
                                    <div className = "vertical-line invisible md-visible"></div>
                                    <div className='col-lg-3 md-12 px-0'>
                                        <div className='white-main'>
                                            <div className='d-flex'>
                                                <img src={Checkbox} className='white-section-icon'/>
                                                <h2  className='white-head  ml-5'>Sell Car</h2>
                                            </div>
                                            <p className='white-text pt-2'>Negotiate with the seller and sell your car!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="mb-5" >
                            {/* <img src={Mobile} className='mobile-img'/> */}
                        </Col>
                        {/* <img src={Mobile} className='mobile-img'/> */}
                        
                        </Row>
                
                    </Container>
                </Col>
            </Row>
            
            
        </div>
   
        
    )
  
}

export default SellCar;
