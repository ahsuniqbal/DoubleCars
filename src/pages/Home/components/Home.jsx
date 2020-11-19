import React, { useState, useEffect } from 'react';
import Header from './Header'
import PopularMake from './PopularMake'
import TrendingBodyTypes from './TrendingBodyTypes/TrendingBodyTypes'
import BuyNow from './BuyNow';
import Searchbar from './Searchbar';
import { Row, Col, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import { GetRecommendations } from '../api/GetRequests';
import { isLogin, getLogin } from '../../../config/LoginAuth';
import ProductCard from '../../../components//ProductCard/components/ProductCard';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/RecommendedCar.css';
import '../styles/TrendingCar.css';

function DrawProductCards(data){
    var table = [];
    for(let i = 0; i < data.length; i++){
        table.push(
            <ProductCard 
                key={i}
                productId={data[i].productId}
                productImg={data[i].coverPic}
                productName={data[i].name}
                productTitle={data[i].name}
                productSubtitle={data[i].mileage + " miles · " + data[i].zipCode}
                productText = {"$" + data[i].price}
            />
            
        );
    }
    return table;
}


const Home = () => {
    const [recommnedations, setRecommendations] = useState(null);
    const [trending, setTrending] = useState(null);

    useEffect(() => {
        // If User is logged in the you will send id param other wise no id param will be send
        // Login not implemented yet that

        if(isLogin()){
            GetRecommendations(getLogin()).then(doc => {
                setRecommendations(doc[0].data);
                setTrending(doc[1].data);
            })
        }
        else{
            GetRecommendations('-1').then(doc => {
                setRecommendations(doc[0].data);
                setTrending(doc[1].data);
            });
        }
    }, []);

    let settings = {
        dot: true,
        infinite: true,
        rows: 1,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        mobileFirst:true,
        responsive: [
            {
                breakpoint: 576,
                settings:
                {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings:
                {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 992,
                settings:
                {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ],
        
    }

    return(
        <div>
            <Header/>
            <Row>
                <Col xs="1"></Col>
                <Col xs="10">
                    <Searchbar />
                </Col>
            </Row>

            <Row>
                <Col xs="12">
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
                            <Col>
                                <Slider {...settings}>
                                    {
                                        recommnedations ? DrawProductCards(recommnedations) : <div>Loading your recommendations</div>
                                    }
                                </Slider> 
                            </Col>
                        </Row>
                    </CardBody>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <CardBody className="trending-cars">
                        <Row className = "">
                            <Col md = "6" xs = "12">
                                <h2 className = "trending-cars-head">Trending in US</h2>
                            </Col>

                            <Col md = "6" xs = "12" className = "text-right">
                                <Link>View All</Link>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                                <Slider {...settings}>     
                                {
                                    trending ? DrawProductCards(trending) : <div>Loading your recommendations</div>
                                }
                                </Slider> 
                            </Col>
                        </Row>

                        
                    </CardBody>
                </Col>
            </Row>

            
            <div className = "trending-body-types">
                <TrendingBodyTypes/>    
            </div>
            <BuyNow/>
            <PopularMake/>
        </div>
    )
}

export default Home;