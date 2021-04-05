import React,{useState, useEffect} from 'react';
import { Row, Col, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import ChatListItem from './ChatListItem';
import '../styles/ChatList.css';
import { MoreVertical, Search } from 'react-feather';
import {getUserChats,getRecieverChat} from '../../../components/Firebase/database'
import { connect } from 'react-redux';
import {getChatUserPics} from '../api/Get'
import { selectChat } from '../../../redux/actions/ChatActions.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        selectChat: (chat) => {
            dispatch(selectChat(chat));
        }
    }
}

const ChatList = (props) => {
    const [chats,setChats] = useState([])
    const [constChats,setConstantChats] = useState([])

    
    useEffect(() => {
        
        var user = localStorage.getItem("userId")
        console.log("USER",user)
        // var user = 73
        getUserChats(user)
        .then(snap => {
            if(snap.userIds.length > 0){
                getChatUserPics(snap.userIds.toString())
            .then(doc => {
            var newList = []
            for(let i = 0; i < doc.length; i++){
                var obj = {
                    user : doc[i],
                    chat : snap.chats[i],
                    username : doc[i].fullName.toLowerCase()
                }
                newList.push(obj)
            }
                props.selectChat(newList[0])
               setChats(newList)
               setConstantChats(newList)
            })
            .catch(e => {
                console.log(e.message)
            })
            }
        })
    },[])

    const renderChatList = (list) => {
        var table = [];
        for(let i = 0; i < list.length; i++){
            table.push(
                <ChatListItem  chat={list[i]}/>
            )
        }
        return table;
    }

    const onChangeText = (val) => {
        if(val == ""){
            setChats(constChats)
            return;
        }
        val = val.toLowerCase()
        var temp = []
        for(let i = 0; i < constChats.length; i++){
            if(constChats[i].username.includes(val)){

                temp.push(constChats[i])
            }
        }
        setChats(temp)
    }

    return (
        <Row className="chat-list">
            <Col xs="12" style={{padding: '0'}}>
                <div style={{padding: '20px'}}>
                    <Row style={{marginTop: '10px'}}>
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
                                <Input onChange={e => onChangeText(e.target.value)} className="chat-list-search-box" id="search-box" type="text" placeholder="Search" />
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

export default connect(null, mapDispatchToProps)(ChatList);