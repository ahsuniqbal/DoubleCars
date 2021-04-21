import React,{ useState, useEffect} from 'react'
import { Label, Row, Col } from 'reactstrap';
import '../styles/MessageBubble.css';
import {getRecieverChat} from '../../../components/Firebase/database';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Audi from '../../../assets/RelatedStoriesDemoimg.png'
const firebase = require('firebase').default

const MessageBubble = (props) => {
    const [message,setMessage] = useState([])
    useEffect(() => {
        const key = [props.chat.senderId, props.chat.receiverId].sort().join('-')
        if(props.chat){
            firebase.firestore().collection("Chats").doc(key).collection('Messages')
            .orderBy('messagedAt','asc')
            .onSnapshot((snapshot) => {
            let updatedData = snapshot.docs.map(doc => doc.data())
            setMessage(updatedData)
            })
        }
    },[props.chat])

    useEffect(() => {
        //whenever message updates this will run to make sure view of chat is at the bottom, always.
        const container = document.getElementById('chatview-dashboard');
        if(container){
            container.scrollTo(0, container.scrollHeight);
        }
    },[message])


    const checkURL = (url) => {
        var arr = [ "jpeg", "jpg", "png", "gif" ];
        if(url == null){
            return false
        }
        var ext = url.substring(url.lastIndexOf(".")+1).split('?')[0];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == ext){
                return true
            }
        }
        return false
    }

    const renderChatBubbels = (list) => {
        var table = [];
        for(let i = 0; i < list.length; i++){
            if(list[i].senderId == localStorage.getItem('userId')){
                if(checkURL(list[i].imageUrl)){
                    table.push(
                        <div className="message-bubble-img received">
                        <img src = {list[i].imageUrl} className="img-fluid" />
                        <br/>
                    </div>
                    )
                }else{
                    table.push(
                        <div>

                        
                        <div className="message-bubble received">
                            <Label>{list[i].messageText}</Label>
                            <br/>
                            {/* Image grid */}
                            
                        </div>
                        <Col xs="12" sm="6" md="3">
                            {/* Image grid for 3 pictures */}
                                <div className="grid-chat">
                                    <Row>
                                    <Col xs="5" style={{paddingLeft: '3px'}}>
                                           
                                            <LazyLoadImage effect="blur" src={Audi} className="img-fluid mt-1" alt="Car 1"/>
                                        </Col>

                                        <Col xs="5" style={{paddingLeft: '3px'}}>
                                            <LazyLoadImage effect="blur" src={Audi} className="img-fluid" alt="Car 1" />
                                            <LazyLoadImage effect="blur" src={Audi} className="img-fluid mt-1" alt="Car 1"/>
                                        </Col>
                                    </Row>
                            
                                    <Row style={{marginTop: '20px', marginBottom: '17px'}}>
                                        <Col xs="12">
                                            <h6 className="cursor-pointer" onClick={() => console.log(list[i].filter_query)}>{list[i].title}</h6>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </div>
                    )
                }
                
            }else{

                if(checkURL(list[i].imageUrl)){
                    table.push(
                        <div className="message-bubble-img sent">
                        <img src = {list[i].imageUrl} className="img-fluid" />
                        <br/>
                    </div>
                    )
                }else{
                    table.push(
                        <div className="message-bubble sent">
                            <Label>{list[i].messageText}</Label>
                            <br/>
                        </div>
                    )
                }
                // table.push(
                //     <>
                //      <div className="message-bubble received">
                //         <Label>{list[i].messageText}</Label>
                //         <br/>
                //     </div>

                //      <div className="message-sent-date">
                //         Today
                //     </div>
                //     </>
                // )
            }
        }
        return table
    }
    return (
        <div className="chatview-dashboard" id="chatview-dashboard">
            {
                message ? renderChatBubbels(message) : null
            }
        </div>
    )
}

export default MessageBubble
