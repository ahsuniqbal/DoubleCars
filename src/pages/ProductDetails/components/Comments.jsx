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
                <Col md = "3" xs = "12" sm = "12" className = ""> 
                            <h1 className = "comment-rate-label">4.45</h1>
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1 font-rate-stars" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1 font-rate-stars" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1 font-rate-stars" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-1 font-rate-stars" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#DBDBDB" size="1x" className="mr-1 font-rate-stars" /> <br/>
                            <Label className = "comment-reviews-label"> 154 reviews</Label> <br/>
                           
                </Col>
                <Col md = "9">
                    <Row>
                        <Col xs = "2" md = "1">
                            <Label>5</Label>
                        </Col>
                        <Col xs = "12" md = "10">
                        <ProgressBar variant="warning" now={60} className = "comment-progress-bar"/> 
                        </Col>
                        <Col xs = "2" md = "1">
                            <Label>54</Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = "2" md = "1">
                            <Label>4</Label>
                        </Col>
                        <Col xs = "12" md = "10">
                        <ProgressBar variant="warning" now={20} className = "comment-progress-bar"/> 
                        </Col>
                        <Col xs = "2" md = "1">
                            <Label>54</Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = "2" md = "1">
                            <Label>3</Label>
                        </Col>
                        <Col xs = "12" md = "10">
                        <ProgressBar variant="warning" now={76} className = "comment-progress-bar"/> 
                        </Col>
                        <Col xs = "2" md = "1">
                            <Label>54</Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = "2" md = "1">
                            <Label>2</Label>
                        </Col>
                        <Col xs = "12" md = "10">
                        <ProgressBar variant="warning" now={32} className = "comment-progress-bar"/> 
                        </Col>
                        <Col xs = "2" md = "1">
                            <Label>54</Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = "2" md = "1">
                            <Label>1</Label>
                        </Col>
                        <Col xs = "12" md = "10">
                        <ProgressBar variant="warning" now={1} className = "comment-progress-bar"/> 
                        </Col>
                        <Col xs = "2" md = "1">
                            <Label>54</Label>
                        </Col>
                    </Row>
                  
                   
                </Col>
            </Row>
            <Row >
                <Col md = "1" className = "comment-img-col">
                    <img src = {CommentDemoImage} alt="" className = "img-fluid user-comment-img"/>
                </Col>
                <Col md = "7">
                    <Row>
                        <Col xs = "12" className = "name-data-col">
                            <Label className = "comment-username">Kiltos Kyriaco</Label> <br/>
                            <Label className = "comment-date">March, 2020</Label>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs = "12" md = "12">
                    <Label className = "user-comment">Lorem ipsum dolor sit amet, consectetur adipiing elit. Duis ultrices magna et dui consequat.</Label>
                </Col>
            </Row>
            </Col>
        </Row>
    );
};

export default Comments;