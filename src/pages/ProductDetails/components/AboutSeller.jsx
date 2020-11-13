import React, { useState, useEffect } from 'react';
import { Col,  Row, Label, Card,CardBody, CardImg, Button,Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ad1 from '../../../assets/Advertisement3.png'
import Ad2 from '../../../assets/Advertisment2.png'
import '../styles/AboutSeller.css'
import { Link } from 'react-router-dom';
import { GetSellerDetails } from '../api/GetRequests';

const SellerDetails = (props) => {
    const [dealer, setDealer] = useState([]);

    useEffect(() => {
        GetSellerDetails(props.userId).then(doc => {
            setDealer(doc[0]);
            console.log(doc[0])
        });
    }, []);

    return(
        <div>
            <CardBody className = "interested-card">
                <h6 className = "interest-label">Are you interested in this car?</h6>
                <h6 className = "seller-know-label mb-3">Let the seller know about your interest</h6>
                <Input type = "email" placeholder = "Your email address"></Input>
                <Button size = "lg" block className = "contact-seller-button primary mt-4"> Contact Seller</Button>
            </CardBody>
            
            {
                dealer ?
                <Card className="mt-4">
                    <CardBody className = "about-seller-card">
                        <Row>
                            <Col xs="3">
                                <CardImg src={dealer.profilePic} alt={dealer.fullName} />
                            </Col>
                            <Col xs = "9">
                                <Label>{dealer.fullName}</Label> <br/>
                                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                <FontAwesomeIcon icon={["fas", "star"]} color="#DBDBDB" size="1x" className="mr-2" />
                                <Label style= {{color: "#FFC061"}}>4.1</Label>
                            </Col>
                        </Row>
                        
                        <hr/>
                        <h6 className = "about-seller-head">About seller</h6>
                        <p className = "about-seller-text">{dealer.aboutMe ? dealer.aboutMe : "This seller has provided no information"}</p>
                        <h6 className = "contact-detail-head">Contact Details</h6>
                        <p className = "contact-detail"><FontAwesomeIcon icon={["fas", "phone"]} color="#1C67CE" size="1x" className="mr-2" />{dealer.phNum}</p>
                        <p className = "contact-detail"><FontAwesomeIcon icon={["fas", "phone"]} color="#1C67CE" size="1x" className="mr-2" />{dealer.email}</p>
                        <Link to={'/dealer/' + props.userId}>
                            <Button size = "lg" block className = "view-inventory-button primary mt-4"> View Inventory</Button>
                        </Link>
                    </CardBody>
                </Card>
                :
                null

            }
            

        <Row>
            <Col className = "mt-3">
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