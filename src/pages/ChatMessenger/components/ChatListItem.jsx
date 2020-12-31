import React,{useState,useEffect} from 'react';
import { Row, Col, CardImg, Label } from 'reactstrap';
// import personImg from '../../../assets/person-image.png';
import '../styles/ChatListItem.css';
export const UserChat = React.createContext()
const ChatListItem = (props) => {
    const [chat,setChat] = useState({})
    const stringLimitLength = (str) => {
        
        const imageString = "https://"
        if(str.toLowerCase().substring(0,8) === imageString){
            return "image"
        }
        if(str.length > 30){
            var res = str.substring(0,30);
            res += '...'
            return res
        }
        return str
    }

    const onClickChat = () => {
        setChat(props.chat)
    }
    

    return (
        <UserChat.Provider value={chat}>
        <Row className="chatlist-item" style={{backgroundColor: 'white'}} onClick={() => onClickChat}>
            <Col xs="3">
                <CardImg src={props.chat.user.profilePic} className="img-fluid" />    
            </Col>
            <Col xs="6">
                <Label className="name">{props.chat.user.fullName}</Label>
                <Label className="last-msg">{stringLimitLength(props.chat.chat.lastMessage)}</Label>
            </Col>
            <Col xs="3" className="text-center">
                <Label className="time">12 min</Label>
                <div className="unread-number">1</div>
            </Col>
        </Row>
        </UserChat.Provider>
    )
}

export default ChatListItem;