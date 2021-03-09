import React,{ useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Row, Col, Label, Button } from 'reactstrap';
import BlogPageImage4 from '../../../assets/BlogPageImage4.png';
import profileChat from '../../../assets/profile-chat.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Phone, Mail, MapPin } from 'react-feather';
import { connect } from 'react-redux';
import '../styles/ProfileView.css';
import {getUser} from '../api/Get'


const mapStateToProps = (state) => {
    console.log("Map state", state)
    return {
        chats: state
    }
}

const ProfileView = (props) => {
    const [user,setUser] = useState(null);

    // You can get the user id by props.chats.user.userId
    // Initial state me null hoga is lye code phate ga initial state me kch dalwana parega
    // Ya flag se agar kaam ho jata hai to flag laga lena
    

    useEffect(() => {
        if(props.chats.user){
            getUser(props.chats.user.userId)
            .then(doc => {
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

                {/* <div style={{paddingRight: '1.25rem', paddingLeft: '1.25rem'}}>
                    <h6>Inquiring For</h6>

                    <Row className="inquaring-for-card">
                        <Col xs="5" className="px-0">
                            <CardImg src={BlogPageImage4} />
                        </Col>
                        <Col xs="7" className="px-0">
                            <CardTitle title="2019 Acura MDX Hy...">2019 Acura MDX Hy...</CardTitle>
                            <CardSubtitle>17,863 Mileage · California</CardSubtitle>
                            <CardText>$25,664</CardText>
                        </Col>
                    </Row>
                </div> */}

                {/* <hr className="mt-5 mb-4" /> */}
                {
                    user ? <div className="profile-details" style={{paddingRight: '1.25rem', paddingLeft: '1.25rem'}}>
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
