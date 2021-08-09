import React, {useEffect,useState} from 'react';
import { Row, Col, CardImg, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { selectChat } from '../../../redux/actions/ChatActions.jsx';
import dummyAvatar from '../../../assets/dummyAvatar.jpg'
import '../styles/ChatListItem.css';
import {postReadCount} from '../../../components/Firebase/database'
const firebase = require('firebase').default

const mapDispatchToProps = (dispatch) => {
    return {
        selectChat: (chat) => {
            console.log('Hello Ashar chat',chat)
            readHasCountFalseFunc(chat.chat)
            dispatch(selectChat(chat));
        }
    }
}

const readHasCountFalseFunc = (chat) => {
    const userId = localStorage.getItem('userId');
    var obj = {}
    
    if(chat.receiverId == userId){
        obj = {
            receiverUnreadCount : 0,
            receiverHasRead : true
        }
    }else{
        obj = {
            senderUnreadCount : 0,
            senderHasRead : true
        }
    }
    console.log('AsharObj',obj)
    postReadCount(chat.senderId, chat.receiverId,obj)
    .then(doc => {
        console.log('asharDoc',doc)
    }).catch(error => {
        console.log('AsharError',error)
    })

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

    const [flag,setFlag] = useState(false)

    const getNotify = (chat) => {
        var userId = localStorage.getItem('userId')
        if(chat.receiverId == userId){
            return {
                status : !chat.receiverHasRead,
                count : chat.senderUnreadCount
            }
        }else if(chat.senderId == userId){
            return {
                status : !chat.senderHasRead,
                count : chat.receiverUnreadCount
            }
        }
    }

    const trimString =  (string, length) => {
    return string.length > length ? 
            string.substring(0, length) + '...' :
            string;
    };
  
    useEffect(() => {
        setFlag(!flag)
    },[props.chat])
    

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
        let a = elapsed < hour  && [Math.floor(elapsed / minute), 'min'] ||
                elapsed < day   && [Math.floor(elapsed / hour), 'hr']     ||
                elapsed < month && [Math.floor(elapsed / day), 'day']       ||
                elapsed < year  && [Math.floor(elapsed / month), 'month']   ||
                [Math.floor(elapsed / year), 'yrs'];
    
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
                    getNotify(props.chat.chat).status && getNotify(props.chat.chat).count !== 0 ? <div className="unread-number">{getNotify(props.chat.chat).count}</div> : null
                }
                
            </Col>
        </Row>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatListItem);