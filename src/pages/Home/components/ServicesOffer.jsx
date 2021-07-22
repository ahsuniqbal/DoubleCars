import React from 'react';
import { Col, Row, Label,Button, CustomInput } from 'reactstrap';
import ServicesDemoImage from '../../../assets/ServicesDemoImage.png'
import '../styles/ServicesOffer.css';
import CheckIcon from '@material-ui/icons/Check';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Link, NavLink } from "react-router-dom";
const ServicesOffer = () => {
    // const bodys = document.querySelector('#root').scrollTo(0, 0);

    // body.scrollIntoView({
    //     behavior: 'smooth'
    // }, 500)
      
    return(
        
        <Row >
           <Col xs = "12" md = "6" className='service-col-img'>
                  <LazyLoadImage width="100%" alt="demo-image" effect="blur" src={ServicesDemoImage} className = "img-fluid service-img" /> 
                {/* <img src = {ServicesDemoImage} className = "img-fluid service-img" alt = "demo Image"/> */}
           </Col>
           <Col xs = "12" md = "6" className='service-col'>
                <h2 className='service-head'>Find the best deals on New & Used cars</h2>
                <p className='service-text' id='root'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vita, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis, rutrum neque sit amet.</p>
                <ul className="">
                    <div className="d-flex d-md-block">
                        <CheckIcon className='check mr-3'/>
                        <Label ><p className="service-nav-Item">Find the best deals on cars.</p></Label>
                    </div>
                    <div className="d-flex d-md-block">
                        <CheckIcon className='check mr-3'/>
                        <Label><p className="service-nav-Item">Chat instantly with sellers.</p></Label>
                    </div>
                    <div className="d-flex d-md-block">
                        <CheckIcon className='check mr-3'/>
                        <Label><p className="service-nav-Item">Have a car to sell? List with us for free.</p></Label>
                    </div>
                    <div className="d-flex d-md-block">
                        <CheckIcon className='check mr-3'/>
                        <Label><p className="service-nav-Item">Download app and upload your car now.</p></Label>
                    </div>
                    
                  
                   
              
                </ul> 
                <Link to = {'/fullviewheader'}>
                <Button  color="primary" size="lg" block className="learn-more-service-button mt-4">Learn More</Button>
                    
                </Link>
                <Link to = {'/signup'}>
                   
                    <Button  color="primary" size="lg" block className="learn-more-service-button mt-4" to="/signup">Register</Button>
                    </Link>
                   
                    
               
                 </Col>

        </Row>
        
    )
  
}

export default ServicesOffer;