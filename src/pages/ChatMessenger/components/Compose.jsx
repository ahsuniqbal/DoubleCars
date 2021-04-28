import React, {useEffect} from 'react'
import { Input } from 'reactstrap';
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
  
const Compose = (props) => {

    const classes = useStyles();

    useEffect(() => {
        var input = document.getElementById('chatMessage')
        input.addEventListener('keyup', function (e) {
            console.log('Value:', input.value);
            var userId = localStorage.getItem('userId')
            const strId = [userId, props.chatInfo.receiverId].sort().join('-')
            var obj = {}
            if(props.chatInfo.receiverId == userId){
                obj = {
                    recieverTypeStatus : false
                }
            }else{
                obj = {
                    senderTypeStatus : false
                }
            }
            firebase.firestore().collection("Chats").doc(strId)
            .update(obj)
            })
        
    },[]) 

    const messageValid = (txt) => (txt && txt.replace(/\s/g, '').length);
    
    const sendMessage = () => {
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
            var updateObj = {
                lastMessage : msg,
                lastMessageAt : firebase.firestore.Timestamp.now(),
                receiverHasRead : false
            }
            firebase.firestore().collection("Chats").doc(strId)
            .update(updateObj)

            const chatBoard = document.getElementById('chat-board');

            // chatBoard.scrollTop = chatBoard.scrollHeight + 100;
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
        //console.log(images[0])
        if(images.length === 1){
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
            document.getElementById('chatMessage').value = ""
            var updateObj = {
                lastMessage : "has sent "  + urls.length + " imags",
                lastMessageAt : firebase.firestore.Timestamp.now(),
                receiverHasRead : false
            }
            firebase.firestore().collection("Chats").doc(strId)
            .update(updateObj)
        }
        
    }

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

    return (
        <div className="compose">
            
            {/* <Input  id="image" type="file" accept="image/*">
            <Paperclip color="#1C67CE" size={30}/>
            </Input> */}
            <input accept="image/*" onChange={e => onChangeImage(e)} className={classes.input} id="icon-button-file" type="file" multiple/>
            <label htmlFor="icon-button-file" className="mb-0">
                <IconButton color="primary" aria-label="upload picture" component="span">
                <Paperclip size={18} />
                </IconButton>
            </label>

            
            <Input onChange={e => TypingStatus()} id="chatMessage" type="text" onKeyDown={e => handleKeyDown(e)} placeholder="Write a message..." />
            {/* <Send onClick={e => sendMessage()} color="#1C67CE" size={20} /> */}
            <ion-icon className="cursor-pointer" onClick={e => sendMessage()} name="send"></ion-icon>
        </div>
    )
}

export default Compose
