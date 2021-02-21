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
        var userId = localStorage.getItem('userId')
        // var userId = 73
        if(props.chats && props.chats.chat){
            if(props.chats.chat.senderId == userId){
                setOtherId(props.chats.chat.receiverId)
            }else{
                setOtherId(props.chats.chat.senderId)
            }
        }
    },[props.chats])
    
    return (
        <div>
            <Row>
                <Col xs="12">
                    {props.chats.chat ? <Toolbar user={props.chats.user}/> : null}
                </Col>
            </Row>

            <Row className="chat-board">
                <Col xs="12" style={{paddingLeft: '25px', paddingRight: '25px'}}>
                {props.chats.chat ? <MessageBubble chat={props.chats.chat}/> : null}
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    {
                        props.chats.chat ? <Compose otherId={otherId} chatInfo={props.chats.chat}/> : null
                    }
                </Col>
            </Row>

        </div>
    )
}

export default connect(mapStateToProps, null)(ChatView);
