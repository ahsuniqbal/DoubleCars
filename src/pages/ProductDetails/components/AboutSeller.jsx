import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import { Col,  Row, Label, Card,CardBody, CardImg, Button,Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ad1 from '../../../assets/Advertisement3.png'
import Ad2 from '../../../assets/Advertisment2.png'
import '../styles/AboutSeller.css'
import { Link } from 'react-router-dom';
import { GetSellerDetails } from '../api/GetRequests';
import { Phone, Mail } from 'react-feather';
import CheckMark from '../../../assets/dealersCheckMark.png';
// import DealerProfileImage from '../../../assets/DealerProfileImage.png'
import { emailValidation} from '../../../utils/Validation';
import { isLogin } from '../../../config/LoginAuth';
const firebase = require('firebase').default
require('../../../components/Firebase/database')
const SellerDetails = (props) => {
    const [dealer, setDealer] = useState([]);
    const history = useHistory()
    useEffect(() => {
       
        GetSellerDetails(props.userId).then(doc => {
            setDealer(doc[0]);
        })
        .catch(error => {
            alert(error.message);
        });
    }, []);


    const sendMessage=(e)=>{
        e.preventDefault();
        const email=document.getElementById('email-id')
        if(emailValidation(email)) {
            // mail is okay
            document.getElementById('email-error-label').textContent = "";
               // show success message
               document.getElementById('name-id').value=''
               document.getElementById('textarea-id').value='' 
               let successMsg=document.createElement('DIV')
               successMsg.className='success-msg-label'
               successMsg.innerHTML='message sent successfully *'
               document.querySelector('.success-msg').appendChild(successMsg)
               setTimeout(()=>successMsg.remove(),3000) 
        }
         else {
            // mail is wrong
            document.getElementById('email-error-label').textContent = "Please enter a valid email address";
        }
    }
    const chatMsg = (dealerId) => {
        var userId = localStorage.getItem('userId')
        var messageText = `REGARDING VEHICLE: ${props.details.yearCar} ${props.details.carName} ${props.details.mileage} Mileage $${props.details.price}` 
        var imageUrl = props.details.coverPic
        var userId = localStorage.getItem('userId')
            
            const strId = [userId, dealerId].sort().join('-')
            //var strId = "72-73"
            // console.log("final thing to send",obj,strId)
            firebase.firestore().collection("Chats").doc(strId).get()
            .then(snapshot => {
                if(snapshot.exists){
                    var updateObj = {
                        lastMessage : messageText,
                        lastMessageAt : firebase.firestore.Timestamp.now(),
                    }
                    firebase.firestore().collection("Chats").doc(strId)
                    .update(updateObj).then(() => {
                        var obj = {
                            messageId : "asdsa",
                            imageUrl : imageUrl,
                            messageImage : imageUrl,
                            multipleImagesList : null,
                            messageText : messageText,
                            messagedAt : firebase.firestore.Timestamp.now(),
                            senderId : userId
                        }
                        
                        firebase.firestore().collection("Chats").doc(strId).collection('Messages')
                        .doc().set(obj).then(() => {
                            //route kr k messenger per lay jaiga.
                            history.push('/chat?id='+strId)
                        })
                    })
                    
                }else{
                    var updateObj = {
                        lastMessage : messageText,
                        lastMessageAt : firebase.firestore.Timestamp.now(),
                        receiverHasRead : false,
                        profilePic : props.details.profilePic,
                        senderId : userId,
                        receiverId : dealerId,
                        receiverHasRead : true,
                        senderHasRead : false
                    }
                    firebase.firestore().collection("Chats").doc(strId)
                    .set(updateObj).then(() => {
                        var obj = {
                            messageId : "asdsa",
                            imageUrl : null,
                            messageImage : imageUrl,
                            multipleImagesList : null,
                            messageText : messageText,
                            messagedAt : firebase.firestore.Timestamp.now(),
                            senderId : userId
                        }
                        
                        firebase.firestore().collection("Chats").doc(strId).collection('Messages')
                        .doc().set(obj).then(() => {
                            //route kr k messenger per lay jaiga.
                            history.push('/chat?id='+strId)
                        })
                    })


                    
                }
            })
            .catch(e => {
                console.log('1',e.message)
            })
            
            
    }

    return(
        <div>
            {
                isLogin ? 
                <CardBody className = "interested-card">
                    <h6 className = "interest-label">Are you interested in this car?</h6>
                    <h6 className = "seller-know-label mb-3">Let the seller know about your interest</h6>
                    <Button onClick={e => chatMsg(props.userId)} color = "primary" size = "lg" block className = "contact-seller-button mt-4">Chat with Seller</Button>
                </CardBody> : 
                <CardBody className = "interested-card">
                    <h6 className = "interest-label">Are you interested in this car?</h6>
                    <h6 className = "seller-know-label mb-3">Let the seller know about your interest</h6>
                   
                    <Input type = "email" id='email-id' className = "interested-textfield" placeholder = "Your email address"></Input>
                    <div id="email-error-label" className="sellerPage-error-label"></div>
                    
                    <textarea class="form-control message-box" rows="4" placeholder = "Message (Optional)"></textarea>
                    <div className="success-msg"></div>
                    <Button color = "primary" onClick={(e)=>sendMessage(e)} size = "lg" block className = "contact-seller-button mt-4">Send Message</Button>
                </CardBody>
            }
            


            
            
            {
            dealer ?
                <Card className="mt-5 about-seller-card">
                    <CardBody>
                        <Row>
                            <Col xs="3">
                                <div className = "seller-name-image">
                                    <CardImg className = "seller-img" src={dealer.profilePic} alt={dealer.fullName} height = "100%" width = "100%"/>
                                </div>
                                
                            </Col>
                            <Col xs = "9" className = "seller-column">
                              
                                    <div className='d-flex '>
                                        <Label className = "seller-name">{dealer.fullName}</Label>
                                        <img src={CheckMark} className='seller-check'/>
                                    </div>
                                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                <FontAwesomeIcon icon={["fas", "star"]} color="#DBDBDB" size="1x" className="mr-2" />
                                <Label className = "seller-rate">4.1</Label>
                            </Col>
                        </Row>
                        
                        <h6 className = "about-seller-head mt-4">About seller</h6>
                        <p className = "about-seller-text">{dealer.aboutMe ? dealer.aboutMe : "This seller has provided no information"}</p>
                        <h6 className = "contact-detail-head mb-4">Contact Details</h6>
                        <a href={"tel:" + dealer.phNum} className = "contact-detail-text"><Phone color="#1C67CE" size={20} className = "mr-3"/>{dealer.phNum}</a>
                        <br />
                        <a href={"mailto:" + dealer.email} className = "contact-detail-text"> <Mail color="#1C67CE" size={20} className = "mr-3"/>{dealer.email}</a>
                        <Link className = "view-inv-link" to={'/dealer/' + props.userId}>
                            <Button color = "primary" size = "lg" block className = "view-inventory-button  mt-4">View Inventory</Button>
                        </Link>
                    </CardBody>
                </Card> : null
            }
            <Row>
                <Col className = "mt-3">
                    <div className="add-title">Ad by DoubleCars</div>
                    <img src = {Ad1} alt = "ad" className = "img-fluid"/>
                </Col>
            </Row>
            <Row>
                <Col className = "mt-3">
                    <img src = {Ad2} alt = "ad" className = "img-fluid"/>
                </Col>
            </Row>
        </div>
    )
}

export default SellerDetails;