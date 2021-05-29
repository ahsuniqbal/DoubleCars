import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import { Col,  Row, Label, Card,CardBody, CardImg, Button,Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ad1 from '../../../assets/Advertisement3.png'
import Ad2 from '../../../assets/Advertisment2.png'
import '../styles/AboutSeller.css'
import { Link } from 'react-router-dom';
import { GetSellerDetails } from '../api/GetRequests';
import { SendEmail,messageChatMail } from '../api/PostRequest';
import { Phone, Mail } from 'react-feather';
import dummyAvatar from '../../../assets/dummyAvatar.jpg';
import ClockIcon from '../../../assets/clock-icon.png';
import AdrressPinIcon from '../../../assets/pin-icon.png'
import SellerCheckMark from '../../../assets/seller-check-icon.png';
import PhoneIcon from '../../../assets/phone-icon.png'
import MessageIcon from '../../../assets/message-icon.png'
// import DealerProfileImage from '../../../assets/DealerProfileImage.png'
import { emailValidation} from '../../../utils/Validation';
import LoginSignupModal from '../../Authentication/LoginSignupModal/LoginSignupModal'
import { getLogin } from '../../../config/LoginAuth';
const firebase = require('firebase').default
require('../../../components/Firebase/database')


const SellerDetails = (props) => {

    
    const [dealer, setDealer] = useState([]);
    const history = useHistory()
    const [popupModal, setPopupModal] = useState(false);
    const popupToggle = () => setPopupModal(!popupModal);


    

    useEffect(() => {
       
        GetSellerDetails(props.userId).then(doc => {
            setDealer(doc[0]);
        })
        .catch(error => {
            console.log(error.message);
        });
    }, []);


    const sendMessage=(e)=>{
        e.preventDefault();
        const sent = document.getElementById('email-sent-label');
        sent.textContent = ""
        const email = document.getElementById('email-id').value;
        const msg = document.getElementById('message').value;


        console.log(props.details);
        
        if(emailValidation(email)) {
            // mail is okay
            document.getElementById('email-error-label').textContent = "";
               
            const obj = {
                email: email,
                message: msg,
                productId: props.details.productId
            }
            
            SendEmail(obj).then(doc => {
                sent.textContent = "Message sent successfully *"
                setTimeout(()=> sent.textContent="" ,3000);
            }).catch(error => {
                document.getElementById('email-error-label').textContent = error.message;
            })
            
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
        var vehiclePrice = props.details.price
        var vehicleSubTitle = props.details.mileage + " miles, " + props.details.location + ", " + props.details.zipCode
        var vehicleTitle = props.details.carName
            
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
                    const objInq = {
                        messageId : "asdas",
                        enquiryText : messageText,
                        messageAt : firebase.firestore.Timestamp.now(),
                        vehicleImage : imageUrl,
                        vehiclePrice : vehiclePrice + "",
                        vehicleSubTitle  : vehicleSubTitle,
                        vehicleTitle : vehicleTitle,

                    }
                    firebase.firestore().collection("Chats").doc(strId)
                    .collection('Enquiries').doc().set(objInq)
                    .then(() => {
                        firebase.firestore().collection("Chats").doc(strId)
                        .update(updateObj).then(() => {
                        var obj = {
                            messageId : "asdsa",
                            imageUrl : null,
                            messageImage : null,
                            multipleImagesList : null,
                            messageText : messageText,
                            messagedAt : firebase.firestore.Timestamp.now(),
                            senderId : userId + "",
                            enquiry : false,
                            enquiryText : "",
                            vehicleImage : null,
                            vehiclePrice : null,
                            vehicleSubTitle  : null,
                            vehicleTitle : null,
                        }
                        
                        firebase.firestore().collection("Chats").doc(strId).collection('Messages')
                        .doc().set(obj).then(() => {
                            //route kr k messenger per lay jaiga.
                            history.push('/chat?id='+strId)
                        })
                    })
                    })
                    
                    
                }else{
                    const mailObj = {
                        carEnq : messageText,
                        recieverId : dealerId,
                        senderId : userId,
                    }
                    messageChatMail(mailObj)
                    .then(doc => {
                        if(doc.code === 1){
                            console.log('Mail went successfully')
                        }else{
                            console.log('Something went wrong with mail serves')
                        }
                        
                    })
                    .catch(e => {
                        console.log(e.message)
                    })
                    var updateObj = {
                        lastMessage : messageText,
                        lastMessageAt : firebase.firestore.Timestamp.now(),
                        receiverHasRead : false,
                        profilePic : props.details.profilePic,
                        senderId : userId + "",
                        receiverId : dealerId + "",
                        receiverUnreadCount : 0,
                        senderUnreadCount : 0,
                        receiverHasRead : true,
                        senderHasRead : false,
                        receiverFToken : "",
                        senderFToken : "",
                    }
                    const objInq = {
                        messageId : "asdas",
                        enquiryText : messageText,
                        messageAt : firebase.firestore.Timestamp.now(),
                        vehicleImage : imageUrl,
                        vehiclePrice : vehiclePrice + "",
                        vehicleSubTitle  : vehicleSubTitle,
                        vehicleTitle : vehicleTitle,

                    }

                    firebase.firestore().collection("Chats").doc(strId)
                    .collection('Enquiries').doc().set(objInq)
                    .then(() => {
                        firebase.firestore().collection("Chats").doc(strId)
                        .set(updateObj).then(() => {
                        var obj = {
                            messageId : "asdsa",
                            imageUrl : null,
                            messageImage : imageUrl,
                            multipleImagesList : null,
                            messageText : messageText,
                            messagedAt : firebase.firestore.Timestamp.now(),
                            senderId : userId + "",
                            enquiry : true,
                            enquiryText : "Can i get your Phone Number ?",
                            vehicleImage : imageUrl,
                            vehiclePrice : vehiclePrice + "",
                            vehicleSubTitle  : vehicleSubTitle,
                            vehicleTitle : vehicleTitle,
                        }
                        
                        firebase.firestore().collection("Chats").doc(strId).collection('Messages')
                        .doc().set(obj).then(() => {
                            //route kr k messenger per lay jaiga.
                            history.push('/chat?id='+strId)
                        })
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
            {/* {
                isLogin() ? 
                <CardBody className = "interested-card">
                    <h6 className = "interest-label">Are you interested in this car?</h6>
                    <h6 className = "seller-know-label mb-3">Let the seller know about your interest</h6>
                    <Button onClick={e => chatMsg(props.userId)} color = "primary" size = "lg" block className = "contact-seller-button mt-4">Chat with Seller</Button>
                </CardBody> :  */}
                {
                    getLogin() != props.userId ?
                        <CardBody className = "interested-card">
                            <h6 className = "interest-label">Are you interested in this car?</h6>
                            <h6 className = "seller-know-label mb-3">Let the seller know about your interest</h6>

                            
                            

                            {
                                localStorage.getItem('userId') ?
                                    <Button onClick={e => chatMsg(props.userId)} color = "primary" size = "lg" block className = "contact-seller-button mt-4">Chat Now with Seller</Button>
                                :
                                <>
                                    <Button onClick={popupToggle} color = "primary" size = "lg" block className = "contact-seller-button mt-4">Chat Now with Seller</Button>
                                    <LoginSignupModal  isOpen={popupModal} toggle={popupToggle} />
                                </>
                            }

                            <span className="or-divider">or</span>
                        
                            <Input type = "email" id='email-id' className = "interested-textfield" placeholder = "Your email address"></Input>
                            <div id="email-error-label" className="sellerPage-error-label"></div>
                            
                            
                            <textarea class="form-control message-box" id="message" rows="4" placeholder = "Message (Optional)"></textarea>
                            {/* <div className="success-msg"></div> */}
                            <div id="email-sent-label" className="text-success sellerPage-error-label"></div>
                            <Button color = "primary" onClick={(e)=>sendMessage(e)} size = "lg" block className = "contact-seller-button-2 mt-4">Send Message</Button>

                            

                            
                        </CardBody>
                    : null 
                }
            {/* } */}
            


            
            
            {
            dealer ?
                <Card className="mt-5 about-seller-card">
                    <CardBody>
                        <Row>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                <div className = "seller-name-image">
                                    <CardImg className = "seller-img" src={dealer.profilePic ? dealer.profilePic : dummyAvatar} alt={dealer.fullName} height = "100%" width = "100%"/>
                                </div>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col  className = "seller-column">
                              
                                    <span className='sellername-main-div'>
                                        <Label className = "seller-name">{dealer.fullName}</Label>
                                        {
                                            dealer.userRole === "Private User" ? null : <img src={SellerCheckMark} className='seller-check'/>
                                        }
                                        
                                    </span>

                                    {/* {
                                        dealer.userRole === "Private User" ? null :
                                    <>
                                        <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                        <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                        <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                        <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                                        <FontAwesomeIcon icon={["fas", "star"]} color="#DBDBDB" size="1x" className="mr-2" />
                                        <Label className = "seller-rate">4.1</Label>
                                    </>
                                    } */}
                            </Col>
                        </Row>
                        <hr className='contact-detailed-hr'/>
                        {/* <h6 className = "about-seller-head mt-4">About seller</h6>
                        <p className = "about-seller-text">{dealer.aboutMe ? dealer.aboutMe : "This seller has provided no information"}</p> 
                        <h6 className = "contact-detail-head mb-4">Contact Details</h6>*/}
                        
                        <div className='contact-details-div'>
                            {
                                dealer.userRole === "Private User" ? null : <><a  className = "contact-detail-text"><img src={ClockIcon} className='clock-icon-img' />{dealer.openingTime ? dealer.openingTime : "NaN"}</a><br/></>
                            }
                            
                            <a href={"tel:" + dealer.phNum} className = "contact-detail-text"> <img src={PhoneIcon} className='phone-icon-img'/>{dealer.phNum}</a>
                            <br/>
                            <a href={"mailto:" + dealer.email} className = "contact-detail-text"><img src={MessageIcon} className='message-icon-img'/>{dealer.email}</a>
                            
                            {
                                dealer.userRole === "Private User" ? null : <><br/><a className="contact-detail-text"><img src={AdrressPinIcon} className='address-icon-img'/>{dealer.address ? dealer.address : "NaN"}</a></>
                            }
                            
                        </div>
                            <Link className = "view-inv-link" to={'/dealer/' + props.userId}>
                                <Button color = "primary" size = "lg" block className = "view-inventory-button  mt-4">View Inventory</Button>
                            </Link>
                        
                    </CardBody>
                </Card> : null
            }
            {/* <Row>
                <Col className = "mt-3">
                    <div className="add-title">Ad by DoubleCars</div>
                    <img src = {Ad1} alt = "ad" className = "img-fluid"/>
                </Col>
            </Row>
            <Row>
                <Col className = "mt-3">
                    <img src = {Ad2} alt = "ad" className = "img-fluid"/>
                </Col>
            </Row> */}
        </div>
    )
}

export default SellerDetails;