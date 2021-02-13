import React from 'react';
import '../styles/Contact.css';
import {Row, Col,Button, Input, Label} from 'reactstrap'
import { nameValidation ,emailValidation} from '../../../utils/Validation';
import { ContactSupportSharp } from '@material-ui/icons';

const ContactForm = () => {

    const ContactUs=(e)=>{
        e.preventDefault();
        
        const userName = document.getElementById('name-id').value;
        const email = document.getElementById('email-id').value;
        if(nameValidation(userName)){
            // Name is okay
            document.getElementById('name-error-label').textContent = "";

            if(emailValidation(email)) {
                // mail is okay
                document.getElementById('email-error-label').textContent = "";
            }
             else {
                // mail is wrong
                document.getElementById('email-error-label').textContent = "Please enter a valid email address";
            }
        }
        else {
            // Name is wrong
            document.getElementById('name-error-label').textContent = "Please enter a valid name";
        }

    }
    return(
        <div>
            <h4 className = "contactus-head">Get in touch with us</h4>
            <Label className = "contact-label">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis, rutrum neque sit amet, ornare lorem. Donec est metus, sagittis a nunc suscipit, varius facilisis est. In hac habitasse platea dictumst.
                Donec laoreet ac ex eget rhoncus. Proin vel diam luctus, finibus mi ac.</Label>
            <Input type="select" required className="contact-dropdown">
                <option value=""disabled selected>Select Purpose</option>
                <option value="Option-1">Option 1</option>
                <option value="Option-2">Option 2</option>
                <option value="Option-3">Option 3</option>
            </Input>
            <Input type = "text" id='name-id' className = "fullname-textfield" placeholder = "Full Name"></Input>
            <div id="name-error-label" className="contact-error-label"></div>
            <Input type = "email" id='email-id' className = "email-textfield" placeholder = "Your Email"></Input>
            <div id="email-error-label" className="contact-error-label"></div>
            <textarea class="form-control message-box" rows="6" placeholder = "Message"></textarea>
            <Row>
                <Col className = "contactus-inner-column" xs = "12" md = "7" sm = "12">
                    <Label className = "agree-label">By sending message you agree with our terms and conditions and privacy policy </Label>
                </Col>
                <Col className = "contactus-inner-column" xs = "12" md = "2" sm = "12"></Col>
                <Col className = "contactus-inner-column-2" xs = "12" md = "3">
                    <Button color = "primary" onClick={(e)=>ContactUs(e)} size = "lg" block className = "send-button float-right">Send</Button>
                </Col>
            </Row>
    </div>
    )
}

export default ContactForm;