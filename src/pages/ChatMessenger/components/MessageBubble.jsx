import React,{ useState, useEffect} from 'react'
import { Label } from 'reactstrap';
import '../styles/MessageBubble.css';
import {getRecieverChat} from '../../../components/Firebase/database';
const firebase = require('firebase').default

const MessageBubble = (props) => {
    const [message,setMessage] = useState([])
    useEffect(() => {
        const key = [props.chat.senderId, props.chat.receiverId].sort().join('-')
        if(props.chat){
            firebase.firestore().collection("Chats").doc(key).collection('Messages')
            .orderBy('messagedAt','asc')
            .onSnapshot((snapshot) => {
            let updatedData = snapshot.docs.map(doc => doc.data())
            setMessage(updatedData)
            })
        }
    },[props.chat])

    useEffect(() => {
        //whenever message updates this will run to make sure view of chat is at the bottom, always.
        const container = document.getElementById('chatview-dashboard');
        if(container){
            container.scrollTo(0, container.scrollHeight);
        }
    },[message])


    const checkURL = (url) => {
        var arr = [ "jpeg", "jpg", "png", "gif" ];
        if(url == null){
            return false
        }
        var ext = url.substring(url.lastIndexOf(".")+1).split('?')[0];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == ext){
                return true
            }
        }
        return false
    }

    const renderChatBubbels = (list) => {
        var table = [];
        for(let i = 0; i < list.length; i++){
            if(list[i].senderId == 73){
                if(checkURL(list[i].imageUrl)){
                    table.push(
                        <div className="message-bubble-img received">
                        <img src = {list[i].imageUrl} className="img-fluid" />
                        <br/>
                    </div>
                    )
                }else{
                    table.push(
                        <div className="message-bubble received">
                            <Label>{list[i].messageText}</Label>
                            <br/>
                        </div>
                    )
                }
                
            }else{

                if(checkURL(list[i].imageUrl)){
                    table.push(
                        <div className="message-bubble-img sent">
                        <img src = {list[i].imageUrl} className="img-fluid" />
                        <br/>
                    </div>
                    )
                }else{
                    table.push(
                        <div className="message-bubble sent">
                            <Label>{list[i].messageText}</Label>
                            <br/>
                        </div>
                    )
                }
                // table.push(
                //     <>
                //      <div className="message-bubble received">
                //         <Label>{list[i].messageText}</Label>
                //         <br/>
                //     </div>

                //      <div className="message-sent-date">
                //         Today
                //     </div>
                //     </>
                // )
            }
        }
        return table
    }
    return (
        <div className="chatview-dashboard" id="chatview-dashboard">
            {
                message ? renderChatBubbels(message) : null
            }
        </div>
    )
}

export default MessageBubble
