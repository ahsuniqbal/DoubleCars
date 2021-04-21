import React,{useEffect, useState} from 'react';
import ImageGallery from 'react-image-gallery';
import '../styles/Gallery.css';
import { Bookmark } from 'react-feather';
import { GetIfSaved } from '../api/GetRequests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import {postSaveCar} from '../../../components/ProductCard/api/post';
import LoginSignupModal from '../../Authentication/LoginSignupModal/LoginSignupModal'
import { getLogin, isLogin } from '../../../config/LoginAuth';

const Gallery = (props) => {

    const [saveId, setSaveId] = useState(null);
    const [popupModal, setPopupModal] = useState(false);
    
    const popupToggle = () => setPopupModal(!popupModal);

    useEffect(() => {
        GetIfSaved(props.productId, getLogin()).then(doc => {
            console.log(doc)
            setSaveId(doc.details[0].saveId);
        }).catch(error => {
            console.log(error)
        })
    }, [])


    const handleClick = (productId, userId) => {
        const obj = {
            productId,
            userId
        }
        postSaveCar(obj).then(doc => {
            console.log(doc)
            // if(doc.code === 1) {
                setSaveId(doc.saveId);
            // }
            // else if(doc.code === -1) {
                // setSaveId(doc.saveId)
            // }
        }).catch(error => {
            console.log(error)
        })
    }

    return(
        <div>    
            <ImageGallery
                items={props.items}
                lazyLoad={true}
                showFullscreenButton={false}
                showPlayButton={false}
                showFullscreenButton={true}
            />
            <div className = "save-icon-gallery" onClick={() => isLogin() ? handleClick(props.productId, getLogin()) : popupToggle() }>
                <LoginSignupModal isOpen={popupModal} toggle={popupToggle} />
                {
                    saveId ? 
                    <FontAwesomeIcon icon={faBookmark} className = "save-gallery-icon" onClick={() => handleClick(props.productId, getLogin())} />
                    :
                    <Bookmark color="#000000" size={20} className = "un-save-gallery-icon" onClick={() => isLogin() ? handleClick(props.productId, getLogin()) : popupToggle() } />
                }
            </div>
        </div>    
    );
};

export default Gallery;