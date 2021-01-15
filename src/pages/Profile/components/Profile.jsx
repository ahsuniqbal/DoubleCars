import React,{ useState, useEffect} from 'react';
import { Button, Container, Row, Col, Input, Label, Card,CardBody} from 'reactstrap';
import '../styles/Profile.css'
import { logout } from '../../../config/LoginAuth';
// import profileImage from '../../../assets/Dummy-profile-image.png'
import {getUser} from '../api/Get'
import {changePassword,updateUser} from '../api/Patch'
const Profile = (props) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        //
        getUser(localStorage.getItem("userId"))
        .then(doc => {
            console.log(doc[0])
            setUser(doc[0])
        })
        .catch(e => {
            alert(e.message)
        })
    },[])

    const saveProfileClick = () => {
        const id = localStorage.getItem('userId')
        var firstName = document.getElementById('firstName').value
        var lastName = document.getElementById('lastName').value
        var phNum = document.getElementById('phNum').value
        const obj = {
            firstName,lastName,phNum
        }

        updateUser(id,obj)
        .then(doc => {
            if(doc.code === 1){
                window.location.reload()
            }else{
                alert(doc.message)
            }
        })
        .catch(e => {
            console.log(e.message)
        })
    }

    const handleLogout = () => {
        localStorage.removeItem('userId')
        props.history.push('/');
    }

    const onChangePassword = () => {
        var currPassword = document.getElementById('oldPass');
        var newPassword = document.getElementById('newPass');
        const obj = {
            currPassword,newPassword
        }
        setLoading(true)
        changePassword(localStorage.getItem("userId"),obj)
        .then(doc => {
            setLoading(false)
            if(doc.code === 1){
                document.getElementById('oldPass').value = ""
                document.getElementById('newPass').value = ""
            }else{
                alert(doc.message)
            }
        })
        .catch(e => {
            setLoading(false)
            alert(e.message)
        })
    }
    const changePicture = () => {
        
    }
    return(
        // <div>
        //     Profile Private Page
        //     <Button onClick={() => handleLogout()}>Logout</Button>
        // </div>
        <body className = "profile-body">
            <Container clsssName = "profile-container">
                <Row>
                    <Col md='1'></Col>
                   
                    <Col xs = "12" md = "3" className = "profile-column text-center">
                    <Card>
                        
                        <CardBody>
                            <img src = {user ? user.profilePic : null} class = "img-fluid profile-image" alt = "profile-image"/> <br/>
                            <Button onClick={e => changePicture()} className = "change-pic-button">Change Picture</Button> <br/>
                            <Button className = "remove-pic-button">Remove Picture</Button> 
                        </CardBody>
                    </Card>
                    </Col>
                    
                    <Col xs = "12" md = "6" className = "profile-column">
                   
                        <h4 className = "profile-page-heading">Edit Profile</h4>
                        
                        <hr/>
                        <Row>
                            <Col xs = "12" md = "6">
                                <Label className = "profile-labels">First Name</Label>
                                <Input id="firstName" className = "profile-text-field" type="text" value={user ? user.fullName.split(' ')[0] : "loading..."} />
                            </Col>

                            <Col xs = "12" md = "6">
                                <Label className = "profile-labels">Last Name</Label>
                                <Input id="lastName" className = "profile-text-field" type="text"  value={user ? user.fullName.split(' ')[1] : "loading..."}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs = "12" md = "6">
                                <Label className = "profile-labels" id='mobile-zip-label'>Mobile Number</Label>
                                <Input id="phNum" className = "profile-text-field" type="number"  value={user ? user.phNum : "loading..."}/>
                            </Col>

                            <Col xs = "12" md = "6">
                                <Label className = "profile-labels" id='mobile-zip-label'>Zip Code</Label>
                                <Input id=""className = "profile-text-field" type="text" defaultValue={user ? user.fullName : "loading..."}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label className = "profile-labels">Location</Label>
                                <Input id="" className = "profile-text-field" type="text" />
                            </Col>
                        </Row>
                        <Row>
                           <Col>
                                <Label className = "profile-labels">Bio</Label>
                                <textarea class="form-control bio-box" rows="4" placeholder = "Message (Optional)"></textarea>
                           </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={e => saveProfileClick()} color="primary" className="save-profile-button float-right">
                                {loading && <span>Saving</span>}
                                {!loading && <span>Save Profile</span>}
                                </Button>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col xs = "12" md = "12">
                            <h4 className = "profile-page-heading">Change Password</h4>
                        <hr/>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col xs = "12" md = "6">
                                <Label className = "profile-labels">Old Pasword</Label>
                                <Input id="oldPass" className = "profile-text-field" type="text"/>
                            </Col>

                            <Col xs = "12" md = "6">
                                <Label className = "profile-labels">New Password</Label>
                                <Input id="newPass" className = "profile-text-field" type="text" />
                            </Col>
                        </Row>

                        <Row>
                           <Col>
                                <Button color="primary" onClick={e => onChangePassword()} className="change-password-button float-right">
                                {loading && <span>Changing...</span>}
                                {!loading && <span>Change</span>}
                                </Button>
                           </Col>
                        </Row>
                    </Col>
                    
               </Row>
            </Container>
        </body>
    );
}

export default Profile;