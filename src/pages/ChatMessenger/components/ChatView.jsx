import React from 'react';
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
    console.log("propsChatView",props.chats)
    
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
                    <Compose />
                </Col>
            </Row>

        </div>
    )
}

export default connect(mapStateToProps, null)(ChatView);
