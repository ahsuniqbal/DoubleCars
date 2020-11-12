import React from 'react';
import { Col,  Row, Label, Card,CardBody, CardImg, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dealerprofile from '../../../assets/DealerProfileImage.png';
import '../styles/SellerDetails.css'
const SellerDetails = () => {
    return(
        <div>
            <Card className = "seller-card">
                <CardBody>
                    <Row>
                        <Col md = "8">
                            <Row>
                                <Col md = "2">
                                    <CardImg className = "Dealer-Profile-image" src={Dealerprofile} alt="Company logo" />
                                </Col>
                                <Col md = "10">
                                    <Label className = "dealer-name">One chance auto</Label> <br/>
                                    <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                    <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                    <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                    <FontAwesomeIcon icon={["fas", "star"]} color="#DBDBDB" size="1x" className="mr-2" />
                                    <FontAwesomeIcon icon={["fas", "star"]} color="#DBDBDB" size="1x" className="mr-2" />
                                    <Label style= {{color: "#FFC061"}}>4.2</Label>
                                </Col>
                            </Row>
                            <Row className = "mt-3">
                                <Col md = "7">
                                    <h6 className = "about-seller-head">About seller</h6>
                                    <p className = "seller-details-p">Contrary to popular belief, Lorem Ipsum is not slimi random text.
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old. Richard McClintock.</p>
                                </Col>
                                <Col md = "5">
                                    <h6 className = "contact-details">Contact Details</h6>
                                    
                                    <p className = "contact-details-p"><FontAwesomeIcon icon="phone" color = "#1C67CE" className = "mr-2" />+1 2345 78974</p>
                                    <p className = "contact-details-p"><FontAwesomeIcon icon="envelope" color = "#1C67CE" className = "mr-2"/>hellochance@gmail.com</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className = "ml-4">
                            <div className = "vertical-line"></div>
                        </Col>
                        
                        
                        
                        <Col md = "3" xs = "12" sm = "12" className = "text-center">
                            
                            <h1 className = "rate-label">4.45</h1>
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1 font-rate-stars" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1 font-rate-stars" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1 font-rate-stars" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1 font-rate-stars" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#DBDBDB" size="1x" className="mr-1 font-rate-stars" /> <br/>
                            <Label className = "reviews-label"> 154 reviews</Label> <br/>
                            <Button size = "lg" block className = "read-reviews-button primary mt-4 float-left">Read reviews</Button> 
                           
                            
                        </Col>
                        </Row>  
            </CardBody>
        </Card>
    </div>
    )
}

export default SellerDetails;