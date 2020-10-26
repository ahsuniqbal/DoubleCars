import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Col, Label } from 'reactstrap';
import Cover from '../../../assets/DummyCarCard.png';
import CompanyLogo from '../../../assets/company-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/ProductCard.css'

const ProductCard = () => {
  return (
    <Card className="product-card">
        <CardImg src={Cover} alt="Product card image" />
        <CardBody>
            <CardTitle>2017 Mercedes Benz Hybrid</CardTitle>
            <CardSubtitle>19,850 mileage · California </CardSubtitle>
            <CardText>$32,000</CardText>
            <hr />
            <Row>
                <Col xs="3">
                    <CardImg src={CompanyLogo} alt="Company logo" />
                </Col>
                <Col xs="5" className="px-0">
                    <Label>Cooper Motors</Label>
                </Col>
                <Col xs="4">
                    <FontAwesomeIcon icon={"fas", "star"} color="#FFBB54" size="1x" />
                    <Label>4.8</Label>
                </Col>
            </Row>
        </CardBody>
    </Card>
  );
}

export default ProductCard;
