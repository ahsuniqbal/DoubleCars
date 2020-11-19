import React from 'react';
import { Row, Col, Button, Container} from 'reactstrap'
import Carousel from 'react-bootstrap/Carousel'
import democar from '../../../assets/DemoCar.png'
import {Link} from 'react-router-dom'
import ProductCard from '../../../components/ProductCard/components/ProductCard';


const DrawCarouselCols = (list,index) => {
    var table = [];
    for(let i = index; i < index + 3; i++){
        table.push(
            <Col xs="12" md="4" className="mb-5">
                <div className="rcommended-cars-carousel">
                    <img src={democar} alt="mno" className="img-fluid" />
                    <div>
                        <h6>H6 is here</h6>
                        <p>P is here</p>
                    </div>
                </div>
            </Col>
        );
    }
    return table;
}

const DrawCarousel = (list) => {
    var table = [];
    for(let i = 0; i < 10; i++){
        table.push(
            <Carousel.Item>
                <Row>
                {
                    DrawCarouselCols(list,i)
                }
                </Row>
            </Carousel.Item>
        );
        i+=2
    }
    return table;
}


const CarouselTemporary = () => {
    return(
        <div>
            <div className="">
                <Row className="mx-0">
                    <Col xs="12">
                        <h1 className="text-center">Recommended Cars</h1>
                    </Col>
                </Row>
                <Row className="mx-0">
                    <Carousel indicators={false}>
                        {
                            DrawCarousel() 
                        }
                    </Carousel>
                </Row>
            </div>
        </div>
    )
}

export default CarouselTemporary;