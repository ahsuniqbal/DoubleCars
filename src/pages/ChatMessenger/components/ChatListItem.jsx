import React from 'react';
import { Row, Col, CardImg, Label } from 'reactstrap';
import personImg from '../../../assets/person-image.png';
import '../styles/ChatListItem.css';

const ChatListItem = () => {
    return (
        <Row className="chatlist-item" style={{backgroundColor: 'white'}}>
            <Col xs="3">
                <CardImg src={personImg} className="img-fluid" />    
            </Col>
            <Col xs="6">
                <Label className="name">Katren Mark</Label>
                <Label className="last-msg">2014 Audi A8 V4A</Label>
            </Col>
            <Col xs="3" className="text-center">
                <Label className="time">12 min</Label>
                <div className="unread-number">1</div>
            </Col>
        </Row>
    )
}

export default ChatListItem;