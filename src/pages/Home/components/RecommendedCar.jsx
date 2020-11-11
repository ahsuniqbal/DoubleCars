import React ,{ useEffect, useState } from 'react';
import '../styles/Home.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/RecommendedCar.css'
import DummyCarCard from '../../../assets/DummyCarCard.png'
import DummyCarCard2 from '../../../assets/DummyCarCard2.png'
import DummyCarCard3 from '../../../assets/DummyCarCard3.png'
import ProductCard from '../../../components/CarouselCard/components/CarouselCard';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';


const RecommendedCar = () => {

   

    let settings = {
    dot:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    }

    return(
        <div>
            <Row className = "mt-5">
                <Col md = "6" xs = "12">
                    <h2 className = "recommended-cars-head">Recommended Cars</h2>
                </Col>

                <Col md = "6" xs = "12" className = "text-right">
                    <Link>View All</Link>
                </Col>
            </Row>

            
        

              <Slider {...settings}>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
                  
                 
                  
                  
                  
                  </Slider> 
        </div>
    )
}

export default RecommendedCar;