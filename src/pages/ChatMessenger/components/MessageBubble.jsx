import React,{ useState, useEffect} from 'react'
import { Label } from 'reactstrap';
import {getRecieverChat} from '../../../components/Firebase/database'
const MessageBubble = (props) => {
    const [message,setMessage] = useState([])
    useEffect(() => {
        console.log("props.chats.chat",props.chat)
        if(props.chat){
            getRecieverChat(props.chat.receiverId,props.chat.senderId)
            .then(doc => {
                console.log(doc)
                setMessage(doc)
            })
            .catch(e => {
                console.log(e.message)
            })
        }
    },[])

    const renderChatBubbels = (list) => {
        var table = [];
        for(let i = 0; i < list.length; i++){
            if(i % 2 === 0){
                table.push(
                    <div>
                    <Label>{list[i].messageText}</Label>
                    <br/>
                    </div>
                )
            }else{
                table.push(
                    <div>
                    <Label>{list[i].messageText}</Label>
                    <br/>
                    </div>
                )
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
