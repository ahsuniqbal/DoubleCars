
import React from 'react';
import {Card, CardImg, CardText, CardBody,  CardTitle, CardSubtitle, Col,Row} from 'reactstrap';
import '../styles/CarsLogo.css';
import corolla from '../../../assets/Toyota.png'
import ford from '../../../assets/Ford.png'
import tesla from '../../../assets/Tesla.png'
import honda from '../../../assets/Honda.png'
import bmw from '../../../assets/BMW.png'
import jeep from '../../../assets/Jeep.png'

import Suzuki from '../../../assets/Suzuki.png'
import Mercedes from '../../../assets/Mercedes.png'
import Audi from '../../../assets/Audi.png'
import Mitsubishi from '../../../assets/Mitsubishi.png'
import Lexus from '../../../assets/Lexus.png'
import Plus from '../../../assets/plus.png'

import Suzuki2 from '../../../assets/Suzuki2.png'
import MercedesBenz from '../../../assets/mercedesBenz.png'
import Nissan from '../../../assets/nissan.png'
import Jaguar from '../../../assets/jaguar.png'
import Lexus2 from '../../../assets/Lexus-logo 2.png'
import Horse from '../../../assets/horse.png'




const CarsLogo = () => { 
    return(
           <div style={{padding:'5% 0%'}}>
               <Row className='popular-make'> 
                   <Col md='12' xs='12' className='card-main-head text-center'>
                       <h2 className='carslogo-head'>Popular Make</h2>
                       <p className='carslogo-text'>Download app and upload your car in few steps</p>
                   </Col>
                </Row>
    
                <Row className='giving-margin'>
                        <Col lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <CardImg src={corolla} className='corolla-car'/>
                                </Card>
                        </Col>
                        <Col lg='2' md='4' sm='6'  xs='12' className='giving-padding'>
                                <Card className='cardslogo-main' >
                                    <CardImg src={ford} className='ford-car'/>
                                </Card>
                        </Col>
                        <Col lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <CardImg src={tesla} className='tesla-car'/>
                                </Card>
                        </Col>
                        <Col lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <CardImg src={honda} className='honda-car'/>
                                </Card>
                        </Col>
                        <Col lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <CardImg src={bmw} className='bmw-car'/>
                                </Card>
                        </Col>
                        <Col lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <CardImg src={jeep} className='jeep-car'/>
                                </Card>
                        </Col>
                   </Row>
                    <br/>
                   <Row className='giving-margin'>
                        <Col lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <CardImg src={Suzuki} className='suzuki-car'/>
                                </Card>
                        </Col>
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <CardImg src={Mercedes} className='mercedes-car'/>
                                </Card>
                        </Col>
                        <Col lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <CardImg src={Audi} className='audi-car'/>
                                </Card>
                        </Col>
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <CardImg src={Mitsubishi} className='mitsubishi-car'/>
                                </Card>
                        </Col>
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <CardImg src={Lexus} className='lexus-car'/>
                                </Card>
                        </Col>
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <CardImg src={Plus} className='plus-car'/>
                                </Card>
                        </Col>
                   </Row>
                   <br/>
                   <Row className='giving-margin'>
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <CardImg src={Suzuki2} className='suzuki2-car'/>
                                </Card>
                        </Col>
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <CardImg src={MercedesBenz} className='mercedesbenz-car'/>
                                </Card>
                        </Col>
                        <Col lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <CardImg src={Nissan} className='nissan-car'/>
                                </Card>
                        </Col>
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <CardImg src={Jaguar} className='jaguar-car'/>
                                </Card>
                        </Col>
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <CardImg src={Lexus2} className='lexus2-car'/>
                                </Card>
                        </Col>
                        <Col  lg='2' md='4' sm='6' xs='12' className='giving-padding'>
                                <Card className='cardslogo-main'>
                                    <CardImg src={Horse} className='horse-car'/>
                                </Card>
                        </Col>
                   </Row> 
                    
                
           </div> 
    )
  
}

export default CarsLogo;