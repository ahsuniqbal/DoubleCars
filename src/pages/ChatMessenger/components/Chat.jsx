import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import ChatList from './ChatList';
import ChatView from './ChatView';
import ProfileView from './ProfileView';

import '../styles/Chat.css';

const Chat = () => {
    return (
        <Container>
            <Row>
                <Col md="3" className="chatlist-col" >
                    <ChatList />
                </Col>

                <Col md="6" style={{padding: '0', marginTop: '9rem'}}>
                    <ChatView />
                </Col>

                <Col xs="3" style={{padding: '0', marginTop: '9rem'}}>
                    <ProfileView />
                </Col>
            </Row>
        </Container>
    )
}

export default Chat;