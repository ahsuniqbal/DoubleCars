import React from 'react';
import { Col, Row, Label, CustomInput } from 'reactstrap';
import ServicesDemoImage from '../../../assets/ServicesDemoImage.png'
import '../styles/ServicesOffer.css';
import CheckIcon from '@material-ui/icons/Check';
const ServicesOffer = () => {
   
      
    return(
        <Row >
           <Col xs = "12" md = "6" className='service-col'>
                <img src = {ServicesDemoImage} className = "img-fluid" alt = "demo Image"/>
           </Col>
           <Col xs = "12" md = "6" className='service-col'>
                <h2 className='service-head'>What services do we offer?</h2>
                <p className='service-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis, rutrum neque sit amet.</p>
                <ul className="">
                    <div>
                        <CheckIcon className='check'/>
                        <Label><p className="nav-Item">Lorem ipsum dolor sit amet consectetur.</p></Label>
                    </div>
                    <div>
                        <CheckIcon className='check'/>
                        <Label><p className="nav-Item">Lorem ipsum dolor sit amet consectetur.</p></Label>
                    </div>
                    <div>
                        <CheckIcon className='check'/>
                        <Label><p className="nav-Item">Lorem ipsum dolor sit amet consectetur.</p></Label>
                    </div>
              
                </ul> 
           </Col>

        </Row>
        
    )
  
}

export default ServicesOffer;