import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Col, Label, Button, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarIcon from '../../../assets/star.svg';
import { Link } from 'react-router-dom';
import dummyAvatar from '../../../assets/dummyAvatar.jpg';
import '../styles/ProductCard.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const ProductCard = (props) => {
  return (
    <Card className="product-card mb-3 ">
        <Link to={"/product/" + props.productId}>
            <div className="product-img">
                {
                    props.productBadge ? <Badge color="primary">{props.productBadge}</Badge> : null
                }
                <LazyLoadImage className="card-img"  effect="blur" 
                    src={props.productImg ? props.productImg : dummyAvatar} alt={props.productName} />
                {/* <CardImg src={props.productImg ? props.productImg : dummyAvatar} alt={props.productName} /> */}
            </div>
        </Link>
        <CardBody>
                <Row>
                    <Col xs="9">
                        <Link to={"/product/" + props.productId}>
                            <CardTitle title={props.productTitle}>{props.productTitle}</CardTitle>
                        </Link>
                        <CardSubtitle>{props.productSubtitle}</CardSubtitle>
                        <CardText>{props.productText}</CardText>
                    </Col>

                    {
                        props.allowBookmark ?
                        <Col xs="3">
                            <Button color="link" className="bookmark">
                                <FontAwesomeIcon icon={["far", "bookmark"]} color="gray" />
                            </Button>
                        </Col>
                        :
                        null
                    }
                </Row>
            {
                props.dealer === "Dealership" ?
                <div>
                    <hr />
                    <Link to={"/dealer/" + props.userId}>
                        <Row className="company-details">
                            <Col xs="3">
                                <CardImg src={props.dealerPic} alt="Company logo" />
                            </Col>
                            <Col xs="5" className="px-0">
                                <CardTitle>{props.dealerName}</CardTitle>
                            </Col>
                            <Col xs="4" className="pl-0 text-right">
                                {
                                    props.dealer ?
                                    <div className="company-rating">
                                        <img src={StarIcon} alt="Star icon" className="img-fluid mr-2" />
                                        <Label>{props.dealerRating}</Label>
                                    </div>
                                    :
                                    null              
                                }
                            </Col>
                        </Row>
                    </Link>
                </div>
                :
                <div>
                    <hr />
                    <Row className="company-details">
                        <Col xs="12">
                            <CardTitle>Private Seller</CardTitle>
                        </Col>
                    </Row>
                    
                </div>
            }
        </CardBody>
    </Card>
  );
}

export default ProductCard;
