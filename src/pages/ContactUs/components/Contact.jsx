import React from 'react';
import '../styles/Contact.css';

import {Row, Col, Nav, NavItem, Button, NavLink, Container, Input, Label} from 'reactstrap'

const Contact = () => {
    return(
        <body className = "contactus-body">
        <Container>
            <Row>
                <Col xs = "12" md = "6" className = "contactus-column">
                    <h4 className = "contactus-head">Contact Us</h4>
                    <Label className = "contact-label">Feel free to get in touch with us for any kind of query.</Label>
                    <Input type="select" className="selected-div">
                        <option value="">Select Purpose</option>
                        <option value="Option-1">Option 1</option>
                        <option value="Option-2">Option 2</option>
                        <option value="Option-3">Option 3</option>
                    </Input>
                    
                    <Input type = "text" className = "fullname-textfield" placeholder = "Full Name"></Input>
                    <Input type = "email" className = "email-textfield" placeholder = "Your Email"></Input>
                </Col>

                <Col xs = "12" md = "6" className = "contactus-column">
                </Col>
            </Row>
           
            
        </Container>
    </body>
    )
}

export default Contact;