import React from 'react';
import ContactMap from './ContactMap';
import {Row, Col, Label} from 'reactstrap'
import ContactusDemo from '../../../assets/ContactusDemo.png'
const ContactAbout = () => {
    return(
        <div>
            {/* <div >
                
            </div> */}
            <Row xs = "12" md = "12" sm = "12" className = "contact-image-div ">
                <Col xs = "12" md = "12" className = "contact-us-image-column">
                    <img className = "contactus-image" src = {ContactusDemo}/>
                </Col>
            </Row>

            <h5 className = "about-dc-head" >A Little About Us</h5>
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