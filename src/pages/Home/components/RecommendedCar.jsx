import React from 'react';
import '../styles/Home.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/RecommendedCar.css'
import DummyCarCard from '../../../assets/DummyCarCard.png'
import ProductCard from '../../../components//ProductCard/components/ProductCard';
import { CardBody, Col, Row } from 'reactstrap';
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
            <CardBody className = "recommended-cars">
            <Row className = "">
                <Col md = "6" xs = "12">
                    <h2 className = "recommended-cars-head">Recommended Cars</h2>
                </Col>

                <Col md = "6" xs = "12" className = "text-right">
                    <Link>View All</Link>
                </Col>
            </Row>
            <Slider {...settings}>
                
                
                <ProductCard
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$32,500"
                />
                <ProductCard
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$32,500"
                />
                <ProductCard
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$32,500"
                />
                <ProductCard
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$32,500"
                />
                <ProductCard
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$32,500"
                />
            </Slider> 
            </CardBody>
            
        </div>
    )
}

export default RecommendedCar;