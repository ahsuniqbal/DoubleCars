import React from 'react';
import { Col, Row, Label } from 'reactstrap';
import '../styles/Comments.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from 'react-bootstrap/ProgressBar'
import CommentDemoImage from '../../../assets/CommentDemoImage.png'
const Comments = () => {
    return(
        <Row>
            <Col>
           
            <Row>
                <Col md = "12">
                    <h1 className = "dealer-review-head">Dealer Reviews</h1>
                </Col>
            </Row>

            <Row>
                <Col md = "3" xs = "12" sm = "12" className = "text-center"> 
                            <h1 className = "rate-label">4.45</h1>
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1 font-rate-stars" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1 font-rate-stars" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1 font-rate-stars" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1 font-rate-stars" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#DBDBDB" size="1x" className="mr-1 font-rate-stars" /> <br/>
                            <Label className = "reviews-label"> 154 reviews</Label> <br/>
                           
                        </Col>
                <Col md = "9">
                
                <ProgressBar variant="warning" now={60} />   
                <ProgressBar className = "mt-3" variant="warning" now={20} /> 
                <ProgressBar className = "mt-3" variant="warning" now={12} /> 
                <ProgressBar className = "mt-3" variant="warning" now={59} /> 
                <ProgressBar className = "mt-3" variant="warning" now={45} />            
                </Col>
            </Row>
            <Row >
                <Col md = "2">
                    <img src = {CommentDemoImage} className = "img-fluid comment-img" width = "auto"/>
                </Col>
                <Col md = "6">
                    <Row>
                        <Col xs = "12">
                            <Label>Name</Label> <br/>
                            <Label>Date</Label>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs = "12" md = "12">
                    <Label>lLorem ipsum dolor sit amet, consectetur adipiing elit. Duis ultrices magna et dui consequat.</Label>
                </Col>
            </Row>
            </Col>
        </Row>
    );
};

export default Comments;