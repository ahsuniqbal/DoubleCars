import React,{ useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Row, Col, Label, Button } from 'reactstrap';
import BlogPageImage4 from '../../../assets/BlogPageImage4.png';
import profileChat from '../../../assets/dummyAvatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Phone, Mail, MapPin } from 'react-feather';
import { connect } from 'react-redux';
import '../styles/ProfileView.css';
import {getUser} from '../api/Get'
import { getChatEnquires } from '../../../components/Firebase/database'
import { AddCommaToNumber } from '../../../utils/NumberManipulation';

const mapStateToProps = (state) => {
    console.log("Map state", state)
    return {
        chats: state.ChatReducer
    }
}

const ProfileView = (props) => {
    const [user,setUser] = useState(null);
    const [enquiry,setEnquiry] = useState([])

    // You can get the user id by props.chats.user.userId
    // Initial state me null hoga is lye code phate ga initial state me kch dalwana parega
    // Ya flag se agar kaam ho jata hai to flag laga lena
    

    useEffect(() => {

        

        console.log('props....',props)
        if(props.chats.user){
            getChatEnquires(props.chats.chat.receiverId,props.chats.chat.senderId)
        .then(doc => {
            console.log('enquiry',doc)
            setEnquiry(doc)
        })
        .catch(e => {
            console.log(e.message)
        })
            console.log('props.chats',props.chats)
            getUser(props.chats.user.userId)
            .then(doc => {
                console.log("dd",doc)
                setUser(doc[0])
            })
            .catch(e => {
                console.log(e.message)
            })
        }
        
    },[props.chats])

    return (
        <>
        <Card className="profile-view">
            <CardBody style={{paddingRight: '0px', paddingLeft: '0px', paddingBottom: '3.7rem'}}>
                {
                    enquiry.length > 0 ? 
                    <div className="inquiring-container" >
                        <h6>Inquiring For</h6>

                        <Row className="inquaring-for-card">
                            <Col xs="5" className="px-0">
                                <CardImg loading="lazy" src={enquiry[0].vehicleImage} />
                            </Col>
                            <Col xs="7" className="pr-0">
                                <CardTitle title={enquiry[0].enquiryText}>{enquiry[0].enquiryText}</CardTitle>
                                <CardSubtitle title={enquiry[0].vehicleSubTitle}>{enquiry[0].vehicleSubTitle}</CardSubtitle>
                                <CardText>${AddCommaToNumber(enquiry[0].vehiclePrice)}</CardText>
                            </Col>
                        </Row>
                    </div> : null
                }
                

                {/* <hr className="mt-5 mb-4" /> */}
                {
                    user ? <div className="profile-details" style={{paddingRight: '1.25rem', paddingLeft: '1.25rem', paddingBottom: '5rem'}}>
                    <h6>Profile</h6>

                    <Row>
                        <Col xs="12" className="text-center">
                            <CardImg src={user ? user.profilePic ? user.profilePic : profileChat : profileChat} />

                            <h6 className="mt-3">{user ? user.fullName : "loading..."} <span className="ml-1"><FontAwesomeIcon icon={"check-circle"} style={{color:'#1C67CE'}} /></span></h6>

                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#DBDBDB" size="1x" className="mr-2" />
                            <FontAwesomeIcon icon={["fas", "star"]} color="#DBDBDB" size="1x" className="mr-2" />
                            <Label className='rating-number'>4.2</Label>
                        </Col>
                    </Row>

                    <hr />

                    <Row>
                        <Col xs="12">
                            <p><Phone color="#1C67CE" size={15} className="mr-3"/>{user ? user.phNum : null}</p>
                            <p><Mail color="#1C67CE" size={15} className="mr-3"/>{user ? user.email : null}</p>
                            {/* <p><MapPin color="#1C67CE" size={15} className="mr-3"/>3296  Bobcat Drive, Rockville, MD</p> */}
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="12">
                        <Link className = "view-inv-link" to={'/dealer/' + props.chats.user.userId} >
                            <Button color="primary" outline block>View Inventory</Button>
                        </Link>
                        </Col>
                    </Row>
                </div> : null
                }
            </CardBody>
        </Card>

        
        </>
    )
}

export default connect(mapStateToProps, null)(ProfileView);
