import React from 'react';
import { Col, Container, Row, Label, Card,CardBody, CardImg, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CompanyLogo from '../../../assets/company-logo.png';
import '../styles/SellerDetails.css'
const SellerDetails = () => {
    return(
        <div>
            <Card className="mt-4">
                    <CardBody>
                        <Row>
                            <Col md = "8">
                                <Row>
                                    <Col md = "3">
                                        <CardImg src={CompanyLogo} alt="Company logo"/>
                                    </Col>
                                    <Col md = "9">
                                        <Label>One chance auto</Label> <br/>
                                        <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                        <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                        <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                        <FontAwesomeIcon icon={["fas", "star"]} color="#DBDBDB" size="1x" className="mr-2" />
                                        <Label style= {{color: "#FFC061"}}>4.2</Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md = "8">
                                        <h6>About seller</h6>
                                        <p className = "text-secondary">Contrary to popular belief, Lorem Ipsum is not slimi random text.
                                        It has roots in a piece of classical Latin literature from 45 BC,
                                        making it over 2000 years old. Richard McClintock.</p>
                                    </Col>
                                    <Col md = "4">
                                        <h6>Contact Details</h6>
                                        <p className = ""><i className="fa fa-envelope "></i>+1 2345 78974</p>
                                        <p className = ""> <i className="fa fa-phone "></i>hellochance@gmail.com</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md = "4" className = "text-center">
                                {/* Review box aye ga  */}
                                <h1>4.45</h1>
                                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1" />
                                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1" />
                                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1" />
                                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1" />
                                <FontAwesomeIcon icon={["fas", "star"]} color="#DBDBDB" size="1x" className="mr-1" /> <br/>
                                <Label> 154 reviews</Label>
                                <Button size = "lg" block className = "read-reviews-button secondary mt-4">Read reviews</Button> 
                            </Col>
                        </Row>
                
                
                 
            </CardBody>
        </Card>
    </div>
    )
}

export default SellerDetails;