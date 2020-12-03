import React from 'react';
import '../styles/Contact.css';
import ContactMessage from '../../../assets/contact-message.svg'
import ContactLocation from '../../../assets/contact-location.svg'
import ContactPhone from '../../../assets/contact-phone.svg'

import {Row, Col, Nav, NavItem, Button, NavLink, Container, Input, Label} from 'reactstrap'
import ContactForm from './ContactForm';
import ContactDetail from './ContactDetail';
import ContactAbout from './ContactAbout';


const Contact = () => {
    return(
        <body className = "contactus-body">
            <Container>
                <Row>
                    <Col xs = "12" md = "6" sm = "12" className = "contactus-column">
                        <ContactForm/>
                    </Col>

                    <Col xs = "12" md = "5" sm = "12" className = "offset-md-1 about-contact-column">
                        <ContactAbout/>
                    </Col>    
                </Row>

                <Row className = "middle-row">
                    <Col xs = "12" md = "12" sm = "12">
                        <hr/>
                    </Col>
                </Row>
                <ContactDetail/>
            </Container>
    </body>
    )
}

export default Contact;