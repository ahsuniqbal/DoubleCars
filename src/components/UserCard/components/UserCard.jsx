import React,{ useState, useEffect} from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Col, Label, Button, Badge } from 'reactstrap';

import { Link } from 'react-router-dom';
import dummyuser from '../../../assets/profile-chat.png';
import '../styles/UserCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {postSaveCar} from '../api/post';

const UserCard = (props) => {

    const [savedProductId, setSavedProductId] = useState(props.isSave);
    const [popupModal, setPopupModal] = useState(false);

    const popupToggle = () => setPopupModal(!popupModal);

    const saveCarFunc = (productId) => {
        var userId;
        if(localStorage.getItem("userId") && localStorage.getItem("userId") !== "undefined"){
            userId = localStorage.getItem('userId')
        }else{
            alert('You need to login First')
            return
        }
        
        const obj = {
            productId,userId
        }
        
        postSaveCar(obj)
        .then(doc => {                
            if(doc.code == -1){
                
                if(window.location.pathname=='/saved-cars')
                {
                    window.location.reload()
                }
                else{
                    alert(doc.message)
                }
                
            }
            else {
                setSavedProductId(doc.saveId)  
            }
        })
        .catch(e => {
            console.log(e.message)
        })
    }


  return (
    <Card className="user-card">
        {/* Link to the product details page */}
        <Link to={"/product/" + props.productId}>
            <div className="user-img">
                {/* Lazy load component used for product cover image */}
                <LazyLoadImage className="card-img mx-auto"  effect="blur" src={dummyuser} />
            </div>
        </Link>
        
        <CardBody>
            <Row>
                <Col xs={props.allowBookmark ? "9" : "12"}>
                    {/* Link to the product details page */}
                    <Link to={"/product/"}>
                        {/* Name of the car */}
                        <CardTitle>One Chance Auto</CardTitle>
                    </Link>
                    <Link className = "view-inv-link" to={''}>
                        <Button color = "primary" size = "lg" block className = "view-inv-button">View Inventory</Button>
                    </Link>
                </Col>
            </Row>
        </CardBody>
       
    </Card>
  );
}

export default UserCard;
