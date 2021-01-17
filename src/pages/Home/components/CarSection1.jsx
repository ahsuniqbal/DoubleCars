import React from 'react';
import { Col, Row, Label, Button,Badge } from 'reactstrap';
import '../styles/CarSection1.css'
import { ChevronRight } from 'react-feather';

const CarSection1 = () => {
    const CarSection1DemoImage1 = {
        backgroundImage: `url(${require("../../../assets/CarSection1Image.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '4px',
        height: '35vh',
        cursor: 'pointer',
      };
      const CarSection1DemoImage2 = {
        backgroundImage: `url(${require("../../../assets/FeaturedDemo3.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '4px',
        backgroundRepeat: 'no-repeat',
        height: '35vh',
        cursor: 'pointer',
      };

      const CarSection1DemoImage3 = {
        backgroundImage: `url(${require("../../../assets/FeaturedDemo4.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '4px',
        backgroundRepeat: 'no-repeat',
        height: '35vh',
        cursor: 'pointer',
      };
      const CarSection1DemoImage4 = {
        backgroundImage: `url(${require("../../../assets/FeaturedDemo5.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '4px',
        backgroundRepeat: 'no-repeat',
        height: '35vh',
        cursor: 'pointer',
      };

      
    return(
        <Row className='car-section-row'>
            <Col md = "3" xs = "12" className='car-section-coloumn'>
                <Col md = "12" xs = "12"  style = {CarSection1DemoImage1}>
                    <Badge color="primary" className = "car-badge">Hybrid</Badge>
                    <h2 className = "car-title"> Plug-in Cars</h2>
                    <Label className = "price-label">Starting from $5000 <ChevronRight color="#ffffff" size={15} className = ""/></Label>
                </Col>
            </Col>

            <Col md = "3" xs = "12" className='car-section-coloumn'>
                <Col md = "12" xs = "12"  style = {CarSection1DemoImage2}>
                    <Badge color="primary" className = "car-badge">Hybrid</Badge>
                    <h2 className = "car-title">Electric Cars</h2>
                    <Label className = "price-label">Starting from $5000<ChevronRight color="#ffffff" size={15} className = ""/></Label>
                </Col>
            </Col>

            <Col md = "3" xs = "12" className='car-section-coloumn'>
                <Col md = "12" xs = "12"  style = {CarSection1DemoImage3}>
                    <Badge color="primary" className = "car-badge">Hybrid</Badge>
                    <h2 className = "car-title">Self-Driving Cars</h2>
                    <Label className = "price-label">Starting from $5000 <ChevronRight color="#ffffff" size={15} className = ""/></Label>
                </Col>
            </Col>

            <Col md = "3" xs = "12" className='car-section-coloumn'>
                <Col md = "12" xs = "12"  style = {CarSection1DemoImage4}>
                    <Badge color="primary" className = "car-badge">Hybrid</Badge>
                    <h2 className = "car-title">Hybird Cars</h2>
                    <Label className = "price-label">Starting from $5000 <ChevronRight color="#ffffff" size={15} className = ""/></Label>
                </Col>
            </Col>
            
            
        </Row>
        
    )
  
}

export default CarSection1;