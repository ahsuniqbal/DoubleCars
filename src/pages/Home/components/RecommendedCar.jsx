import React, { useState, useEffect } from 'react';
import '../styles/Home.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/RecommendedCar.css';
import ProductCard from '../../../components//ProductCard/components/ProductCard';
import { CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { GetRecommendations } from '../api/GetRequests';
import { isLogin, getLogin } from '../../../config/LoginAuth';

function DrawRecommendations(recommnedations){
    var table = [];
    console.log(recommnedations);
    for(let i = 0; i < recommnedations.length; i++){
        table.push(
            <ProductCard 
                key={i}
                productId={recommnedations[i].productId}
                productImg={recommnedations[i].coverPic}
                productName={recommnedations[i].name}
                productTitle={recommnedations[i].name}
                productSubtitle={recommnedations[i].mileage + " miles · " + recommnedations[i].zipCode}
                productText = {"$" + recommnedations[i].price}
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

        if(isLogin()){
            GetRecommendations(getLogin()).then(doc => {
                setRecommendations(doc[0].data);
            })
        }
        else{
            GetRecommendations('-1').then(doc => {
                setRecommendations(doc[0].data);
            });
        }
    }, []);

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
                <Col>
                    <Slider {...settings}>
                        {
                            recommnedations ? DrawRecommendations(recommnedations) : null
                        }
                    </Slider> 
                </Col>
            </Row>
            
            </CardBody>
        </div>
    )
}

export default RecommendedCar;