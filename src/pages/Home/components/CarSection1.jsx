import React,{useState,useEffect}  from 'react';
import { Col, Row, Label, Button,Badge ,Container} from 'reactstrap';
import '../styles/CarSection1.css'
import { ChevronRight } from 'react-feather';
import {useHistory} from 'react-router-dom';
import nextIcon from '../../../assets/next-icon.png';
import previousIcon from '../../../assets/prev-icon.png';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";

const NextIcon=(props)=>{
    const { className, onClick,activeSlide } = props;
    console.log(activeSlide)
    return (
      <div>
        {activeSlide==0 &&  
              <div className={className} onClick={onClick}>
              <img src={nextIcon} className='icon-image' id='show-sliders'/>
            </div>
          }
      </div>
    );
  }
  const PrevoiusIcon=(props)=>{
    const { className, onClick ,activeSlide} = props;
    return (
      <div>
        {activeSlide!==0 && 
          <div
          className={className}
          onClick={onClick}
        >
          <img src={previousIcon} className='prev-icon-image' id='show-sliders'/>
        </div>
        }
      </div>
    );
  }
const CarSection1 = () => {
    
  const [activeSlide,setActiveSlide]=useState(0)

    let settings = {
        adaptiveHeight: true,
        speed:800,
        nextArrow: <NextIcon activeSlide={activeSlide}/>,
        prevArrow:<PrevoiusIcon activeSlide={activeSlide}/>,
        dots: false,
        beforeChange: (current, next) => setActiveSlide(next),
        swipeToSlide: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        autoplay: false,
        infinite: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
        // slidesPerRow: 1,
        
    }

    const history=useHistory()
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
                <Col md = "12" xs = "12"  style = {CarSection1DemoImage1}  onClick={()=>history.push('/products')}>
                    
                    <Badge color="primary" className = "car-badge">Hybrid</Badge>
                    <h2 className = "car-title"> Plug-in Cars</h2>
                    <h1 className = "price-label">Starting from $5000 <ChevronRight color="#ffffff" size={15} className = ""/></h1>
                </Col>
            </Col>

            <Col md = "3" xs = "12" className='car-section-coloumn'>
                <Col md = "12" xs = "12"  style = {CarSection1DemoImage2}  onClick={()=>history.push('/products')}>
                    <Badge color="primary" className = "car-badge">Hybrid</Badge>
                    <h2 className = "car-title">Electric Cars</h2>
                    <h1 className = "price-label">Starting from $5000<ChevronRight color="#ffffff" size={15} className = ""/></h1>
                </Col>
            </Col>

            <Col md = "3" xs = "12" className='car-section-coloumn'>
                <Col md = "12" xs = "12"  style = {CarSection1DemoImage3}  onClick={()=>history.push('/products')}> 
                    <Badge color="primary" className = "car-badge">Hybrid</Badge>
                    <h2 className = "car-title">Self-Driving Cars</h2>
                    <h1 className = "price-label">Starting from $5000 <ChevronRight color="#ffffff" size={15} className = ""/></h1>
                </Col>
            </Col>

            <Col md = "3" xs = "12" className='car-section-coloumn'>
                <Col md = "12" xs = "12"  style = {CarSection1DemoImage4}  onClick={()=>history.push('/products')}>
                    <Badge color="primary" className = "car-badge">Hybrid</Badge>
                    <h2 className = "car-title">Hybird Cars</h2>
                    <h1 className = "price-label">Starting from $5000 <ChevronRight color="#ffffff" size={15} className = ""/></h1>
                </Col>
            </Col>
      </Row>

    )
  
}
 export default CarSection1;
