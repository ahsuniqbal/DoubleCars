import React from 'react';
import '../styles/Contact.css';
import {Row, Col,Button, Input, Label} from 'reactstrap'
const ContactForm = () => {
    return(
        <div>
            <h4 className = "contactus-head">Contact Us</h4>
            <Label className = "contact-label">Feel free to get in touch with us for any kind of query.</Label>
            <Input type="select" required className="contact-dropdown">
                <option value=""disabled selected>Make choice</option>
                <option value="Option-1">Option 1</option>
                <option value="Option-2">Option 2</option>
                <option value="Option-3">Option 3</option>
            </Input>
            <Input type = "text" className = "fullname-textfield" placeholder = "Full Name"></Input>
            <Input type = "email" className = "email-textfield" placeholder = "Your Email"></Input>
            <textarea class="form-control message-box" rows="6" placeholder = "Message"></textarea>
            <Row>
                <Col className = "contactus-inner-column" xs = "12" md = "9" sm = "12">
                    <Label className = "agree-label">By sending message you agree with our terms and conditions and privacy policy </Label>
                </Col>
                <Col className = "contactus-inner-column-2" xs = "12" md = "3">
                    <Button color = "primary" size = "lg" block className = "send-button float-right">Send</Button>
                </Col>
            </Row>
    </div>
    )
}

export default ContactForm;