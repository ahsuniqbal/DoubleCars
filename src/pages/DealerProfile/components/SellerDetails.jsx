import React ,{useState} from 'react';
import {Row, Col, Button, CardBody, CardImg, Label, Card} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/SellerDetails.css';
import { Phone, Mail } from 'react-feather';
import CommentModal from './CommentModal';


const SellerDetails = (props) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return(
        // Public seller card starts here
            <Card className = "seller-card">
                {
                    props.userRole === "Dealership" ?
                
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
                                    
                                    <p className = "contact-details-p"><Phone color="#1C67CE" size={20} className = "mr-2"/>{props.phNum}</p>
                                    <p className = "contact-details-p"><Mail color="#1C67CE" size={20} className = "mr-2"/>{props.email}</p>
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
                            <Button size = "lg" block className = "read-reviews-button primary mt-4 float-left" onClick={toggle}>Read reviews</Button> 
                            <CommentModal isOpen={modal} toggle={toggle} />
                           
                            
                        </Col>
                        </Row>  
                </CardBody>
            :
                 <CardBody>
                     <Row>
                         <Col md = "12">
                             <Row>
                                 <Col md = "2" xs = "12">
                                     {
                                        props.profilePic ?
                                        <CardImg className = "Dealer-Profile-image" src={props.profilePic} alt="Company logo" />
                                        :
                                        null
                                    }
                                    
                                </Col>
                                <Col md = "10" xs = "12">
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
                                <Col md = "8">
                                    <h6 className = "about-seller-head">About seller</h6>
                                    {
                                        props.aboutMe ? 
                                        <p className = "seller-details-p">{props.aboutMe}</p>
                                        :
                                        <p className = "seller-details-p"> This seller has provided no information</p>
                                    }
                                </Col>
                                <Col md = "4">
                                    <h6 className = "contact-details">Contact Details</h6>
                                    
                                    <p className = "contact-details-p"><Phone color="#1C67CE" size={20} className = "mr-2"/>{props.phNum}</p>
                                    <p className = "contact-details-p"><Mail color="#1C67CE" size={20} className = "mr-2"/>{props.email}</p>
                                </Col>
                            </Row>
                        </Col>
                        
                        </Row>  
            </CardBody>
        }
        </Card>
        
    )
}

export default SellerDetails;