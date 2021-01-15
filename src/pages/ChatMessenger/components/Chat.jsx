import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import ChatList from './ChatList';
import ChatView from './ChatView';
import ProfileView from './ProfileView';

const Chat = () => {
    return (
        <Container>
            <Row>
                <Col md="3">
                    <ChatList />
                </Col>

                <Col md="6" style={{padding: '0'}}>
                    <ChatView />
                </Col>

                <Col xs="3" style={{padding: '0'}}>
                    <ProfileView />
                </Col>
            </Row>
        </Container>
    )
}

export default Chat;