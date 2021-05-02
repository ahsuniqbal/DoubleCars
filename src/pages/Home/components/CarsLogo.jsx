
import React from 'react';
import {Card, Col,Row, CardBody, CardFooter} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/CarsLogo.css';


// New logos
import subaru from '../../../assets/logos/subaru-logo.png';
import mitsubishi from '../../../assets/logos/mitsubishi-logo.png'
import volkswagen from '../../../assets/logos/volkswagen-logo.png'
import ford from '../../../assets/logos/ford-logo.png'
import toyota from '../../../assets/logos/toyota-logo.png'
import chevrolet from '../../../assets/logos/chevrolet-logo.png'
import honda from '../../../assets/logos/honda-logo.png'
import bmw from '../../../assets/logos/bmw-logo.png'
import mercedes from '../../../assets/logos/mercedes-logo.png'
import audi from '../../../assets/logos/audi-logo.png'
import lexus from '../../../assets/logos/lexus-logo.png'
import acura from '../../../assets/logos/acura-logo.png'
import nissan from '../../../assets/logos/nissan-logo.png'
import tesla from '../../../assets/logos/tesla-logo.png'
import dodge from '../../../assets/logos/dodge-logo.png'
import volvo from '../../../assets/logos/volvo-logo.png'
import porsche from '../../../assets/logos/porsche-logo.png'
import landrover from '../../../assets/logos/landrover-logo.png'



import { ChevronRight } from 'react-feather';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CarsLogo = () => { 
    const logos = [
        { img: subaru },
        { img: mitsubishi },
        { img: volkswagen },
        { img: ford },
        { img: toyota },
        { img: chevrolet },
        { img: honda },
        { img: bmw },
        { img: mercedes },
        { img: audi },
        { img: lexus },
        { img: acura },
        { img: nissan },
        { img: tesla },
        { img: dodge },
        { img: volvo },
        { img: porsche },
        { img: landrover },
    ]
    return(
           <div style={{padding:'5% 0%'}}>
               <Row className='popular-make' > 
                   <Col md='12' xs='12' className='card-main-head text-center'>
                       <h2 className='carslogo-head'>Popular Make</h2>
                       <p className='carslogo-text'>Download app and upload your car in few steps</p>
                   </Col>
                </Row>


                <Row className="popular-makes-logos">
                    {
                        logos.map((logo, index) => {
                            return <Col xs="12" sm="6" md="4" lg="2" className="my-3" key={index}>
                                <Card>
                                    <CardBody>
                                        <LazyLoadImage effect="blur" src={logo.img} className='img-fluid mx-auto'/>
                                    </CardBody>
                                    <CardFooter>
                                        <Link>5,485 Listings<ChevronRight color="#1C67CE" size={15} /></Link>
                                    </CardFooter>
                                </Card>
                            </Col>
                        })
                    }
                </Row>

                {/* <Row className = "logos-row">
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
                                <LazyLoadImage effect="blur" src={ford1} className='img-fluid mx-auto car-logo-homepage'/>
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
                                <LazyLoadImage effect="blur" src={honda1} className='img-fluid mx-auto car-logo-homepage'/>
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
                                <LazyLoadImage effect="blur" src={1} className='img-fluid mx-auto car-logo-homepage'/>
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
                </Row> */}
                
    
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