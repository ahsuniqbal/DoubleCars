import React from 'react';
import '../styles/Contact.css';
import ContactMessage from '../../../assets/contact-message.svg'
import ContactLocation from '../../../assets/contact-location.svg'
import ContactPhone from '../../../assets/contact-phone.svg'
import {Row, Col, Nav, NavItem, Button, NavLink, Container, Input, Label} from 'reactstrap'

const Contact = () => {
    return(
        <body className = "contactus-body">
        <Container>
            <Row>
                <Col xs = "12" md = "6" sm = "12" className = "contactus-column">
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
                </Col>




                <Col xs = "12" md = "5" sm = "12" className = "offset-md-1 about-contact-column">
                    <h5 className = "about-dc-head" >About Double Cars</h5>
                    <Label className = "about-dc-text">Maecenas ante lacus, viverra is in,
                    egestas tincidunt nulla. Aliquam mi lectus,
                    eleifend eget felis eget,Maecenas ante lacus,
                    viverr is in, egestas tincidunt nulla. Aliquam
                    mi lectus.</Label>
                    {/* <Row>
                        <Col xs = "6" md = "12" sm = "6">
                            <iframe class = "contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28949.0879105445!2d67.04086462854204!3d24.910395202334662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338cd760d5c5b%3A0x9210d13cbed707c7!2sNipa!5e0!3m2!1sen!2s!4v1606899447472!5m2!1sen!2s" width="492px" height="280px" ></iframe>
                        </Col>
                    </Row> */}
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d844105.1271953628!2d72.20002699222104!3d34.2667672955826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x38de207ace636f0b%3A0xf6f838eb0bb2d5eb!2sMuzaffarabad!3m2!1d34.3551036!2d73.4769458!4m5!1s0x38dc3dbd62484e13%3A0xf24b8f7632aff5f3!2sSwat%2C%20Pakistan!3m2!1d34.8065135!2d72.35479149999999!5e0!3m2!1sen!2s!4v1606899333948!5m2!1sen!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
                </Col>
                     
            </Row>

            <Row className = "middle-row">
                <Col xs = "12" md = "12" sm = "12">
                    <hr/>
                </Col>
            </Row>

            <Row className = "d-flex justify-content-center ">
                    <Col xs = "12" md = "3" className = "lower-outer-col">
                        <Row>
                            <Col className = "contact-icon-column"  xs = "6" md = "3">
                                <img src = {ContactMessage} alt = "message-icon"/>
                            </Col>
                            <Col  xs = "6" md = "9">
                                <Label className = "contact-label-head">Email Address</Label> <br/>
                                <Label className = "contact-detail">Contact@Doublecars.com</Label>
                            </Col>
                        </Row>

                    </Col>
                    <Col md = "1" className = "lower-outer-col">
                        <div className = "vertical-line"></div>
                    </Col>
                    <Col xs = "12" md = "3" className = "lower-outer-col">
                    <Row>
                            <Col  xs = "6" md = "3" className = "contact-icon-column">
                                <img  src = {ContactPhone} alt = "Phone-icon"/>
                            </Col>
                            <Col  xs = "6" md = "9">
                                <Label className = "contact-label-head">Phone</Label> <br/>
                                <Label className = "contact-detail">+1 2634 546487</Label>
                            </Col>
                        </Row>
                    </Col>
                    <Col md = "1" className = "lower-outer-col">
                        <div className = "vertical-line"></div>
                    </Col>
                    <Col xs = "12" md = "3" className = "lower-outer-col">
                    <Row>
                        <Col className = "contact-icon-column" xs = "6" md = "3">
                            <img src = {ContactLocation} alt = "message-icon"/>
                        </Col>
                        <Col  xs = "6" md = "9" >
                            <Label className = "contact-label-head">Office</Label> <br/>
                            <Label className = "contact-detail">145 AB, Santa Ana, CA</Label>
                        </Col>
                        </Row>
                    </Col>
            </Row>
            
           
            
        </Container>
    </body>
    )
}

export default Contact;