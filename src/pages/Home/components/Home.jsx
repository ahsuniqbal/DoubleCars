import React, { useState, useEffect } from 'react';
import Header from './Header'
import PopularMake from './PopularMake'
import TrendingBodyTypes from './TrendingBodyTypes/TrendingBodyTypes'
import BuyNow from './BuyNow';
import Searchbar from './Searchbar';
import { Row, Col, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import democar from '../../../assets/DemoCar.png'
import { GetRecommendations } from '../api/GetRequests';
import { isLogin, getLogin } from '../../../config/LoginAuth'
import ProductCard from '../../../components//ProductCard/components/ProductCard';

import '../styles/RecommendedCar.css';
import '../styles/TrendingCar.css';

// function DrawProductCards(data){
//     var table = [];
//     for(let i = 0; i < data.length; i++){
//         table.push(
//             <ProductCard 
//                 key={i}
//                 productId={data[i].productId}
//                 productImg={data[i].coverPic}
//                 productName={data[i].name}
//                 productTitle={data[i].name}
//                 productSubtitle={data[i].mileage + " miles · " + data[i].zipCode}
//                 productText = {"$" + data[i].price}
//             />
            
//         );
//     }
//     return table;
// }




const DrawCarouselCols = (list,index) => {
    var table = [];
    for(let i = index; i < 10 ; i++){
        table.push(
            <ProductCard 
            // key={i}
                    productId= "asas"
                    productImg={democar}
                    productName="Car" 
                    productTitle="Car"
                    productSubtitle="miles"
                    productText = "3455"
            />
        );
    }
    return table;
}

const DrawCarousel = (list) => {
    var table = [];
    for(let i = 0; i < list.length; i++){
        table.push(
            <Carousel.Item>
                <Row>
                {
                    DrawCarouselCols(list,i)
                }
                </Row>
            </Carousel.Item>
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
                                {/* <Slider {...settings}>
                                    {
                                        recommnedations ? DrawProductCards(recommnedations) : <div>Loading your recommendations</div>
                                    }
                                </Slider>  */}
                                <Carousel indicators={false}>
                                {
                                    DrawCarousel(recommnedations) 
                                }
                                </Carousel>
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
                            <Carousel indicators={false}>
                                {
                                    DrawCarousel(trending) 
                                }
                                </Carousel>
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