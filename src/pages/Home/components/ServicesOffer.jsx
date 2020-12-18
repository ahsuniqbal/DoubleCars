import React from 'react';
import { Col, Row, Label, Button } from 'reactstrap';
import ServicesDemoImage from '../../../assets/ServicesDemoImage.png'
import '../styles/ServicesOffer.css'

const ServicesOffer = () => {
   
      
    return(
        <Row >
           <Col xs = "12" md = "5">
                <img src = {ServicesDemoImage} className = "img-fluid" alt = "demo Image"/>
           </Col>
           <Col xs = "12" md = "7">
                <h2>What services do we offer?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis, rutrum neque sit amet.</p>
                <ul className="">
                        <li className="nav-item">
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li className="nav-item">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li className="nav-item">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                       
                        
                       
                      
                    </ul> 
           </Col>

        </Row>
        
    )
  
}

export default ServicesOffer;