import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Col, Label, Button, Badge } from 'reactstrap';
import CompanyLogo from '../../../assets/DummyCarCard.png';
import '../styles/CarouselCard.css';
import { Link } from 'react-router-dom';

const CarouselCard = (props) => {
  return (
    <Card className="product-card mb-3 ml-3">
            <div className="">
                <CardImg src = {CompanyLogo} />
            </div>
        <CardBody>
                <Row>
                    <Col xs="9">
                        <CardTitle className = "carousel-car-name" >2019 Mercedes Benz Hybrid</CardTitle>
                        <CardSubtitle className = "carousel-car-info">19,850 mileage - california </CardSubtitle>
                        <CardText className = "carousel-car-price">$32,500</CardText>
                    </Col>
                    
                </Row>
        </CardBody>
    </Card>
  );
}

export default CarouselCard;
