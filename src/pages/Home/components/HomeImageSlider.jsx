import React from 'react';
import '../styles/Home.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/HomeImageSlider.css'
import DummyCarCard from '../../../assets/DummyCarCard.png'
import DummyCarCard2 from '../../../assets/DummyCarCard2.png'
import DummyCarCard3 from '../../../assets/DummyCarCard3.png'
import CarouselCard from '../../../components/CarouselCard/components/CarouselCard';
// import {Button, Label, Row, Col, Input} from 'reactstrap'
const HomeImageSlider = () => {

    let settings = {
    dot:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    }

    return(
        <div>
              <Slider {...settings}>
              <CarouselCard/>
                  <div className = "card-wrapper">
                    <div className = "card">
                        <div className = "card-image">
                            <img src = {DummyCarCard} alt = "car image"/>
                        </div>
                    </div>
                  </div>
                  <div className = "card-wrapper">
                    <div className = "card">
                        <div className = "card-image">
                            <img src = {DummyCarCard} alt = "car image"/>
                        </div>
                    </div>
                  </div>
                  <div className = "card-wrapper">
                    <div className = "card">
                        <div className = "card-image">
                            <img src = {DummyCarCard} alt = "car image"/>
                        </div>
                    </div>
                  </div>
                  <div className = "card-wrapper">
                    <div className = "card">
                        <div className = "card-image">
                            <img src = {DummyCarCard} alt = "car image"/>
                        </div>
                    </div>
                  </div>
                  
                  </Slider> 
        </div>
    )
}

export default HomeImageSlider;