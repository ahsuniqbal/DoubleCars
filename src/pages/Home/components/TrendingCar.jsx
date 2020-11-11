import React from 'react';
import '../styles/Home.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/TrendingCar.css'
import DummyCarCard from '../../../assets/DummyCarCard.png'
import ProductCard from '../../../components/ProductCard/components/ProductCard';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
// import {Button, Label, Row, Col, Input} from 'reactstrap'
const TrendingCar = () => {

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
                    <h2 className = "trending-cars-head">Trending in US</h2>
                </Col>

                <Col md = "6" xs = "12" className = "text-right">
                    <Link>View All</Link>
                </Col>
            </Row>
        

            <Slider {...settings}>
                <ProductCard
                    productImg = {DummyCarCard}
                    
                />
                <ProductCard
                    productImg = {DummyCarCard}
                />
                <ProductCard
                    productImg = {DummyCarCard}
                />
                <ProductCard
                    productImg = {DummyCarCard}
                />
                <ProductCard
                    productImg = {DummyCarCard}

                />
                <ProductCard
                    productImg = {DummyCarCard}
                />
            </Slider> 
        </div>
    )
}

export default TrendingCar;