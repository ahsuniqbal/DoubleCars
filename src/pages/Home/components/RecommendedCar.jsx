import React, { useState, useEffect } from 'react';
import '../styles/Home.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/RecommendedCar.css'
import DummyCarCard from '../../../assets/DummyCarCard.png'
import DummyCarCard2 from '../../../assets/DemoCar2.png'
import DummyCarCard3 from '../../../assets/DemoCar3.png'
import DummyCarCard4 from '../../../assets/DemoCar4.png'
import ProductCard from '../../../components//ProductCard/components/ProductCard';
import { CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { GetRecommendations } from '../api/GetRequests';

function DrawRecommendations(recommnedations){
    var table = [];
    for(let i = 0; i < recommnedations.length; i++){
        table.push(
            <ProductCard 
                key={i}
                productId={166}
                productImg = {DummyCarCard}
                productTitle = "2020 Jeep Cherokee: Belvidere, Ill."
                productSubtitle = "11,850 mileage - california "
                productText = "$55,500"
            />
        );
    }
    return table;
}

const RecommendedCar = () => {
    const [recommnedations, setRecommendations] = useState(null);

    useEffect(() => {
        // If User is logged in the you will send id param other wise no id param will be send
        // Login not implemented yet that
        GetRecommendations(null).then(doc => {
            setRecommendations(doc.data);
        });
    });

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
             <CardBody className = "recommended-cars">
            <Row className = "">
                <Col md = "6" xs = "12">
                    <h2 className = "recommended-cars-head">Recommneded Cars</h2>
                </Col>

                <Col md = "6" xs = "12" className = "text-right">
                    <Link>View All</Link>
                </Col>
            </Row>
        
            <Row>
                <Col >
                <Slider {...settings}>
                    {/* {
                        recommnedations ? DrawRecommendations(recommnedations) : null
                    } */}
                <ProductCard
                    productId={166}
                    productImg = {DummyCarCard}
                    productTitle = "2020 Jeep Cherokee: Belvidere, Ill."
                    productSubtitle = "11,850 mileage - california "
                    productText = "$55,500"
                />
                <ProductCard
                    productId={166}
                    productImg = {DummyCarCard2}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "41,850 mileage - california "
                    productText = "$67,500"
                />
                <ProductCard
                    productId={166}
                    productImg = {DummyCarCard3}
                    productTitle = "2020 Honda Odyssey: Lincoln, Ala."
                    productSubtitle = "45,850 mileage - california "
                    productText = "$90,500"
                />
                <ProductCard
                    productId={166}
                    productImg = {DummyCarCard}
                    productTitle = "2020 Tesla Model S: Fremont, Calif."
                    productSubtitle = "30,850 mileage - New York "
                    productText = "$45,780"
                />
                <ProductCard
                    productId={166}
                    productImg = {DummyCarCard4}
                    productTitle = "2020 Honda Passport: Lincoln, Ala."
                    productSubtitle = "20,000 mileage - california "
                    productText = "$12,500"
                />
                  <ProductCard
                    productId={166}
                    productImg = {DummyCarCard}
                    productTitle = "2020 Chevrolet Colorado: Wentzville, Mo."
                    productSubtitle = "19,850 mileage - california "
                    productText = "$32,500"
                />
               
            </Slider> 
                </Col>
            </Row>
            
            </CardBody>
                {/* <Row>
                    <Col xs="12" md="12" >
                      
                
                      <Slider {...settings}>
                            <Row>
                                {
                                    ShowSearchResults()
                                }
                               
                            </Row>
                            </Slider>
                
                    </Col>
                </Row> */}
            
          
            
        </div>
    )
}

export default RecommendedCar;