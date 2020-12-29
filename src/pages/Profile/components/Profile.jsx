import React from 'react';
import { Button, Container, Row, Col, Input, Label, Card,CardBody, CardText} from 'reactstrap';
import '../styles/Profile.css'
import { logout } from '../../../config/LoginAuth';
import profileImage from '../../../assets/Dummy-profile-image.png'

const Profile = (props) => {
    const handleLogout = () => {
        logout();
        props.history.push('/');
    }
    return(
        // <div>
        //     Profile Private Page
        //     <Button onClick={() => handleLogout()}>Logout</Button>
        // </div>
        <body className = "profile-body">
            <Container>
                <Row>
                    <Col xs = "12" md = "3" className = "profile-column text-center">
                    <Card>
                        
                        <CardBody>
                            <img src = {profileImage} class = "img-fluid" alt = "profile-image" width = "115px" height = "115px"/> <br/>
                            <Button>Change Picture</Button> <br/>
                            <Button>Remove Picture</Button> 
                        </CardBody>
                    </Card>
                    </Col>
                    <Col xs = "12" md = "9" className = "profile-column">
                        <h4>Edit Profile</h4>
                        <hr/>
                        <Row>
                            <Col xs = "12" md = "6">
                                <Label>First Name</Label>
                                <Input id="" className = "register-textfield" type="text" placeholder="First Name" required />
                            </Col>

                            <Col xs = "12" md = "6">
                                <Label>Last Name</Label>
                                <Input id="" className = "register-textfield" type="text" placeholder="First Name" required />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs = "12" md = "6">
                                <Label>Mobile Number</Label>
                                <Input id="" className = "register-textfield" type="text" placeholder="First Name" required />
                            </Col>

                            <Col xs = "12" md = "6">
                                <Label>Zip Code</Label>
                                <Input id="" className = "register-textfield" type="text" placeholder="First Name" required />
                            </Col>
                        </Row>
                        <Label>Location</Label>
                        <Input id="" className = "register-textfield" type="text" placeholder="First Name" required />
                        <Label>Bio</Label>
                        <textarea class="form-control message-box" rows="4" placeholder = "Message (Optional)"></textarea>
                        <Button type="submit" color="primary" className="">Save Profile</Button>
                        <h4>Edit Profile</h4>
                        <hr/>
                        <Row>
                            <Col xs = "12" md = "6">
                                <Label>Old Pasword</Label>
                                <Input id="" className = "register-textfield" type="text" placeholder="First Name" required />
                            </Col>

                            <Col xs = "12" md = "6">
                                <Label>New Password</Label>
                                <Input id="" className = "register-textfield" type="text" placeholder="First Name" required />
                            </Col>
                        </Row>
                        <Button type="submit" color="primary" className="">Change</Button>
                    </Col>
               </Row>
            </Container>
        </body>
    );
}

export default Profile;