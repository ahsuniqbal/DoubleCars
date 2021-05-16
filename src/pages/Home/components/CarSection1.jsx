import React,{useState,useEffect}  from 'react';
import { Col, Row, Label, Button,Badge ,Container} from 'reactstrap';
import '../styles/CarSection1.css'
import { ChevronRight } from 'react-feather';
import {useHistory} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const CarSection1 = () => {


    const history=useHistory()
    const CarSection1DemoImage1 = {
        backgroundImage: `url(${require("../../../assets/CarSection1Image.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '4px',
        height: '270px',
        cursor: 'pointer',
      };
      const CarSection1DemoImage2 = {
        backgroundImage: `url(${require("../../../assets/FeaturedDemo3.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '4px',
        backgroundRepeat: 'no-repeat',
        height: '270px',
        cursor: 'pointer',
      };

      const CarSection1DemoImage3 = {
        backgroundImage: `url(${require("../../../assets/FeaturedDemo4.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '4px',
        backgroundRepeat: 'no-repeat',
        height: '270px',
        cursor: 'pointer',
      };
      const CarSection1DemoImage4 = {
        backgroundImage: `url(${require("../../../assets/FeaturedDemo5.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '4px',
        backgroundRepeat: 'no-repeat',
        height: '270px',
        cursor: 'pointer',
      };

    return(
      

      <body className = "car-section-body">
        <Container>

        
      
      <Row className='car-section-row'>
            <Col data-aos="fade-up"  md = "3" xs = "12" className='car-section-coloumn'>
                <Col md = "12" xs = "12"  style = {CarSection1DemoImage1}  onClick={()=>history.push('/products')}>
                    
                    <Badge color="primary" className = "car-badge">Hybrid</Badge>
                    <h2 className = "car-title"> Plug-out Cars</h2>
                    <h1 className = "price-label">Starting from $5000 <ChevronRight color="#ffffff" size={15} className = ""/></h1>
                </Col>
            </Col>

            <Col data-aos="fade-up" md = "3" xs = "12" className='car-section-coloumn'>
                <Col md = "12" xs = "12"  style = {CarSection1DemoImage2}  onClick={()=>history.push('/products')}>
                    <Badge color="primary" className = "car-badge">Hybrid</Badge>
                    <h2 className = "car-title">Electric Cars</h2>
                    <h1 className = "price-label">Starting from $5000<ChevronRight color="#ffffff" size={15} className = ""/></h1>
                </Col>
            </Col>

            <Col data-aos="fade-up"  md = "3" xs = "12" className='car-section-coloumn'>
                <Col md = "12" xs = "12"  style = {CarSection1DemoImage3}  onClick={()=>history.push('/products')}> 
                    <Badge color="primary" className = "car-badge">Hybrid</Badge>
                    <h2 className = "car-title">Self-Driving Cars</h2>
                    <h1 className = "price-label">Starting from $5000 <ChevronRight color="#ffffff" size={15} className = ""/></h1>
                </Col>
            </Col>

            <Col  data-aos="fade-up" md = "3" xs = "12" className='car-section-coloumn'>
                <Col md = "12" xs = "12"  style = {CarSection1DemoImage4}  onClick={()=>history.push('/products')}>
                    <Badge color="primary" className = "car-badge">Hybrid</Badge>
                    <h2 className = "car-title">Hybird Cars</h2>
                    <h1 className = "price-label">Starting from $5000 <ChevronRight color="#ffffff" size={15} className = ""/></h1>
                </Col>
            </Col>
      </Row>
      </Container>
      </body>
    )
  
}
 export default CarSection1;
