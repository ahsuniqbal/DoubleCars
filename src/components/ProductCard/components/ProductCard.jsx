import React,{ useState, useEffect} from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Col, Label, Button, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarIcon from '../../../assets/star.svg';
import { Link } from 'react-router-dom';
import dummyAvatar from '../../../assets/dummyAvatar.jpg';
import '../styles/ProductCard.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {postSaveCar} from '../api/post'

const ProductCard = (props) => {
    const [saveId, setSaveId] = useState(null)

    useEffect(() => {
        setSaveId(props.saveId)
    },[])

    const saveCarFunc = (productId) => {
        var userId;
        if(localStorage.getItem("userId") && localStorage.getItem("userId") !== "undefined"){
            userId = localStorage.getItem('userId')
        }else{
            alert('You need to login First')
            return
        }
        const obj = {
            productId,userId
        }
        postSaveCar(obj)
        .then(doc => {
            if(doc.code === -1){
                setSaveId(doc.saveId)
            }else{
                alert(doc.message)
            }
        })
        .catch(e => {
            alert(e.message)
        })
    }


  return (
    <Card className="product-card mb-3">
        {/* Link to the product details page */}
        <Link to={"/product/" + props.productId}>
            <div className="product-img">
                {
                    // The product badge over the the primary image
                    props.productBadge ? <Badge color="primary">{props.productBadge}</Badge> : null
                }
                {/* Lazy load component used for product cover image */}
                <LazyLoadImage className="card-img"  effect="blur" 
                    src={props.productImg ? props.productImg : dummyAvatar} alt={props.productName} title={props.productName} />
                {/* <CardImg src={props.productImg ? props.productImg : dummyAvatar} alt={props.productName} /> */}
            </div>
        </Link>
        <CardBody>
            <Row>
                <Col xs="9">
                    {/* Link to the product details page */}
                    <Link to={"/product/" + props.productId}>
                        {/* Name of the car */}
                        <CardTitle title={props.productTitle}>{props.productTitle}</CardTitle>
                    </Link>
                    {/* Subtitle will show mileage and zip code */}
                    <CardSubtitle>{props.productSubtitle}</CardSubtitle>
                    {/* Price of the car */}
                    <CardText>{props.productText}</CardText>
                </Col>
                {
                    // The bookmark button
                    saveId ?
                        null
                    :
                    <Col xs="3">
                        <Button onClick={() => saveCarFunc(props.productId)} color="link" className="bookmark">
                            <FontAwesomeIcon icon={["far", "bookmark"]} />
                        </Button>
                    </Col>
                }
            </Row>
            {
                // If the dealer is present then show the bottom of the product card else hide it
                props.dealer ? 

                // If the dealer is dealership
                props.dealer === "Dealership" ?
                <div>
                    <hr />
                    {/* Link to dealers profile page */}
                    <Link to={"/dealer/" + props.userId}>
                        <Row className="company-details">
                            <Col xs="3">
                                {/* Profile pic of the dealer */}
                                <CardImg src={props.dealerPic} alt="Company logo" />
                            </Col>
                            <Col xs="5" className="px-0">
                                {/* Name of the dealer */}
                                <CardTitle title={props.dealerName}>{props.dealerName}</CardTitle>
                            </Col>
                            <Col xs="4" className="pl-0 text-right">
                                {/* Rating star and numbers */}
                                <div className="company-rating">
                                    <img src={StarIcon} alt="Star icon" className="img-fluid mr-2" />
                                    <Label>{props.dealerRating}</Label>
                                </div>    
                            </Col>
                        </Row>
                    </Link>
                </div>
                :
                <div>
                    <hr />
                    {/* Link to private seller's profile page */}
                    <Link to={"/dealer/" + props.userId}>
                        <Row className="company-details private-seller">
                            <Col xs="3">
                                {/* Profile pic of the private seller */}
                                <CardImg src={props.dealerPic} alt="Company logo" />
                            </Col>
                            <Col xs="4" className="px-0">
                                {/* Name of the private seller */}
                                <CardTitle title={props.dealerName}>{props.dealerName}</CardTitle>
                            </Col>
                            <Col xs="5" className="pl-0 text-right">
                                <Label>Private Seller</Label>    
                            </Col>
                        </Row>
                    </Link>
                </div>
                :
                null
            }
        </CardBody>
    </Card>
  );
}

export default ProductCard;
