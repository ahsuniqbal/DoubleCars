import React, {useState} from 'react';
import { Row, Col, Container } from 'reactstrap';
import ChatList from './ChatList';
import ChatView from './ChatView';
import ProfileView from './ProfileView';

import NavigationBar from '../../../components/NavigationBar';

import '../styles/Chat.css';

const Chat = () => {

    const [up,setUp] = useState(false)

    const updateFunc = (updateView) => {
        setUp(!up)
    }


    return (
        <>
        <NavigationBar />
        <Container>
            
            <Row className = "main-chat-row">
                <Col md="3" className="chatlist-col" >
                    <ChatList up={up}/>
                </Col>

                <Col md="6" style={{padding: '0', borderRadius: '2rem', marginTop: '2rem'}}>
                    <ChatView updateFunc={updateFunc} />
                </Col>

                <Col xs="3" style={{padding: '0', marginTop: '2rem'}}>
                    <ProfileView />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Chat;