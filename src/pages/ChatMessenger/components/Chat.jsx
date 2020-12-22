import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import ChatList from './ChatList';

const Chat = () => {
    return (
        <Container>
            <Row>
                <Col xs="2" md="3">
                    <ChatList />
                </Col>
            </Row>
        </Container>
    )
}

export default Chat;