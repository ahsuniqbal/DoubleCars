
import React from 'react';
import {Card, Col,Row, CardBody, CardTitle} from 'reactstrap';
import dummyuser from '../../../assets/profile-chat.png';
import { Link } from 'react-router-dom';
import '../styles/CarsLogo.css';
import corolla from '../../../assets/Toyota.png'
import ford from '../../../assets/Ford.png'
import dodge from '../../../assets/dodge.png'
import honda from '../../../assets/Honda.png'
import bmw from '../../../assets/BMW.png'
import bmwnew from '../../../assets/bmwnewlogo.png'

import LandRover from '../../../assets/LandRover.png'
import Mercedes from '../../../assets/Mercedes.png'
import Audi from '../../../assets/Audi.png'
import Mitsubishi from '../../../assets/Mitsubishi.png'
import Lexus from '../../../assets/Lexus.png'
import Plus from '../../../assets/plus.png'

import Suzuki2 from '../../../assets/Suzuki2.png'
import Porsche from '../../../assets/Porsche.png'
import Nissan from '../../../assets/nissan.png'
import Tesla from '../../../assets/Tesla.png'
import volvo from '../../../assets/volvo.png'
import Horse from '../../../assets/horse.png'
import Subaru from '../../../assets/subaru.png';
import Volkswagen from '../../../assets/volkswagen.png';

import { ChevronRight } from 'react-feather';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CarsLogo = () => { 
    return(
           <div style={{padding:'5% 0%'}}>
               <Row className='popular-make' > 
                   <Col md='12' xs='12' className='card-main-head text-center'>
                       <h2 className='carslogo-head'>Popular Make</h2>
                       <p className='carslogo-text'>Download app and upload your car in few steps</p>
                   </Col>
                </Row>

                <Row className = "logos-row">
                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto d-block car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    
                </Row>

                <Row className = "logos-row">
                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    
                </Row>

                <Row className = "logos-row">
                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={corolla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    
                </Row>
                
    
                {/* <Row className='giving-margin'>
                        <Col lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <LazyLoadImage effect="blur" src={corolla} className='corolla-car'/>
                                </Card>
                        </Col>
                        <Col lg='2' md='4' sm='6'  xs='12' className='giving-padding'>
                                <Card className='cardslogo-main' >
                                    <LazyLoadImage effect="blur" src={ford} className='ford-car'/>
                                </Card>
                        </Col>
                       
                        <Col lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <LazyLoadImage  effect="blur" src={Subaru} className='subaru-car'/>
                                </Card>
                        </Col>
                        <Col lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <LazyLoadImage effect="blur" src={Volkswagen} className='volkswagen-car'/>
                                </Card>
                        </Col>
                        <Col lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <LazyLoadImage effect="blur" src={honda} className='honda-car'/>
                                </Card>
                        </Col>
                        <Col lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <LazyLoadImage onMouseOver= {bmw} onMouseOut= {bmw} effect="blur" src={bmwnew} className='bmw-car image-hover'/>
                                </Card>
                        </Col>
                       
                   </Row>
                    
                   <Row className='giving-margin'>
                      
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <LazyLoadImage effect="blur" src={Mercedes} className='mercedes-car'/>
                                </Card>
                        </Col>
                        <Col lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <LazyLoadImage effect="blur" src={Audi} className='mercedes-car'/>
                                </Card>
                        </Col>
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <LazyLoadImage effect="blur" src={Mitsubishi} className='mercedes-car'/>
                                </Card>
                        </Col>
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <LazyLoadImage effect="blur" src={Lexus} className='mercedes-car'/>
                                </Card>
                        </Col>
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <LazyLoadImage effect="blur" src={Plus} className='mercedes-car'/>
                                </Card>
                        </Col>
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main3'>
                                    <LazyLoadImage effect="blur" src={Suzuki2} className='mercedes-car'/>
                                </Card>
                        </Col>
                   </Row>

                   <Row className='giving-margin'>
                       
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <LazyLoadImage effect="blur" src={Nissan} className='subaru-car'/>
                                </Card>
                        </Col>
                        <Col lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <LazyLoadImage effect="blur" src={LandRover} className='subaru-car'/>
                                </Card>
                        </Col>
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <LazyLoadImage effect="blur" src={Porsche} className='subaru-car'/>
                                </Card>
                        </Col>
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <LazyLoadImage effect="blur" src={dodge} className='subaru-car'/>
                                </Card>
                        </Col>
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <LazyLoadImage effect="blur" src={Tesla} className='subaru-car'/>
                                </Card>
                        </Col>
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main3'>
                                    <LazyLoadImage effect="blur" src={volvo} className='ford-car'/>
                                </Card>
                        </Col>
                   </Row> */}
             
                  
                    
                
           </div> 
    )
  
}

export default CarsLogo;