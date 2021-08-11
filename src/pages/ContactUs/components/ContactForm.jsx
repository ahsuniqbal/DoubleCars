import React, { useState } from 'react';
import '../styles/Contact.css';
import {Row, Col,Button, Input, Label,Form,FormGroup} from 'reactstrap'
import { nameValidation ,emailValidation} from '../../../utils/Validation';
import { ContactSupportSharp } from '@material-ui/icons';
import { CInput } from '@coreui/react';

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

                  // show success message
                document.getElementById('name-id').value=''
                document.getElementById('email-id').value='' 
                document.getElementById('dropdown-id').value=''
                document.getElementById('textarea-id').value='' 
                let successMsg=document.createElement('DIV')
                successMsg.className='success-msg-label'
                successMsg.innerHTML='Message sent successfully *'
                document.querySelector('.success-msg').appendChild(successMsg)
                setTimeout(()=>successMsg.remove(),3000)               
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
                <Form onSubmit={(e)=>ContactUs(e)} >
                   
                    <Input type="select" required name="select" className="contact-dropdown" id='dropdown-id'>
                        <option value=""disabled selected>Select Purpose</option>
                        <option value="Option-1">Car Information</option>
                        <option value="Option-2">Beta Version Complain</option>
                        <option value="Option-3">Payment issues</option>
                    </Input>
                   
                    <Input type = "text" id='name-id' className = "fullname-textfield" placeholder = "Full Name" required></Input>
                    <div id="name-error-label" className="contact-error-label"></div>
                    <Input type = "email" id='email-id' className = "email-textfield" placeholder = "Your Email" required></Input>
                    <div id="email-error-label" className="contact-error-label"></div>
                    <textarea id='textarea-id' class="form-control message-box" rows="6" placeholder = "Message" required ></textarea>
                    <div className="success-msg"></div>
                    <Row>
                        <Col className = "contactus-inner-column" xs = "12" md = "7" sm = "12">
                            <Label className = "agree-label">By sending message you agree with our terms and conditions and privacy policy </Label>
                        </Col>
                        <Col className = "contactus-inner-column" xs = "12" md = "2" sm = "12"></Col>
                        <Col className = "contactus-inner-column-2" xs = "12" md = "3">
                            <Button color = "primary"  size = "lg" block className = "send-button float-right">Send</Button>
                        </Col>
                    </Row>
            </Form>
    </div>
    )
}

export default ContactForm;