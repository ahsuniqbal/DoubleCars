import React from 'react';
import { Col, Row, Label } from 'reactstrap';
import '../styles/Comments.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from 'react-bootstrap/ProgressBar'
const Comments = () => {
    return(
        <div>
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
                <Col md = "5">
                
                <ProgressBar variant="warning" now={60} />   
                <ProgressBar className = "mt-3" variant="warning" now={20} /> 
                <ProgressBar className = "mt-3" variant="warning" now={12} /> 
                <ProgressBar className = "mt-3" variant="warning" now={59} /> 
                <ProgressBar className = "mt-3" variant="warning" now={45} />            
                </Col>
            </Row>
            
        </div>
    );
};

export default Comments;