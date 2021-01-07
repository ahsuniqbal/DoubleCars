import React,{ useState, useEffect} from 'react';
import { Button, Container, Row, Col, Input, Label, Card,CardBody} from 'reactstrap';
import '../styles/Profile.css'
import { logout } from '../../../config/LoginAuth';
import profileImage from '../../../assets/Dummy-profile-image.png'
import {getUser} from '../api/Get'
const Profile = (props) => {

    const [user,setUser] = useState(null)

    useEffect(() => {
        //localStorage.getItem("userId")
        getUser(localStorage.getItem("userId"))
        .then(doc => {
            console.log(doc[0])
            setUser(doc[0])
        })
        .catch(e => {
            alert(e.message)
        })
    },[])

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
            <Container clsssName = "profile-container">
                <Row>
                    <Col xs = "12" md = "3" className = "profile-column text-center">
                    <Card>
                        
                        <CardBody>
                            <img src = {user ? user.profilePic : null} class = "img-fluid profile-image" alt = "profile-image"/> <br/>
                            <Button className = "change-pic-button">Change Picture</Button> <br/>
                            <Button className = "remove-pic-button">Remove Picture</Button> 
                        </CardBody>
                    </Card>
                    </Col>
                    <Col xs = "12" md = "9" className = "profile-column">
                        <h4 className = "profile-page-heading">Edit Profile</h4>
                        <hr/>
                        <Row>
                            <Col xs = "12" md = "6">
                                <Label className = "profile-labels">First Name</Label>
                                <Input id="" className = "profile-text-field" type="text" value={user ? user.fullName.split(' ')[0] : "loading..."} />
                            </Col>

                            <Col xs = "12" md = "6">
                                <Label className = "profile-labels">Last Name</Label>
                                <Input id="" className = "profile-text-field" type="text"  value={user ? user.fullName.split(' ')[1] : "loading..."}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs = "12" md = "6">
                                <Label className = "profile-labels">Mobile Number</Label>
                                <Input id="" className = "profile-text-field" type="number"  value={user ? user.phNum : "loading..."}/>
                            </Col>

                            {/* <Col xs = "12" md = "6">
                                <Label className = "profile-labels">Zip Code</Label>
                                <Input id=""className = "profile-text-field" type="text" defaultValue={user ? user.fullName : "loading..."}/>
                            </Col> */}
                        </Row>
                        {/* <Label className = "profile-labels">Location</Label>
                        <Input id="" className = "profile-text-field" type="text" />
                        <Label className = "profile-labels">Bio</Label>
                        <textarea class="form-control bio-box" rows="4" placeholder = "Message (Optional)"></textarea> */}
                        <Button type="submit" color="primary" className="save-profile-button float-right">Save Profile</Button>
                        <Row>
                            <Col xs = "12" md = "12">
                            <h4 className = "profile-page-heading">Change Password</h4>
                        <hr/>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col xs = "12" md = "6">
                                <Label className = "profile-labels">Old Pasword</Label>
                                <Input id="" className = "profile-text-field" type="text"/>
                            </Col>

                            <Col xs = "12" md = "6">
                                <Label className = "profile-labels">New Password</Label>
                                <Input id="" className = "profile-text-field" type="text" />
                            </Col>
                        </Row>
                        <Button type="submit" color="primary" className="change-password-button float-right">Change</Button>
                    </Col>
               </Row>
            </Container>
        </body>
    );
}

export default Profile;