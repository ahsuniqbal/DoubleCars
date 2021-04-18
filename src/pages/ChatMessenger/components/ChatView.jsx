import React, {useEffect,useState} from 'react';
import { Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import Toolbar from './Toolbar';
import MessageBubble from './MessageBubble';
import Compose from './Compose';
import '../styles/ChatView.css';

const mapStateToProps = (state) => {
    return {
        chats: state
    }
}

const ChatView = (props) => {
    const [otherId,setOtherId] = useState(null)

    useEffect(() => {
        console.log("props.chats",props.chats)
        var userId = localStorage.getItem('userId')
        // var userId = 73
        if(props.chats){
            if(props.chats.chat){
                if(props.chats.chat.senderId == userId){
                    setOtherId(props.chats.chat.receiverId)
                }else{
                    setOtherId(props.chats.chat.senderId)
                }
            }
        }
    },[props.chats])
    
    return (
        <div>
            <Row>
                <Col xs="12">
                    {props.chats ? props.chats.chat ? <Toolbar user={props.chats.user}/> : null : null}
                </Col>
            </Row>

            <Row id="chat-board" className="chat-board">
                <Col xs="12" style={{paddingLeft: '25px', paddingRight: '25px'}}>
                {props.chats ? props.chats.chat ? <MessageBubble chat={props.chats.chat}/> : null : null}
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    {
                        props.chats ? props.chats.chat ? <Compose otherId={otherId} chatInfo={props.chats.chat}/> : null : null
                    }
                </Col>
            </Row>

        </div>
    )
}

export default connect(mapStateToProps, null)(ChatView);
