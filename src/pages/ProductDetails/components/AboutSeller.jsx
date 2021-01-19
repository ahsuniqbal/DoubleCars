import React, { useState, useEffect } from 'react';
import { Col,  Row, Label, Card,CardBody, CardImg, Button,Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ad1 from '../../../assets/Advertisement3.png'
import Ad2 from '../../../assets/Advertisment2.png'
import '../styles/AboutSeller.css'
import { Link } from 'react-router-dom';
import { GetSellerDetails } from '../api/GetRequests';
import { Phone, Mail } from 'react-feather';

import DealerProfileImage from '../../../assets/DealerProfileImage.png'

const SellerDetails = (props) => {
    const [dealer, setDealer] = useState([]);

    useEffect(() => {
        GetSellerDetails(props.userId).then(doc => {
            setDealer(doc[0]);
        })
        .catch(error => {
            alert(error.message);
        });
    }, []);

    return(
        <div>
            <CardBody className = "interested-card">
                <h6 className = "interest-label">Are you interested in this car?</h6>
                <h6 className = "seller-know-label mb-3">Let the seller know about your interest</h6>
                <Input type = "email" className = "interested-textfield" placeholder = "Your email address"></Input>
                <textarea class="form-control message-box" rows="4" placeholder = "Message (Optional)"></textarea>
                <Button color = "primary" size = "lg" block className = "contact-seller-button mt-4">Send Message</Button>
                
            </CardBody>
            
            {
            dealer ?
                <Card className="mt-5 about-seller-card">
                    <CardBody>
                        <Row>
                            <Col xs="3">
                                <div className = "seller-name-image">
                                    <CardImg className = "seller-img" src={dealer.profilePic} alt={dealer.fullName} height = "100%" width = "100%"/>
                                </div>
                                
                            </Col>
                            <Col xs = "9" className = "seller-column">
                                <Label className = "seller-name">{dealer.fullName}</Label> <br/>
                                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                <FontAwesomeIcon icon={["fas", "star"]} color="#DBDBDB" size="1x" className="mr-2" />
                                <Label className = "seller-rate">4.1</Label>
                            </Col>
                        </Row>
                        
                        <h6 className = "about-seller-head mt-4">About seller</h6>
                        <p className = "about-seller-text">{dealer.aboutMe ? dealer.aboutMe : "This seller has provided no information"}</p>
                        <h6 className = "contact-detail-head mb-4">Contact Details</h6>
                        <a href={"tel:" + dealer.phNum} className = "contact-detail-text"><Phone color="#1C67CE" size={20} className = "mr-3"/>{dealer.phNum}</a>
                        <br />
                        <a href={"mailto:" + dealer.email} className = "contact-detail-text"> <Mail color="#1C67CE" size={20} className = "mr-3"/>{dealer.email}</a>
                        <Link className = "view-inv-link" to={'/dealer/' + props.userId}>
                            <Button color = "primary" size = "lg" block className = "view-inventory-button  mt-4">View Inventory</Button>
                        </Link>
                    </CardBody>
                </Card> : null
            }
            <Row>
                <Col className = "mt-3">
                    <div className="add-title">Ad by DoubleCars</div>
                    <img src = {Ad1} alt = "ad" className = "img-fluid"/>
                </Col>
            </Row>
            <Row>
                <Col className = "mt-3">
                    <img src = {Ad2} alt = "ad" className = "img-fluid"/>
                </Col>
            </Row>
        </div>
    )
}

export default SellerDetails;