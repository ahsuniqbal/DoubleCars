import React from 'react';
import { Col, Row, Button, CustomInput } from 'reactstrap';
import '../styles/Lowercar.css'
import Image from '../../../assets/TopNewsDummyImage.png';
const LowerCar = () => {
   
      
    return(
       <div>
           <Row>
           <Col md='3' xs='12' className='lower-main'>
                    <img src={Image} className='img-fluid'/>
                    <p className='text'>Sedan</p>
               </Col>
               <Col md='3' xs='12' className='lower-main'>
                    <img src={Image} className='img-fluid'/>
                    <p className='text'>Suv</p>
               </Col>
               <Col md='3' xs='12' className='lower-main'>
                    <img src={Image} className='img-fluid'/>
                    <p className='text'>Sports Car</p>
               </Col>
               <Col md='3' xs='12' className='lower-main'>
                    <img src={Image} className='img-fluid'/>
                    <p className='text'>Hatchback</p>
               </Col>
           </Row>
       </div>
        
    )
  
}

export default LowerCar;