import React from 'react';
import { Col, Row, Label, Badge } from 'reactstrap';
import '../styles/FeaturedCars.css'

const FeaturedCars = () => {
    const FeaturedDemoImage1 = {
        backgroundImage: `url(${require("../../../assets/FearturedDemo1.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
        border:'5px solid white',
        borderRadius: '4px'
        
      };

      const FeaturedDemoImage2 = {
        backgroundImage: `url(${require("../../../assets/FeaturedDemo2.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '35vh',
        border:'5px solid white',
        borderRadius: '4px',
       
      };
      
      const FeaturedDemoImage3 = {
        backgroundImage: `url(${require("../../../assets/DemoCar3.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '35vh',
        border:'5px solid white',
       borderRadius: '4px',
      };
      const FeaturedDemoImage4 = {
        backgroundImage: `url(${require("../../../assets/DemoCar2.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '35vh',
        borderRight:'10px solid white',
        border:'5px solid white', 
        borderRadius: '4px',
      };
      const FeaturedDemoImage5 = {
        backgroundImage: `url(${require("../../../assets/FeaturedDemo5.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '35vh',
        border:'5px solid white',
        borderRadius: '4px',
            };


      
    return(
        <Row className='main-feature'>
            <Col md = "6" xs = "12" style = {FeaturedDemoImage1} className='main-coloumn'>
            <Badge color="primary" className = "feature-car-badge1">New</Badge>
                <div className="content-first">
                  <h2 className='content-header1'>$12,500</h2>
                  <Label className="content-text1">2019 Mercedes Benz Hybrid</Label>
                </div>
            </Col>
            <Col md = "6" xs = "12">
                <Row>
                    <Col md = "6" xs = "12" style = {FeaturedDemoImage2} className='main-coloumn'>
                    <Badge color="primary" className = "feature-car-badge2">New</Badge>
                      <div className="content">
                        <h2 className='content-header2'>$30,500</h2>
                        <Label className="content-text2">2019 Mercedes Benz Hybrid</Label>
                      </div>
                    </Col>
                    <Col md = "6" xs = "12" style = {FeaturedDemoImage3} className='main-coloumn'>
                      
                      <div className="content">
                        <h2 className='content-header2'>$42,520</h2>
                        <Label className="content-text2">2019 Mercedes Benz Hybrid</Label>
                      </div>
                    </Col>
                </Row>
                <Row>
                    <Col md = "6" xs = "12" style = {FeaturedDemoImage4} className='main-coloumn'>
                      <div className="content">
                        <h2 className='content-header2'>$32,500</h2>
                        <Label className="content-text2">2019 Mercedes Benz Hybrid</Label>
                      </div>
                    </Col>
                    <Col md = "6" xs = "12" style = {FeaturedDemoImage5} className='main-coloumn'>
                     <Badge color="primary" className = "feature-car-badge2">New</Badge>
                      <div className="content">
                        <h2 className='content-header2'>$30,500</h2>
                        <Label className="content-text2">2019 Mercedes Benz Hybrid</Label>
                      </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        
    )
  
}

export default FeaturedCars;