import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/TrendingCar.css'
import DummyCarCard from '../../../assets/DummyCarCard.png'
import DummyCarCard2 from '../../../assets/DemoCar2.png'
import DummyCarCard3 from '../../../assets/DemoCar3.png'
import DummyCarCard4 from '../../../assets/DemoCar4.png'
import ProductCard from '../../../components/ProductCard/components/ProductCard';
import { CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
// import {Button, Label, Row, Col, Input} from 'reactstrap'

const ShowSearchResults = () => {
   
    var table = [];
    for (let i = 0; i < 4; i++) {
        table.push(
            
            <Col xs="12" sm="6" lg="4">
                <ProductCard
                    productTitle="2019 Mercedes Benz Hybrid"
                    productSubtitle="19,850 mileage - california "
                    productText="$32,500"
                    productImg={DummyCarCard}
                    dealer={false}
                    dealerRating= {false}
                    allowBookmark={false} />
            </Col>
            
        );        
    }
    return table;
}

const TrendingCar = () => {

    let settings = {
        dot:true,
        infinite: true,
        rows: 1,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        mobileFirst:true,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
            }
          }],
        
        }
    return(
        <div>
            <CardBody className = "trending-cars">
            <Row className = "">
                <Col md = "6" xs = "12">
                    <h2 className = "trending-cars-head">Trending in US</h2>
                </Col>

                <Col md = "6" xs = "12" className = "text-right">
                    <Link>View All</Link>
                </Col>
            </Row>
        

            <Slider {...settings}>
                <ProductCard
                    productId={166}
                    productImg = {DummyCarCard2}
                    productTitle = "2020 Honda Odyssey: Lincoln, Ala."
                    productSubtitle = "45,850 mileage - california "
                    productText = "$90,500"
                />
                <ProductCard
                    productId={166}
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "41,850 mileage - california "
                    productText = "$67,500"
                />
                <ProductCard
                    productId={166}
                    productImg = {DummyCarCard2}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$32,500"
                />
                <ProductCard
                    productId={166}
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$32,500"
                />
                <ProductCard
                    productId={166}
                    productImg = {DummyCarCard4}
                    productTitle = "2020 Tesla Model S: Fremont, Calif."
                    productSubtitle = "30,850 mileage - New York "
                    productText = "$45,780"
                />
                <ProductCard
                    productId={166}
                    productImg = {DummyCarCard3}
                    productTitle = "2020 Honda Passport: Lincoln, Ala."
                    productSubtitle = "20,000 mileage - california "
                    productText = "$12,500"
                />
            </Slider> 
            </CardBody>
            
        </div>
    )
}

export default TrendingCar;