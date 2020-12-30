import React from 'react';
import { Col, Row } from 'reactstrap';
import Toolbar from './Toolbar';
import MessageBubble from './MessageBubble';
import Compose from './Compose';

const ChatView = () => {
    return (
        <div>
            <Row>
                <Col xs="12">
                    <Toolbar />
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <MessageBubble />
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

export default ChatView
