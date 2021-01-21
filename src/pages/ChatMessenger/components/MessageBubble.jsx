import React,{ useState, useEffect} from 'react'
import { Label } from 'reactstrap';
import '../styles/MessageBubble.css';

import {getRecieverChat} from '../../../components/Firebase/database';


const MessageBubble = (props) => {
    const [message,setMessage] = useState([])
    useEffect(() => {
        console.log("props.chats.chat",props.chat)
        if(props.chat){
            getRecieverChat(props.chat.receiverId,props.chat.senderId)
            .then(doc => {
                console.log("chatDoc",doc)
                setMessage(doc)
            })
            .catch(e => {
                console.log(e.message)
            })
        }
    },[props.chat])


    const checkURL = (url) => {
        var arr = [ "jpeg", "jpg", "png", "gif" ];
        if(url == null){
            return false
        }
        console.log("url",url)
        var ext = url.substring(url.lastIndexOf(".")+1).split('?')[0];
        console.log('ext',ext,url)
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
                        <div className="sent">
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
                
            }else{

                if(checkURL(list[i].imageUrl)){
                    table.push(
                        <div className="received">
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
        <div>
            {
                message ? renderChatBubbels(message) : null
            }
        </div>
    )
}

export default MessageBubble
