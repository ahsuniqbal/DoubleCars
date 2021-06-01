import React, {useEffect,useState} from 'react'
import { Input, Row, Col } from 'reactstrap';
import { Paperclip } from 'react-feather';
import '../styles/Compose.css';
// import {getBlob} from '../../../utils/Conversion'
import {postImageToFTP} from '../api/Post'
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { getLogin } from '../../../config/LoginAuth';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {uploadImage} from '../../../utils/imageUploader'
import chatDummy from '../../../assets/chat-dummy.png'
import cross from '../../../assets/icons/cross.svg'
import { connect } from 'react-redux';
import { messageChat } from '../../../redux/actions/MessageAction';


const firebase = require('firebase').default

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



const mapDispatchToProps = (dispatch) => {
    return {
        messageChat: (chat) => {
            dispatch(messageChat(chat));
        }
    }
}
  
const Compose = (props) => {

    const classes = useStyles();
    const [isImageSelected,setIsImageSelected] = useState(false)
    const [images1,setImages] = useState([])

    useEffect(() => {
        var input = document.getElementById('chatMessage')
        input.addEventListener('keyup', function (e) {
            console.log(e)
            if(e.KeyCode === 13) {
                // console.log('Value:', input.value);
                // var userId = localStorage.getItem('userId')
                // console.log("propsChatInfo",props.chatInfo)
                // var strId = ""
                // var obj = {}
                // if(props.chatInfo.receiverId == userId){
                //     strId = [userId, props.chatInfo.senderId].sort().join('-')
                //     obj = {
                //         recieverTypeStatus : false,
                //         senderHasRead : false,
                //         senderUnreadCount : props.chatInfo.senderUnreadCount++
                        
                //     }
                // }else{
                //     strId = [userId, props.chatInfo.receiverId].sort().join('-')
                //     obj = {
                //         senderTypeStatus : false,
                //         receiverHasRead : false,
                //         receiverUnreadCount : props.chatInfo.receiverUnreadCount++
                //     }
                // }
                // firebase.firestore().collection("Chats").doc(strId)
                // .update(obj).then(res => {
                //     console.log("res33",res)
                // })
                // .catch(e => {
                //     console.log("e33",e)
                // })    
            }
            
        })
        
    },[]) 

    const messageValid = (txt) => (txt && txt.replace(/\s/g, '').length);
    
    const sendMessage = () => {
        console.log("selected",isImageSelected)
        
        if(isImageSelected){
            onSendImages()
        }else {
            var msg = document.getElementById('chatMessage').value
            if(messageValid(msg)){
            
                var userId = localStorage.getItem('userId')
                var obj = {
                    messageId : "asdsa",
                    imageUrl : null,
                    messageImage : null,
                    multipleImagesList : null,
                    messageText : msg,
                    messagedAt : firebase.firestore.Timestamp.now(),
                    senderId : userId,
                    enquiry : false,
                    enquiryText : "",
                    vehicleImage : null,
                    vehiclePrice : null,
                    vehicleSubTitle  : null,
                    vehicleTitle : null,
                }
                const strId = [userId, props.otherId].sort().join('-')
                //var strId = "72-73"
                // console.log("final thing to send",obj,strId)

                firebase.firestore().collection("Chats").doc(strId).collection('Messages')
                .doc().set(obj)
                document.getElementById('chatMessage').value = ""
                var updateObj = {}
                if(props.chatInfo.receiverId == userId){
                    updateObj = {
                        recieverTypeStatus : false,
                        senderHasRead : false,
                        senderUnreadCount : props.chatInfo.senderUnreadCount++,
                        lastMessage : msg,
                    lastMessageAt : firebase.firestore.Timestamp.now(),
                        
                    }
                }else{
                    updateObj = {
                        senderTypeStatus : false,
                        receiverHasRead : false,
                        receiverUnreadCount : props.chatInfo.receiverUnreadCount++,
                        lastMessage : msg,
                    lastMessageAt : firebase.firestore.Timestamp.now(),
                    }
                }
                firebase.firestore().collection("Chats").doc(strId)
                .update(updateObj)
            }
        }
    }
    const handleKeyDown = (event) => {
        if(event.keyCode === 13) { 
            console.log('Enter key pressed')
            sendMessage()
      }
    }

    const onChangeImage = async (e) => {
        var images = e.target.files
        console.log(images)
        setIsImageSelected(true)
        setImages(images)   
    }

    const removeImage = (index) => {
        var images = images1
        const fileListArr = Array.from(images)
        fileListArr.splice(index, 1) // here u remove the file

        console.log(images,fileListArr)
        if(fileListArr.length === 0){
            setIsImageSelected(false)
        }
        setImages(fileListArr)

        
    }

    const onSendImages = async () => {
        var images = images1
        if(images.length === 1){
            props.messageChat("Has sent a file")
        uploadImage(images[0],`/Attachment_Images/${new Date().toString()}${"_attachment"}.${images[0].type.split('/')[1]}`)
        .then(url => {
            var userId = localStorage.getItem('userId')
            var obj = {
                messageId : "asdsa",
                imageUrl : url,
                messageImage : null,
                multipleImagesList : null,
                messageText : null,
                messagedAt : firebase.firestore.Timestamp.now(),
                senderId : userId,
                enquiry : false,
                enquiryText : "",
                vehicleImage : null,
                vehiclePrice : null,
                vehicleSubTitle  : null,
                vehicleTitle : null,
            }
            const strId = [userId, props.otherId].sort().join('-')
            firebase.firestore().collection("Chats").doc(strId).collection('Messages')
            .doc().set(obj)
            document.getElementById('chatMessage').value = ""
            var updateObj = {
                lastMessage : url,
                lastMessageAt : firebase.firestore.Timestamp.now(),
                receiverHasRead : false
            }
            firebase.firestore().collection("Chats").doc(strId)
            .update(updateObj)
        })
        .catch(e => {
            console.log("urlError",e.message)
        })
        }else if(images.length > 1){
            console.log(typeof images)
            var urls = []
            for(let i = 0; i < images.length; i ++){
                var url = await uploadImage(images[Object.keys(images)[i]],`/Attachment_Images/${new Date().toString()}${"_attachment"}.${images[Object.keys(images)[i]].type.split('/')[1]}`)
                urls.push(url)    
            }
            var userId = localStorage.getItem('userId')
            var obj = {
                messageId : "asdsa",
                imageUrl : null,
                messageImage : null,
                multipleImagesList : urls,
                messageText : null,
                messagedAt : firebase.firestore.Timestamp.now(),
                senderId : userId,
                enquiry : false,
                enquiryText : "",
                vehicleImage : null,
                vehiclePrice : null,
                vehicleSubTitle  : null,
                vehicleTitle : null,
            }
            const strId = [userId, props.otherId].sort().join('-')
            firebase.firestore().collection("Chats").doc(strId).collection('Messages')
            .doc().set(obj)
            setIsImageSelected(false)
            setImages([])
            // document.getElementById('chatMessage').value = ""
            var updateObj = {
                lastMessage : "has sent "  + urls.length + " imags",
                lastMessageAt : firebase.firestore.Timestamp.now(),
                receiverHasRead : false
            }
            firebase.firestore().collection("Chats").doc(strId)
            .update(updateObj)
        }
    }

    // const onChangeImage = async (e) => {
    //     setIsImageSelected(true)
        
    //     var images = e.target.files
    //     setImages(images)
    //     //console.log(images[0])
    //     if(images.length === 1){
    //     uploadImage(images[0],`/Attachment_Images/${new Date().toString()}${"_attachment"}.${images[0].type.split('/')[1]}`)
    //     .then(url => {
    //         var userId = localStorage.getItem('userId')
    //         var obj = {
    //             messageId : "asdsa",
    //             imageUrl : url,
    //             messageImage : null,
    //             multipleImagesList : null,
    //             messageText : null,
    //             messagedAt : firebase.firestore.Timestamp.now(),
    //             senderId : userId,
    //             enquiry : false,
    //             enquiryText : "",
    //             vehicleImage : null,
    //             vehiclePrice : null,
    //             vehicleSubTitle  : null,
    //             vehicleTitle : null,
    //         }
    //         const strId = [userId, props.otherId].sort().join('-')
    //         firebase.firestore().collection("Chats").doc(strId).collection('Messages')
    //         .doc().set(obj)
    //         document.getElementById('chatMessage').value = ""
    //         var updateObj = {
    //             lastMessage : url,
    //             lastMessageAt : firebase.firestore.Timestamp.now(),
    //             receiverHasRead : false
    //         }
    //         firebase.firestore().collection("Chats").doc(strId)
    //         .update(updateObj)
    //     })
    //     .catch(e => {
    //         console.log("urlError",e.message)
    //     })
    //     }else if(images.length > 1){
    //         console.log(typeof images)
    //         var urls = []
    //         for(let i = 0; i < images.length; i ++){
    //             var url = await uploadImage(images[Object.keys(images)[i]],`/Attachment_Images/${new Date().toString()}${"_attachment"}.${images[Object.keys(images)[i]].type.split('/')[1]}`)
    //             urls.push(url)    
    //         }
    //         var userId = localStorage.getItem('userId')
    //         var obj = {
    //             messageId : "asdsa",
    //             imageUrl : null,
    //             messageImage : null,
    //             multipleImagesList : urls,
    //             messageText : null,
    //             messagedAt : firebase.firestore.Timestamp.now(),
    //             senderId : userId,
    //             enquiry : false,
    //             enquiryText : "",
    //             vehicleImage : null,
    //             vehiclePrice : null,
    //             vehicleSubTitle  : null,
    //             vehicleTitle : null,
    //         }
    //         const strId = [userId, props.otherId].sort().join('-')
    //         firebase.firestore().collection("Chats").doc(strId).collection('Messages')
    //         .doc().set(obj)
    //         document.getElementById('chatMessage').value = ""
    //         var updateObj = {
    //             lastMessage : "has sent "  + urls.length + " imags",
    //             lastMessageAt : firebase.firestore.Timestamp.now(),
    //             receiverHasRead : false
    //         }
    //         firebase.firestore().collection("Chats").doc(strId)
    //         .update(updateObj)
    //     }
        
    // }

    const TypingStatus = () => {
        console.log("ty",props.chatInfo)
        var userId = localStorage.getItem('userId')
        const strId = [userId, props.chatInfo.receiverId].sort().join('-')
        var obj = {}
        if(props.chatInfo.receiverId == userId){
            obj = {
                recieverTypeStatus : true
            }
        }else{
            obj = {
                senderTypeStatus : true
            }
        }
        firebase.firestore().collection("Chats").doc(strId)
        .update(obj)
    }

    const imagePreview = (images) => {
        var tab = []
        for(let i = 0; i < images.length; i ++){
            tab.push(
                <div className="img-send">
                    <div className="cross-image">
                        <img src={cross} onClick={e => removeImage(i)} alt="Cross image" className="img-fluid" />
                    </div>
                    <img src={URL.createObjectURL(images[i])} alt="Chat image" className="img-fluid" />
                </div>
            )
        }
        return tab
    }

    return (
        <div className="compose">
            
            {/* <Input  id="image" type="file" accept="image/*">
            <Paperclip color="#1C67CE" size={30}/>
            </Input> */}
            <Row>
                <Col xs="1">
                    <input accept="image/*" onChange={e => onChangeImage(e)} className={classes.input} id="icon-button-file" type="file" multiple/>
                    <label htmlFor="icon-button-file" className="mb-0">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                        <Paperclip size={18} />
                        </IconButton>
                    </label>
                </Col>
            
            

                <Col xs="9" className="d-flex">
                    {/* If someone is typing a text then to show this input box */}
                    {
                        !isImageSelected ? <Input className="visible" onChange={e => TypingStatus()} id="chatMessage" type="text" onKeyDown={e => handleKeyDown(e)} placeholder="Write a message..." /> 
                        : images1 ? imagePreview(images1) : null
                        
                    }
                    
                    
                    {/* Otherwise if someone is sending an image then show the image preview */}
                    
                </Col>
            
                <Col xs="2" className="text-center">
                    <ion-icon className="cursor-pointer" onClick={e => sendMessage()} name="send"></ion-icon>
                </Col>
            </Row>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Compose);
