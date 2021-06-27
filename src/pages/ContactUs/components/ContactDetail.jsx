
import React from 'react';
import '../styles/Contact.css';
import ContactMessage from '../../../assets/contact-message.svg'
import ContactLocation from '../../../assets/contact-location.svg'
import ContactPhone from '../../../assets/contact-phone.svg'
import {Row, Col, Label} from 'reactstrap'
const ContactDetail = () => {
    return(
        <div>
            <Row className = "d-flex justify-content-center">
                <Col xs = "12" md = "3" className = "lower-outer-col">
                    <Row>
                        <Col className = "contact-icon-column icons-row-mobile"  xs = "12" md = "3">
                            <img src = {ContactMessage} alt = "message-icon"/>
                        </Col>
                        <Col  xs = "12" md = "9" className = "icons-row-mobile">
                            <Label className = "contact-label-head">Email Address</Label> <br/>
                            <Label className = "contact-detail">Contact@doublecars.com</Label>
                        </Col>
                    </Row>
                </Col>
                <Col md = "1" className = "lower-outer-col v-line">
                    <div className = "vertical-line"></div>
                </Col>
                <Col xs = "12" md = "3" className = "lower-outer-col">
                    <Row>
                        <Col  xs = "12" md = "3" className = "contact-icon-column icons-row-mobile">
                            <img  src = {ContactPhone} alt = "Phone-icon"/>
                        </Col>
                        <Col  xs = "12" md = "9" className = "icons-row-mobile">
                            <Label className = "contact-label-head">Phone Number</Label> <br/>
                            <Label className = "contact-detail">+1 2634 546487</Label>
                        </Col>
                    </Row>
                </Col>
                <Col md = "1" className = "lower-outer-col v-line">
                    <div className = "vertical-line"></div>
                </Col>
                <Col xs = "12" md = "3" className = "lower-outer-col">
                    <Row>
                        <Col className = "contact-icon-column icons-row-mobile" xs = "12" md = "3">
                            <img src = {ContactLocation} alt = "message-icon"/>
                        </Col>
                        <Col  xs = "12" md = "9" className = "icons-row-mobile">
                            <Label className = "contact-label-head">Office</Label> <br/>
                            <Label className = "contact-detail">145 AB, Santa Ana, CA</Label>
                        </Col>
                    </Row>
                </Col>
            </Row>
    </div>
    )
}

export default ContactDetail;