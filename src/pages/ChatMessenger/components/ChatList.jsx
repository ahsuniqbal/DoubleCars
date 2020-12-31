import React,{useState, useEffect} from 'react';
import { Row, Col, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import ChatListItem from './ChatListItem';
import '../styles/ChatList.css';
import { MoreVertical, Search } from 'react-feather';
import {getUserChats,getRecieverChat} from '../../../components/Firebase/database'
import {getChatUserPics} from '../api/Get'

const ChatList = () => {
    const [chats,setChats] = useState([])
    
    useEffect(() => {
        // var user = localStorage.getItem("userId")
        var user = 73
        getUserChats(user)
        .then(snap => {
           console.log("snap",snap)
            getChatUserPics(snap.userIds.toString())
            .then(doc => {
            //  console.log('doc',doc)
            var newList = []
            for(let i = 0; i < doc.length; i++){
                var obj = {
                    user : doc[i],
                    chat : snap.chats[i]
                }
                newList.push(obj)
            }
                console.log(newList)
               setChats(newList)
            })
            .catch(e => {
                console.log(e.message)
            })
            
        })
    },[])

    const renderChatList = (list) => {
        var table = [];
        for(let i = 0; i < list.length; i++){
            table.push(
                <ChatListItem chat={list[i]}/>
            )
        }
        return table;
    }

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
                    {
                        chats ? renderChatList(chats) : null
                    }
                </div>
            </Col>
        </Row>
    )
}

export default ChatList;