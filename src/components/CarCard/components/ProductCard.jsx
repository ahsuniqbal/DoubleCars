import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Col, Label, Button, Badge } from 'reactstrap';
import CompanyLogo from '../../../assets/company-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/ProductCard.css'

const ProductCard = (props) => {
  return (
    <Card className="product-card mb-3">
        <div className="product-img">
            {
                props.productBadge ? <Badge color="primary">{props.productBadge}</Badge> : null
            }
            <CardImg src={props.productImg} alt={props.productName} />
        </div>
        <CardBody>
            <Row>
                <Col xs="9">
                    <CardTitle>{props.productTitle}</CardTitle>
                    <CardSubtitle>{props.productSubtitle}</CardSubtitle>
                    <CardText>{props.productText}</CardText>
                </Col>
                <Col xs="3">
                    <Button color="link" className="bookmark">
                        <FontAwesomeIcon icon={["far", "bookmark"]} color="gray" />
                    </Button>
                </Col>
            </Row>
            <hr />
            <Row className="company-details">
                <Col xs="3">
                    <CardImg src={CompanyLogo} alt="Company logo" />
                </Col>
                <Col xs="5" className="px-0">
                    <CardTitle>Cooper Motors</CardTitle>
                </Col>
                <Col xs="4" className="pl-0 text-right">
                    {
                        props.privateSeller ?
                            <Label className="private-seller">Private Seller</Label> :
                            <div className="company-rating">
                                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                <Label>4.8</Label>
                            </div>
                    }
                    
                </Col>
            </Row>
        </CardBody>
    </Card>
  );
}

export default ProductCard;