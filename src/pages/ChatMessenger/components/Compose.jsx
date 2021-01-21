import React from 'react'
import { Input } from 'reactstrap';
import { Paperclip, Send } from 'react-feather';
import '../styles/Compose.css';
const firebase = require('firebase').default
const Compose = (props) => {


    const messageValid = (txt) => (txt && txt.replace(/\s/g, '').length);
    
    const sendMessage = () => {
        var msg = document.getElementById('chatMessage').value
        if(messageValid(msg)){
            var userId = 73
            var obj = {
                messageId : "asdsa",
                imageUrl : null,
                messageImage : null,
                multipleImagesList : null,
                messageText : msg,
                messagedAt : firebase.firestore.Timestamp.now(),
                senderId : userId
            }
            const strId = [userId, props.otherId].sort().join('-')
            //var strId = "72-73"
            console.log("final thing to send",obj,strId)
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
        }
        
        
    }

    return (
        <div className="compose">
            <Paperclip color="#1C67CE" size={30} />
            <Input id="chatMessage" type="text" placeholder="Write a message..." />
            <Send onClick={e => sendMessage()} color="#1C67CE" size={30} />
        </div>
    )
}

export default Compose
