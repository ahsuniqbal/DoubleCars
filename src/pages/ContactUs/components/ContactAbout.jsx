import React from 'react';
import ContactMap from './ContactMap';
import {Row, Col, Nav, NavItem, Button, NavLink, Container, Input, Label} from 'reactstrap'

import ContactusDemo from '../../../assets/ContactusDemo.png'
const ContactAbout = () => {
    return(
        <div>
        <div className = "">
                        <img src = {ContactusDemo}/>
                    </div>
                    <h5 className = "about-dc-head" >About Double Cars</h5>
                    <Label className = "about-dc-text">Maecenas ante lacus, viverra is in,
                    egestas tincidunt nulla. Aliquam mi lectus,
                    eleifend eget felis eget,Maecenas ante lacus,
                    viverr is in, egestas tincidunt nulla. Aliquam
                    mi lectus.</Label>
                    <Row>
                        <Col xs = "6" md = "12" sm = "6">
                            <ContactMap/>
                            </Col>
                    </Row>
    </div>
    )
}

export default ContactAbout;