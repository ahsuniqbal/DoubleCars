import React from 'react';
import { Col,  Row, Label, Card,CardBody, CardImg, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dealerprofile from '../../../assets/DealerProfileImage.png';
import '../styles/SellerDetails.css'
const SellerDetails = () => {
    return(
        <div>
            <Card>
                <CardBody>
                    <Row>
                        <Col md = "7">
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
                                <Col md = "8">
                                    <h6 className = "about-seller-head">About seller</h6>
                                    <p className = "seller-details-p">Contrary to popular belief, Lorem Ipsum is not slimi random text.
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old. Richard McClintock.</p>
                                </Col>
                                <Col md = "4">
                                    <h6 className = "contact-details">Contact Details</h6>
                                    <p className = "contact-details-p">+1 2345 78974</p>
                                    <p className = "contact-details-p">hellochance@gmail.com</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                        <div className = "vertical-line"></div>
                        </Col>
                        
                        <Col md = "4" className = "text-center">
                        
                            {/* Review box aye ga  */}
                            <h1 className = "rate-label">4.45</h1>
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#DBDBDB" size="1x" className="mr-1" /> <br/>
                            <Label className = "reviews-label"> 154 reviews</Label> <br/>
                            <Button size = "lg"  className = "read-reviews-button primary mt-4">Read reviews</Button> 
                        </Col>
                        </Row>  
            </CardBody>
        </Card>
    </div>
    )
}

export default SellerDetails;