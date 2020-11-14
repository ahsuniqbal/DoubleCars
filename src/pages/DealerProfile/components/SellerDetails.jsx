import React from 'react';
import { Col,  Row, Label, Card,CardBody, CardImg, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/SellerDetails.css';

const SellerDetails = (props) => {
    return(
            <Card className = "seller-card">
                <CardBody>
                    <Row>
                        <Col md = "8">
                            <Row>
                                <Col md = "2">
                                    {
                                        props.profilePic ?
                                        <CardImg className = "Dealer-Profile-image" src={props.profilePic} alt="Company logo" />
                                        :
                                        null
                                    }
                                    
                                </Col>
                                <Col md = "10">
                                    <Label className = "dealer-name">{props.fullName}</Label> <br/>
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
                                    {
                                        props.aboutMe ? 
                                        <p className = "seller-details-p">{props.aboutMe}</p>
                                        :
                                        <p className = "seller-details-p">This seller has provided no information</p>
                                    }
                                    
                                </Col>
                                <Col md = "5">
                                    <h6 className = "contact-details">Contact Details</h6>
                                    
                                    <p className = "contact-details-p"><FontAwesomeIcon icon="phone" color = "#1C67CE" className = "mr-2" />{props.phNum}</p>
                                    <p className = "contact-details-p"><FontAwesomeIcon icon="envelope" color = "#1C67CE" className = "mr-2"/>{props.email}</p>
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
    )
}

export default SellerDetails;