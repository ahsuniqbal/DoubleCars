import React,{ useState, useEffect} from 'react';
import {  Container, Row, Col, Input, Label, Card,CardBody } from 'reactstrap';
import '../styles/Profile.css'
// import { logout } from '../../../config/LoginAuth';
import profileImage from '../../../assets/user.svg'
import {getUser} from '../api/Get'
import {getBlob} from '../../../utils/Conversion'
import {changePassword,updateUser} from '../api/Patch'
import {postImageToFTP} from '../../ChatMessenger/api/Post'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { nameValidation } from '../../../utils/Validation';
import { User } from 'react-feather';
// import IconButton from '@material-ui/core/IconButton';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';

// import AppbarDropdown from '../../../assets/uper-arrow-appbar.png'
// import DummyTopProfile from '../../../assets/Dummy-short-profile.png'
// import {UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
const Profile = (props) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(false)
    const [loadingProfile,setLoadingProfile] = useState(false)
    const [loadingPassword,setLoadingPassword] = useState(false)
    useEffect(() => {
        //
        getUser(localStorage.getItem("userId"))
        .then(doc => {
            console.log('profile',doc)
            setUser(doc[0])
        })
        .catch(e => {
            console.log(e.message)
        })
    },[])

    const saveProfileClick = () => {
        const id = localStorage.getItem('userId')
        var firstName = document.getElementById('firstName').value
        var lastName = document.getElementById('lastName').value
        var phNum = document.getElementById('phNum').value

        if(nameValidation(firstName+lastName)){
            // Name is okay
            document.getElementById('profile-name-error-label').textContent = "";

            if(Number.isInteger(parseInt(phNum))) {
                // Mobile is okay
                document.getElementById('profile-phNum-error-label').textContent = "";

                const obj = {
                firstName,lastName,phNum
                }
                setLoading(true)
                updateUser(id,obj)
                .then(doc => {
                    console.log('***',doc)
                    setLoading(false)
                    if(doc.code === 1){
                        window.location.reload()
                    }else{
                        console.log(doc.message)
                    }
                })
                .catch(e => {
                    setLoading(false)
                    console.log(e.message)
                })
            }
             else {
                // Mobile is wrong
                document.getElementById('profile-phNum-error-label').textContent = "Please enter a valid mobile number";
            }
        }
        else {
            // Name is wrong
            document.getElementById('profile-name-error-label').textContent = "Please enter a valid name";
        }

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
        setLoadingPassword(true)
        changePassword(localStorage.getItem("userId"),obj)
        .then(doc => {
            setLoadingPassword(false)
            if(doc.code === 1){
                document.getElementById('oldPass').value = ""
                document.getElementById('newPass').value = ""
            }else{
                console.log(doc.message)
            }
        })
        .catch(e => {
            setLoadingPassword(false)
            console.log(e.message)
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
        var formData = new FormData();
        formData.append('profile',img)
        postImageToFTP(formData)
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
                             <img src = {user ? user.profilePic ? user.profilePic : profileImage : profileImage}
                              id="profile-img" class = "img-fluid profile-image" alt = "profile-image"/>
                               <br/>
                            {/*<Button onClick={e => changePicture(e)} className = "change-pic-button">Change Picture</Button> <br/> */}
                            
                                  <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    onChange={e => changePicture(e)}
                                    type="file"
                                />
                                <label htmlFor="contained-button-file" style = {{width: "100%"}}>
                                    <Button className = "change-pic-button" component="span">
                                        {loadingProfile && "Changing..."}
                                        {!loadingProfile && "Change Picture"}
                                    </Button>
                                </label>

                            <Button onClick={e => removePicture()} className = "remove-pic-button">Remove Picture</Button> 
                        </CardBody>
                    </Card>
                    </Col>
                    
                    <Col xs = "12" md = "6" className = "profile-edit-column px-4">
                   
                        <h4 className = "profile-page-heading">Edit Profile</h4>
                        
                        <hr/>
                        {
                            user ? <Row>
                            <Col xs = "12" md = "6">
                                <Label className = "profile-labels">First Name</Label>
                                <Input id="firstName" className = "profile-text-field" type="text" defaultValue={user.firstName} />
                                <div id="profile-name-error-label" className="profile-error-label"></div>
                            </Col>

                            <Col xs = "12" md = "6">
                                <Label className = "profile-labels">Last Name</Label>
                                <Input id="lastName" className = "profile-text-field" type="text"  defaultValue={user.lastName}/>
                            </Col>
                        </Row> : "loading..."
                        }
                        {
                            user ? <Row>
                            <Col xs = "12" md = "6">
                                <Label className = "profile-labels" id='giving-margin-top'>Mobile Number</Label>
                                <Input id="phNum" className = "profile-text-field" type="text"  defaultValue={user.phNum}/>
                                <div id="profile-phNum-error-label" className="profile-error-label"></div>
                            </Col>
                        </Row> : null
                        }
                        
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
                                <Button onClick={e => saveProfileClick(e)} color="primary" className="save-profile-button float-right">
                                {loading && "Saving"}
                                {!loading && "Save Profile"}
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
                                {loadingPassword && "Changing..."}
                                {!loadingPassword && "Change"}
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