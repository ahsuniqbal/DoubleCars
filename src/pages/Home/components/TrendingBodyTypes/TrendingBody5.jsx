import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import democar from '../../../../assets/DemoCar.png'
import democar2 from '../../../../assets/DemoCar2.png'
import democar3 from '../../../../assets/DemoCar3.png'
import democar4 from '../../../../assets/DemoCar4.png'
import ProductCard from '../../../../components/ProductCard/components/ProductCard';

import { Row, Col } from 'reactstrap'
const DrawCarouselCols = (list,index) => {
    var table = [];
    for(let i = index; i < index + 4 ; i++){
        table.push(
            <Col xs="12" sm="4" lg="3">
                <ProductCard 
                // key={i}
                        productId= "asas"
                        productImg={democar}
                        productName="Car" 
                        productTitle="Car"
                        productSubtitle="miles"
                        productText = "3455"
                />
            </Col>
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
                    DrawCarouselCols(list, i)
                }
                </Row>
            </Carousel.Item>
        );
        i+=3;
    }
    return table;
}


const TrendingBody5 = () => {
    const [trending5] = useState(null);
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
                        productImg={democar2}
                        productTitle="2016 Honda Accord"
                        productSubtitle="49,000 miles · 13185"
                        productText = "$16,495"
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
                        productImg={democar4}
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
                        productTitle="2014 Land Rover Range Rover Evoque"
                        productSubtitle="123,556 miles · 8885"
                        productText = "$455,588"
                />
               </Col>
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
                </Row>
               
               </Carousel.Item>
              
         
            </Carousel>
        </div>    
    );
};

export default TrendingBody5;