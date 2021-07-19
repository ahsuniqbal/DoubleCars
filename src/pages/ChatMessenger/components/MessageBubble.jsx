import React,{ useState, useEffect, useRef } from 'react'
import { Label, Row, Col, CardBody, Card, CardImg, CardTitle, CardSubtitle, CardText, Modal, Button, ModalBody } from 'reactstrap';
import '../styles/MessageBubble.css';
import {getRecieverChat} from '../../../components/Firebase/database';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import $ from "jquery"
import { AddCommaToNumber } from '../../../utils/NumberManipulation';
import dummyAvatar from '../../../assets/dummyAvatar.jpg'
const firebase = require('firebase').default

const MessageBubble = (props) => {

    const modalImageRef = useRef();
    const [imgPreviewModal, setImgPreviewModal] = useState(false);
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

    const openImgPreview = (e, imgUrl) => {
        e.preventDefault();
        // try {
        //     toggleImgPreviewModal();
        //     modalImageRef.current.style.backgroundImage = `url('${imgUrl}')`;
        // } catch (error) {
        //     console.log(error)
        // }

        window.open(imgUrl, '_blank');
        
        
    }


    // Toggle function for the image preview modal
    const toggleImgPreviewModal = () => {
        setImgPreviewModal(!imgPreviewModal);
    }
    
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
        for(let i = index; i < (index+3); i++){
            if(i === list.length){
                return render
            }
            render.push(
                <Col xs={list.length < 3 ? "6" : "4"} className="multiple-img-container">
                    <LazyLoadImage onClick={(e) => openImgPreview(e, list[i])} effect="blur" src={list[i]} className="multiple-image img-fluid" alt="Car 1" />
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
                    // Inquiry message for left
                    table.push(
                        <>
                        <div className="inquiring-chat-view cursor-pointer">
                        <CardBody style={{paddingRight: '0px', paddingLeft: '0px', paddingBottom: '3.7rem'}}>
                            <div className="inquiring-container" >
                                <Row className="inquaring-for-card float-right">
                                    <Col xs="5" className="px-0">
                                        <CardImg loading="lazy" src={list[i].vehicleImage ? list[i].vehicleImage : dummyAvatar } />
                                    </Col>
                                    <Col xs="7" className="px-0">
                                        <CardTitle title={list[i].vehicleTitle ? list[i].vehicleTitle : ""}>{list[i].vehicleTitle ? list[i].vehicleTitle : ""}</CardTitle>
                                        <CardSubtitle title={list[i].vehicleSubTitle ? list[i].vehicleSubTitle : ""}>{list[i].vehicleSubTitle ? list[i].vehicleSubTitle : ""}</CardSubtitle>
                                        <CardText>${AddCommaToNumber(list[i].vehiclePrice ? list[i].vehiclePrice : "")}</CardText>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </div>
                    {
                        list[i].enquiryText &&
                        <div className="message-bubble received">
                            <Label>{list[i].enquiryText}</Label>
                            <br/>
                        </div>
                    }
                    </>
                    )
                }
                else if(list[i].multipleImagesList && list[i].multipleImagesList.length > 0){
                    table.push(
                        // If you want to show the multiple images on right side add classname float-right
                        // If you want to show the multiple images on left side then remove float classname
                        <Row className="float-right">
                            <Col xs="12">
                                <div className="grid-chat float-right">
                                {
                                    multipleImagesRows(list[i].multipleImagesList)
                                }
                                </div>
                            </Col>
                        </Row>

                    )
                }
                // Single image for right
                else if(checkURL(list[i].imageUrl)){
                    table.push(
                        // <div className="message-bubble-img received">
                        //     <img src = {list[i].imageUrl} className="img-fluid" />
                        //     <br/>
                        // </div>

                        // If you want to show this single image on right then add the classname float-right
                        // If you want to show the image on left then remove float class
                        <div className="img-container float-right">
                            <LazyLoadImage onClick={(e) => openImgPreview(e, list[i].imageUrl)} effect="blur" src={list[i].imageUrl} className="single-img img-fluid" alt="Car 1" />
                        </div>
                    )
                }else{
                    table.push(
                        <div>
                            <div className="message-bubble received">
                                <Label>{list[i].messageText}</Label>
                                <br/>
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
                    // Inquiry for message for right
                    table.push(
                        <>
                        <div className="inquiring-chat-view cursor-pointer">
                        <CardBody style={{paddingRight: '0px', paddingLeft: '0px'}} className="pb-0">
                            <div className="inquiring-container pb-0 mb-0" >
                                <Row className="inquaring-for-card">
                                    <Col xs="5" className="px-0">
                                        <CardImg loading="lazy" src={list[i].vehicleImage ? list[i].vehicleImage : dummyAvatar } />
                                    </Col>
                                    <Col xs="7" className="px-0">
                                        <CardTitle title={list[i].vehicleTitle ? list[i].vehicleTitle : ""}>{list[i].vehicleTitle ? list[i].vehicleTitle : ""}</CardTitle>
                                        <CardSubtitle title={list[i].vehicleSubTitle ? list[i].vehicleSubTitle : ""}>{list[i].vehicleSubTitle ? list[i].vehicleSubTitle : ""}</CardSubtitle>
                                        <CardText>${AddCommaToNumber(list[i].vehiclePrice ? list[i].vehiclePrice : "")}</CardText>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </div>
                    {
                        list[i].enquiryText &&
                        <div className="message-bubble sent">
                            <Label>{list[i].enquiryText}</Label>
                            <br/>
                        </div>
                    }
                </>
                    )
                }
                else if(list[i].multipleImagesList && list[i].multipleImagesList.length > 0){
                    table.push(
                        
                        // If you want to show the multiple images on right side add classname float-right
                        // If you want to show the multiple images on left side then remove float classname
                        <Col xs="12">
                            <div className="grid-chat">
                            {
                                multipleImagesRows(list[i].multipleImagesList)
                            }
                            </div>
                        </Col>

                    )
                }
                // Single image for left
                else if(checkURL(list[i].imageUrl)){
                    table.push(
                    //     <div className="message-bubble-img sent">
                    //     <img src = {list[i].imageUrl} className="img-fluid" />
                    //     <br/>
                    // </div>

                        // If you want to show this single image on right then add the classname float-right
                        // If you want to show the image on left then remove float class
                        <div className="img-container">
                            <LazyLoadImage onClick={(e) => openImgPreview(e, list[i].imageUrl)} effect="blur" src={list[i].imageUrl} className="single-img img-fluid" alt="Car 1" />
                        </div>
                    )
                }
                else{
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
        <>
        <div className="chatview-dashboard" id="chatview-dashboard">
            {
                message ? renderChatBubbels(message) : null
            }



            {/* Preview image modal */}
            <Modal isOpen={imgPreviewModal} toggle={toggleImgPreviewModal} centered>
                <Button onClick={toggleImgPreviewModal} className="close-btn">X</Button>
                <ModalBody>
                    <div className="modal-img" ref={modalImageRef}>
                    </div>
                </ModalBody>
            </Modal>
        </div>

        
        </>
    )
}

export default MessageBubble
