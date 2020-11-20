import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import democar from '../../../../assets/DemoCar.png'
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
                        productName="Car" 
                        productTitle="Car"
                        productSubtitle="miles"
                        productText = "3455"
                />
               </Col>
               <Col md = "3" xs = "12">
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
               <Col md = "3" xs = "12">
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
               <Col md = "3" xs = "12">
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
                </Row>
               
               </Carousel.Item>
               <Carousel.Item>
                <Row>
                    <Col md = "3" xs = "12">
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
               <Col md = "3" xs = "12">
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
               <Col md = "3" xs = "12">
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
               <Col md = "3" xs = "12">
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
                </Row>
               
               </Carousel.Item>
              
         
            </Carousel>
            
        </div>    
    );
};

export default TrendingBody4;