import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Row, Col, Label, Button } from 'reactstrap';
import BlogPageImage4 from '../../../assets/BlogPageImage4.png';
import profileChat from '../../../assets/profile-chat.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Phone, Mail, MapPin } from 'react-feather';
import '../styles/ProfileView.css';

const ProfileView = () => {
    return (
        <>
        <Card className="profile-view">
            <CardBody style={{paddingRight: '0px', paddingLeft: '0px'}}>

                <div style={{paddingRight: '1.25rem', paddingLeft: '1.25rem'}}>
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
                </div>

                <hr className="mt-5 mb-4" />

                <div className="profile-details" style={{paddingRight: '1.25rem', paddingLeft: '1.25rem'}}>
                    <h6>Profile</h6>

                    <Row>
                        <Col xs="12" className="text-center">
                            <CardImg src={profileChat} />

                            <h6 className="mt-3">One Chance Auto <span className="ml-1"><FontAwesomeIcon icon={"check-circle"} style={{color:'#1C67CE'}} /></span></h6>

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
                            <p><Phone color="#1C67CE" size={15} className="mr-3"/>+1 2345 78974</p>
                            <p><Mail color="#1C67CE" size={15} className="mr-3"/>hellochance@gmail.com</p>
                            <p><MapPin color="#1C67CE" size={15} className="mr-3"/>3296  Bobcat Drive, Rockville, MD</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="12">
                            <Button color="primary" outline block>View Inventory</Button>
                        </Col>
                    </Row>
                </div>
                
            </CardBody>
        </Card>

        
        </>
    )
}

export default ProfileView
