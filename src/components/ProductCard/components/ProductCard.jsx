import React,{ useState, useEffect} from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Col, Label, Button, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarIcon from '../../../assets/star.svg';
import { Link } from 'react-router-dom';
import dummyAvatar from '../../../assets/dummyAvatar.jpg';
import '../styles/ProductCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {postSaveCar} from '../api/post';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import LoginSignupModal from '../../../pages/Authentication/LoginSignupModal/LoginSignupModal';

const ProductCard = (props) => {

    const [savedProductId, setSavedProductId] = useState(props.isSave);
    const [popupModal, setPopupModal] = useState(false);

    const popupToggle = () => setPopupModal(!popupModal);

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
            if(doc.code == -1){
                
                if(window.location.pathname=='/saved-cars')
                {
                    window.location.reload()
                }
                else{
                    alert(doc.message)
                }
                
            }
            else {
                setSavedProductId(doc.saveId)  
            }
        })
        .catch(e => {
            console.log(e.message)
        })
    }


  return (
    <Card className="product-card">
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
                <Col xs={props.allowBookmark ? "9" : "12"}>
                    {/* Link to the product details page */}
                    <Link to={"/product/" + props.productId}>
                        {/* Name of the car */}
                        <CardTitle title={props.productTitle} >{props.productTitle}</CardTitle>
                    </Link>
                    {/* Subtitle will show mileage and zip code */}
                    <CardSubtitle>{props.productSubtitle}</CardSubtitle>
                    {/* Price of the car */}
                    <CardText>{props.productText}</CardText>
                </Col>
                {
                    // The bookmark button
                    props.allowBookmark ?
                    
                    savedProductId ? 
                        <Col xs="3">
                                <Button onClick={() => saveCarFunc(props.productId)} color="link" className="bookmark">
                                    <FontAwesomeIcon icon={faBookmark} style={{color:'#1C67CE'}} />
                                </Button> 
                            </Col>
                        :
                        <Col xs="3">
                            {
                            //condition to show login modal if user is not login on click of save icon
                                localStorage.getItem('userId') ?
                                    <Button onClick={() => saveCarFunc(props.productId)} color="link" className="bookmark">
                                        <FontAwesomeIcon icon={["far", "bookmark"]} />
                                    </Button> 
                                :
                                    <Button onClick={popupToggle} color="link" className="bookmark">
                                        <FontAwesomeIcon icon={["far", "bookmark"]} />
                                        <LoginSignupModal  isOpen={popupModal} toggle={popupToggle} />
                                    </Button>
                            }
                        </Col>
                    : null
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
                        {/* Remove private seller classname it's temporary used here to write label Dealer */}
                        <Row className="company-details private-seller">
                            <Col xs="2">
                                {/* Profile pic of the dealer */}
                                {/* <div className="image-div"> */}
                                    <CardImg src={props.dealerPic ? props.dealerPic : dummyAvatar} alt={props.dealerName} />
                                {/* </div> */}
                            </Col>
                            <Col xs="6" style={{paddingLeft: '10px'}}>
                                {/* Name of the dealer */}
                                <CardTitle title={props.dealerName}>{props.dealerName}</CardTitle>
                            </Col>
                            <Col xs="4" className="pl-0 text-right">
                                {/* Rating star and numbers */}
                                {/* <div className="company-rating">
                                    <img src={StarIcon} alt="Star icon" className="img-fluid mr-2" />
                                    <Label>{props.dealerRating}</Label>
                                </div>     */}
                                
                                <Label>Dealer</Label>    
                            
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
                            <Col xs="2">
                                {/* Profile pic of the private seller */}
                                {/* <div className="image-div"> */}
                                    <CardImg src={props.dealerPic ? props.dealerPic : dummyAvatar} alt={props.dealerName} />
                                {/* </div> */}
                            </Col>
                            <Col xs="6" style={{paddingLeft: '10px'}}>
                                {/* Name of the private seller */}
                                <CardTitle title={props.dealerName}>{props.dealerName}</CardTitle>
                            </Col>
                            <Col xs="4" className="pl-0 text-right">
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
