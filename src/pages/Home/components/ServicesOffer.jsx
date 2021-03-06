import React from 'react';
import { Col, Row, Label, CustomInput } from 'reactstrap';
import ServicesDemoImage from '../../../assets/ServicesDemoImage.png'
import '../styles/ServicesOffer.css';
import CheckIcon from '@material-ui/icons/Check';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
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
                <h2 className='service-head'>What services do we offer?</h2>
                <p className='service-text' id='root'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis, rutrum neque sit amet.</p>
                <ul className="">
                    <div className="d-flex d-md-block">
                        <CheckIcon className='check mr-3'/>
                        <Label ><p className="service-nav-Item">Lorem ipsum dolor sit amet consectetur.</p></Label>
                    </div>
                    <div className="d-flex d-md-block">
                        <CheckIcon className='check mr-3'/>
                        <Label><p className="service-nav-Item">Lorem ipsum dolor sit amet consectetur.</p></Label>
                    </div>
                    <div className="d-flex d-md-block">
                        <CheckIcon className='check mr-3'/>
                        <Label><p className="service-nav-Item">Lorem ipsum dolor sit amet consectetur.</p></Label>
                    </div>
              
                </ul> 
           </Col>

        </Row>
        
    )
  
}

export default ServicesOffer;