import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Col, Label, Button, Badge } from 'reactstrap';
import CompanyLogo from '../../../assets/company-logo.png';

import '../styles/CarouselCard.css';
import { Link } from 'react-router-dom';

const CarouselCard = (props) => {
  return (
    <Card className="product-card mb-3">
            <div className="product-img">
                <CardImg src = {CompanyLogo} />
            </div>
        <CardBody>
                <Row>
                    <Col xs="9">
                        <CardTitle >Car title</CardTitle>
                        <CardSubtitle>Money</CardSubtitle>
                        <CardText>proce</CardText>
                    </Col>
                    
                </Row>
        </CardBody>
    </Card>
  );
}

export default CarouselCard;
