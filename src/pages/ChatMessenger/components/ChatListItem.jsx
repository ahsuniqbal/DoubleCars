import React from 'react';
import { Row, Col, CardImg, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { selectChat } from '../../../redux/actions/ChatActions.jsx';
import '../styles/ChatListItem.css';


const mapDispatchToProps = (dispatch) => {
    return {
        selectChat: (chat) => {
            dispatch(selectChat(chat));
        }
    }
}

const checkURL = (url) => {
    var arr = [ "jpeg", "jpg", "png", "gif" ];
   var ext = url.substring(url.lastIndexOf(".")+1).split('?')[0];
   for(let i = 0; i < arr.length; i++){
       if(arr[i] == ext){
           return true
       }
   }
   return false
}

const ChatListItem = (props) => {
    return (
        <Row className="chatlist-item" style={{backgroundColor: 'white'}} onClick={() => props.selectChat(props.chat)}>
            <Col xs="3">
                <CardImg src={props.chat.user.profilePic} className="img-fluid" />    
            </Col>
            <Col xs="6">
                <Label className="name">{props.chat.user.fullName}</Label>
                <Label className="last-msg">{checkURL(props.chat.chat.lastMessage) ? "Has sent a file" : props.chat.chat.lastMessage}</Label>
            </Col>
            <Col xs="3" className="text-center">
                <Label className="time">12 min</Label>
                <div className="unread-number">1</div>
            </Col>
        </Row>
    )
}

export default connect(null, mapDispatchToProps)(ChatListItem);