import React,{useState, useEffect} from 'react';
import { Card, CardBody, CardImg, Row, Col, Label } from 'reactstrap';
// import companyLogo from '../../../assets/company-logo.png';
import { Star, Trash2 } from 'react-feather';
// import { selectChat } from '../../../redux/actions/ChatActions.jsx';
import '../styles/Toolbar.css';
const firebase = require('firebase').default


// const mapDispatchToProps = (dispatch) => {
//     return {
//         selectChat: (chat) => {
//             dispatch(selectChat(chat));
//         }
//     }
// }

const Toolbar = (props) => {
    
    useEffect(() => {
        console.log(props.user)
        var userId = localStorage.getItem('userId')
        const strId = [userId, props.user.userId].sort().join('-')
        const obj = {
            senderTypeStatus : false,
            recieverTypeStatus : false,
        }
        firebase.firestore().collection("Chats").doc(strId)
        .update(obj)

        firebase.firestore().collection("Chats").doc(strId)
        .onSnapshot((snapshot) => {
            var snap = snapshot.data()
            if(snap.receiverId == props.user.userId){
                if(snap.recieverTypeStatus){
                    document.getElementById('typing').textContent = "Typing..."
                }else{
                    document.getElementById('typing').textContent = ""
                }
            }else{
                if(snap.senderTypeStatus){
                    document.getElementById('typing').textContent = "Typing..."
                }else{
                    document.getElementById('typing').textContent = ""
                }
            }
        })


    },[])

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
        var date = new Date(timeStamp)
        return timeSince(date)
    }


    return (
        <Card className="toolbar">
            <CardBody>
                <Row>
                    <Col xs="1">
                        <CardImg src={props.user.profilePic} />
                    </Col>
                    <Col xs="9">
                        <h6>{props.user.fullName}</h6>
                        <Label>{props.user.onlineStatus == 1 ? "Online" : lastMsgAt(props.user.lastSeen)}</Label>
                        <br/>
                        <Label id="typing"></Label>
                    </Col>

                    <Col xs="2">
                        <Star color="rgba(0, 0, 0, 0.25)" size={20} />
                        <Trash2 color="#E84D4D" size={20} />
                    </Col>
                </Row>
            </CardBody>

        </Card>
    )
}

export default  Toolbar
