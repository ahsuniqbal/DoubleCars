import React from 'react';
import { Row, Col, CardImg, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { selectChat } from '../../../redux/actions/ChatActions.jsx';
import dummyAvatar from '../../../assets/dummyAvatar.jpg'
import '../styles/ChatListItem.css';


const mapDispatchToProps = (dispatch) => {
    return {
        selectChat: (chat) => {
            dispatch(selectChat(chat));
        }
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        message: state.MessageReducer
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
    const getNotify = (chat) => {
        console.log('chat',chat)
        var userId = localStorage.getItem('userId')
        if(chat.receiverId == userId){
            return chat.receiverHasRead
        }else if(chat.senderId == userId){
            return chat.senderHasRead
        }
    }

    const trimString =  (string, length) => {
    return string.length > length ? 
            string.substring(0, length) + '...' :
            string;
    };
  

    

    const timeSince = (date) => {
        let minute = 60;
        let hour   = minute * 60;
        let day    = hour   * 24;
        let month  = day    * 30;
        let year   = day    * 365;
    
        let suffix = ' ago';
    
        let elapsed = Math.floor((Date.now() - date) / 1000);
    
        if (elapsed < minute) {
            return 'just now';
        }
    
        // get an array in the form of [number, string]
        let a = elapsed < hour  && [Math.floor(elapsed / minute), 'minute'] ||
                elapsed < day   && [Math.floor(elapsed / hour), 'hour']     ||
                elapsed < month && [Math.floor(elapsed / day), 'day']       ||
                elapsed < year  && [Math.floor(elapsed / month), 'month']   ||
                [Math.floor(elapsed / year), 'year'];
    
        // pluralise and append suffix
        return a[0] + ' ' + a[1] + (a[0] === 1 ? '' : 's') + suffix;
    }
    
    const lastMsgAt = (timeStamp) => {
        var date = new Date(timeStamp.toDate())
        return timeSince(date)
    }
    
    return (
        <Row className="chatlist-item" onClick={() => props.selectChat(props.chat)}>
            <Col xs="3" className="profile-img-parent">
                <CardImg src={props.chat.user.profilePic ? props.chat.user.profilePic : dummyAvatar} className="img-fluid" />    
            </Col>
            <Col xs="6" style={{paddingRight: '0px', paddingLeft: '5px'}}>
                <p className="name">{props.chat.user.fullName}</p>
                <Label className="last-msg">
                    {/* Message from firebase */}
                    {checkURL(props.chat.chat.lastMessage) ? "Has sent a file" : trimString(props.chat.chat.lastMessage,20)}

                    {/* Message from redux */}
                    {/* {props.message.chat ? checkURL(props.message.chat) ? "Has sent a file" : trimString(props.message.chat,20) : ""} */}
                </Label>
            </Col>
            <Col xs="3" className="text-center">
                <Label className="time">{lastMsgAt(props.chat.chat.lastMessageAt)}</Label>
                {
                    getNotify(props.chat.chat) ? <div className="unread-number">1</div> : null
                }
                
            </Col>
        </Row>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatListItem);