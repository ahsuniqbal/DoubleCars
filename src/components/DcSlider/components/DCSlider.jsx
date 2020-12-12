import React from "react"
import '../styles/DCSlider.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Card, CardImg } from 'reactstrap';
import DemoCar2 from '../../../assets/DemoCar2.png'
import ProductCard from '../../ProductCard'
const DCSlider = () => {
    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
    }

    return (
        <Slider {...settings}>
            
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            
            <ProductCard/>
           
            
        </Slider>
    );
  }
  
  export default DCSlider;
