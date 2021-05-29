import React,{ useState, useEffect} from 'react'
import { Label, Row, Col, CardBody, Card, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import '../styles/MessageBubble.css';
import {getRecieverChat} from '../../../components/Firebase/database';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Audi from '../../../assets/RelatedStoriesDemoimg.png'
import $ from "jquery"
const firebase = require('firebase').default

const MessageBubble = (props) => {
    const [message,setMessage] = useState([])
    // const [imagesList,setImageList] = useState([Audi,Audi,Audi,Audi,Audi,Audi])
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
        props.updateFunc(true)
        const container = document.getElementById('chatview-dashboard');
        if(container){
            // container.scrollTo(0, container.scrollHeight);
            // container.scrollTop = container.scrollHeight - container.clientHeight;
         

            $('#' + "chatview-dashboard").animate({
                scrollTop: container.scrollHeight - container.clientHeight
             }, 100);
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

    const multipleImagesCol = (index,list) => {
        var render = []
        for(let i = index; i < (index+2); i++){
            if(i === list.length){
                return render
            }
            render.push(
                <Col xs="6" style={{paddingRight: '3px'}}>
                    <LazyLoadImage effect="blur" src={list[i]} className="img-fluid" alt="Car 1" />
                </Col>
            )
        }
        return render
    }

    const multipleImagesRows = (list) => {
        var render = []
        for(let i = 0; i < list.length; i++){
            render.push(
            <Row>
                {
                    multipleImagesCol(i,list)
                }
            </Row>
            )
            i++
        }
        return render
    }

    const renderChatBubbels = (list) => {
        var table = [];
        for(let i = 0; i < list.length; i++){
            if(list[i].senderId == localStorage.getItem('userId')){

                if(list[i].enquiry){
                    //for Left
                    table.push(
                        <div className="inquiring-chat-view">
                        <CardBody style={{paddingRight: '0px', paddingLeft: '0px', paddingBottom: '3.7rem'}}>
                            <div className="inquiring-container" >
                                <Row className="inquaring-for-card">
                                    <Col xs="5" className="px-0">
                                        <CardImg loading="lazy" src={list[i].vehicleImage ? list[i].vehicleImage : null} />
                                    </Col>
                                    <Col xs="7" className="px-0">
                                        <CardTitle title="2019 Acura MDX ...">{list[i].vehicleTitle ? list[i].vehicleTitle : ""}</CardTitle>
                                        <CardSubtitle title="2019 Acura MDX ...">{list[i].vehicleSubTitle ? list[i].vehicleSubTitle : ""}</CardSubtitle>
                                        <CardText>${list[i].vehiclePrice ? list[i].vehiclePrice : ""}</CardText>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </div>
                    )
                }
                else if(list[i].multipleImagesList && list[i].multipleImagesList.length > 0){
                    table.push(
                        <Col xs="12">
                            <div className="grid-chat received">
                            {
                                multipleImagesRows(list[i].multipleImagesList)
                            }
                            </div>
                        </Col>

                    )
                }else if(checkURL(list[i].imageUrl)){
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
                        {/* <Col xs="12" sm="6" md="3">
                        
                                <div className="grid-chat">
                                {
                                    imagesList ? multipleImagesRows(imagesList) : null
                                }         
                                </div>

                            </Col> */}
                        </div>
                    )
                }
                
            }else{
                if(list[i].enquiry){
                    //for Right
                    table.push(
                        <div className="inquiring-chat-view">
                        <CardBody style={{paddingRight: '0px', paddingLeft: '0px', paddingBottom: '3.7rem'}}>
                            <div className="inquiring-container" >
                                <Row className="inquaring-for-card">
                                    <Col xs="5" className="px-0">
                                        <CardImg loading="lazy" src={list[i].vehicleImage ? list[i].vehicleImage : null} />
                                    </Col>
                                    <Col xs="7" className="px-0">
                                        <CardTitle title="2019 Acura MDX ...">{list[i].vehicleTitle ? list[i].vehicleTitle : ""}</CardTitle>
                                        <CardSubtitle title="2019 Acura MDX ...">{list[i].vehicleSubTitle ? list[i].vehicleSubTitle : ""}</CardSubtitle>
                                        <CardText>${list[i].vehiclePrice ? list[i].vehiclePrice : ""}</CardText>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </div>
                    )
                }
                else if(list[i].multipleImagesList && list[i].multipleImagesList.length > 0){
                    table.push(
                        <Col xs="12">
                            <div className="grid-chat sent float-right">
                            {
                                multipleImagesRows(list[i].multipleImagesList)
                            }
                            </div>
                        </Col>

                    )
                }else if(checkURL(list[i].imageUrl)){
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
