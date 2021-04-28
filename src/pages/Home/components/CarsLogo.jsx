
import React from 'react';
import {Card, Col,Row, CardBody, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/CarsLogo.css';

//Logo Imports
import corolla from '../../../assets/allDClogos/Toyota.png'
import ford from '../../../assets/allDClogos/Ford.png'
import mercedes from '../../../assets/allDClogos/MercedesLogo.png'
import honda from '../../../assets/allDClogos/HondaLogo.png'
import bmwnew from '../../../assets/allDClogos/BmwLogo.png'
import jeep from '../../../assets/allDClogos/JeepLogo.png'
import suzuki from '../../../assets/allDClogos/SuzukiLogo.png'
import mercedesbenz from '../../../assets/allDClogos/MercedesbenzLogo.png'
import audi from '../../../assets/allDClogos/AudiLogo.png'
import mitsubishi from '../../../assets/allDClogos/MitsubishiLogo.png'
import lexus from '../../../assets/allDClogos/LexusLogo.png'
import plus from '../../../assets/allDClogos/PlusLogo.png'
import nissan from '../../../assets/allDClogos/NissanLogo.png'
import tesla from '../../../assets/allDClogos/TeslaLogo.png'
import landrover from '../../../assets/allDClogos/LandRoverLogo.png'
import volvo from '../../../assets/allDClogos/VolvoLogo.png'
import dodge from '../../../assets/allDClogos/DodgeLogo.png' 
import porsche from '../../../assets/allDClogos/PorscheLogo.png'


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
                                <LazyLoadImage effect="blur" src={ford} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={mercedes} className='img-fluid mx-auto car-logo-homepage' />
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={honda} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={bmwnew} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={jeep} className='img-fluid mx-auto car-logo-homepage'/>
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
                                <LazyLoadImage effect="blur" src={suzuki} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={mercedesbenz} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={audi} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={mitsubishi} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={lexus} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={plus} className='img-fluid mx-auto car-logo-homepage'/>
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
                                <LazyLoadImage effect="blur" src={nissan} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={tesla} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={landrover} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={volvo} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={dodge} className='img-fluid mx-auto car-logo-homepage'/>
                            </div>
                            <Link to={"/product/"}>
                                <CardTitle className = "logo-listings ">5,485 Listings <ChevronRight color="#1C67CE" size={20} className = "mr-1"/></CardTitle>
                            </Link>
                        </Card>
                    </Col>    

                    <Col lg='2' md='4' sm='6' xs='12' className=''>
                        <Card className = "logo-card">
                            <div className = "logo-div">
                                <LazyLoadImage effect="blur" src={porsche} className='img-fluid mx-auto car-logo-homepage'/>
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