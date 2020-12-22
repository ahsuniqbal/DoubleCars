import React from 'react';
import { Row, Col, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import ChatListItem from './ChatListItem';
import '../styles/ChatList.css';
import { MoreVertical, Search } from 'react-feather';

const ChatList = () => {
    return (
        <Row className="chat-list">
            <Col xs="12">
                <div style={{padding: '20px'}}>
                    <Row>
                        <Col xs="10">
                            <h2>Messages</h2>
                        </Col>
                        <Col xs="2">
                            <MoreVertical />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="12">
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <Search width={15} />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input className="chat-list-search-box" id="search-box" type="text" placeholder="Search" />
                            </InputGroup>
                        </Col>
                    </Row>
                </div>
                <div className="scrollable">
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                    <ChatListItem />
                </div>
            </Col>
        </Row>
    )
}

export default ChatList;