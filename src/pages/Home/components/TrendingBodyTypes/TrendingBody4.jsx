import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import democar from '../../../../assets/DemoCar.png'
import democar2 from '../../../../assets/DemoCar2.png'
import democar3 from '../../../../assets/DemoCar3.png'
import democar4 from '../../../../assets/DemoCar4.png'
import ProductCard from '../../../../components/ProductCard/components/ProductCard';

import { Row, Col } from 'reactstrap'


const TrendingBody4 = () => {
    return(
        <div>  
            <Carousel indicators={false}>
               <Carousel.Item>
                <Row>
                    <Col md = "3" xs = "12">
                    <ProductCard 
                // key={i}
                        productId= "asas"
                        productImg={democar}
                        productTitle="2015 Lexus RC 350"
                        productSubtitle="39,674 miles · 999966"
                        productText = "$35,000"
                />
               </Col>
               <Col md = "3" xs = "12">
                    <ProductCard 
                // key={i}
                        productId= "asas"
                        productImg={democar2}
                        productTitle="2016 Honda Accord"
                        productSubtitle="49,000 miles · 13185"
                        productText = "$16,495"
                />
               </Col>
               <Col md = "3" xs = "12">
                    <ProductCard 
                // key={i}
                        productId= "asas"
                        productImg={democar3}
                        productTitle="2016 Honda Accord"
                        productSubtitle="49,000 miles · 13185"
                        productText = "$16,495"
                />
               </Col>
               <Col md = "3" xs = "12">
                    <ProductCard 
                // key={i}
                        productId= "asas"
                        productImg={democar4}
                        productTitle="2015 Lexus RC 350"
                        productSubtitle="39,674 miles · 999966"
                        productText = "$35,000"
                />
               </Col>
                </Row>
               
               </Carousel.Item>
               <Carousel.Item>
                <Row>
                    <Col md = "3" xs = "12">
                    <ProductCard 
                // key={i}
                        productId= "asas"
                        productImg={democar3}
                        productTitle="2014 Land Rover Range Rover Evoque"
                        productSubtitle="123,556 miles · 8885"
                        productText = "$455,588"
                />
               </Col>
               <Col md = "3" xs = "12">
                    <ProductCard 
                // key={i}
                        productId= "asas"
                        productImg={democar4}
                        productTitle="2015 Lexus RC 350"
                        productSubtitle="39,674 miles · 999966"
                        productText = "$35,000"
                />
               </Col>
               <Col md = "3" xs = "12">
                    <ProductCard 
                // key={i}
                        productId= "asas"
                        productImg={democar}
                        productTitle="2014 Land Rover Range Rover Evoque"
                        productSubtitle="123,556 miles · 8885"
                        productText = "$455,588"
                />
               </Col>
               <Col md = "3" xs = "12">
                    <ProductCard 
                // key={i}
                        productId= "asas"
                        productImg={democar2}
                        productTitle="2015 Lexus RC 350"
                        productSubtitle="39,674 miles · 999966"
                        productText = "$35,000"
                />
               </Col>
                </Row>
               
               </Carousel.Item>
              
         
            </Carousel>
            
        </div>    
    );
};

export default TrendingBody4;