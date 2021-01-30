import React,{ useState, useEffect} from 'react';
import {  Container, Row, Col, Input, Label, Card,CardBody, Button} from 'reactstrap';
import '../styles/Profile.css'
// import { logout } from '../../../config/LoginAuth';
import profileImage from '../../../assets/Dummy-profile-image.png'
import {getUser} from '../api/Get'
import {getBlob} from '../../../utils/Conversion'
import {changePassword,updateUser} from '../api/Patch'
import {postImageToFTP} from '../../ChatMessenger/api/Post'
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';

// import AppbarDropdown from '../../../assets/uper-arrow-appbar.png'
// import DummyTopProfile from '../../../assets/Dummy-short-profile.png'
// import {UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
const Profile = (props) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(false)
    const [loadingProfile,setLoadingProfile] = useState(false)
    useEffect(() => {
        //
        getUser(localStorage.getItem("userId"))
        .then(doc => {
            console.log('profile',doc)
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

    const removePicture = () => {
        const objP = {
            profilePic : null
        }
        updateUser(localStorage.getItem("userId"),objP)
        .then(doc2 => {
            window.location.reload()
        })
        .catch(e => {
            console.log(e.message)
        })
    }

    const changePicture = (e) => {
        const img = e.target.files[0]
        console.log(img)
        document.getElementById('profile-img').src = URL.createObjectURL(img)
        setLoadingProfile(true)
        getBlob(img)
        .then(doc => {
            var obj = {
                file : doc,
                fileName : img.name.replace(/\s/g, '')
            }
            postImageToFTP([obj])
            .then(doc1 => {
                var url = doc1[0]
                const objP = {
                    profilePic : url
                }
                updateUser(localStorage.getItem("userId"),objP)
                .then(doc2 => {
                    setLoadingProfile(false)
                    console.log(doc2)
                })
                .catch(e => {
                    setLoadingProfile(false)
                    console.log(e.message)
                })
            })
            .catch(e => {
                setLoadingProfile(false)
                console.log(e.message)
            })
            
        })
        .catch(e => {
            setLoadingProfile(false)
            console.log(e.message)
        })
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        input: {
          display: 'none',
        },
      }));
      

    const classes = useStyles();

    return(
        // <div>
        //     Profile Private Page
        //     <Button onClick={() => handleLogout()}>Logout</Button>
        // </div>
        <body className = "profile-body">
            <Container clsssName = "profile-container">
                <Row>
                    <Col md='1'></Col>
                   
                    <Col xs = "12" md = "3" className = "profile-pic-column text-center">
                    <Card className='py-3'>
                        
                        <CardBody>
                             <img src = {user ? user.profilePic ? user.profilePic : profileImage : profileImage} id="profile-img" class = "img-fluid profile-image" alt = "profile-image"/> <br/>
                            {/*<Button onClick={e => changePicture(e)} className = "change-pic-button">Change Picture</Button> <br/> */}
                                  <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    onChange={e => changePicture(e)}
                                    type="file"
                                />
                                {/* <label htmlFor="contained-button-file"> */}
                                    <Button className = "change-pic-button">
                                    {loadingProfile && <span>Changing...</span>}
                                    {!loadingProfile && <span>Change Picture</span>}
                                    </Button>
                                {/* </label> */}
                                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                                <label htmlFor="icon-button-file">
                                    {/* <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                    </IconButton> */}
                                </label>

                            <Button onClick={e => removePicture()} className = "remove-pic-button">Remove Picture</Button> 
                        </CardBody>
                    </Card>
                    </Col>
                    
                    <Col xs = "12" md = "6" className = "profile-edit-column px-4">
                   
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
                                <Label className = "profile-labels" id='giving-margin-top'>Mobile Number</Label>
                                <Input id="phNum" className = "profile-text-field" type="text"  value={user ? user.phNum : "loading..."}/>
                            </Col>

                            {/* <Col xs = "12" md = "6">
                                <Label className = "profile-labels" id='mobile-zip-label'>Zip Code</Label>
                                <Input id=""className = "profile-text-field" type="text" defaultValue={user ? user.fullName : "loading..."}/>
                            </Col> */}
                        </Row>
                        {/* <Row>
                            <Col>
                                <Label className = "profile-labels ">Location</Label>
                                <Input id="" className = "profile-text-field" type="text" />
                            </Col>
                        </Row>
                        <Row>
                           <Col className='class-for-textarea'>
                                <Label className = "profile-labels" >Bio</Label>
                                <textarea class="form-control bio-box" rows="5" placeholder = "Message (Optional)"></textarea>
                           </Col>
                        </Row> */}
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
                            <h4 className = "profile-page-heading" >Change Password</h4>
                             <hr className='below-password-hr'/>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col xs = "12" md = "6">
                                <Label className = "profile-labels" id='margin-password-fields'>Old Password</Label>
                                <Input id="oldPass" className = "profile-text-field" type="text"/>
                            </Col>

                            <Col xs = "12" md = "6">
                                <Label className = "profile-labels " id='margin-password-fields'>New Password</Label>
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