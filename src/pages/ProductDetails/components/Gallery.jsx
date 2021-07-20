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
import Lottie from 'react-lottie';
import saveAnimation from '../../../assets/animations/save.json';
import unSaveAnimation from '../../../assets/animations/unsave.json';

const Gallery = (props) => {

    const [saveId, setSaveId] = useState(null);
    const [popupModal, setPopupModal] = useState(false);
    const [matched,setMatched] = useState(true)
    
    const popupToggle = () => setPopupModal(!popupModal);



    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: saveAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    const defaultUnSaveOptions = {
        loop: false,
        autoplay: false,
        animationData: unSaveAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };


    useEffect(() => {
        GetIfSaved(props.productId, getLogin()).then(doc => {
            setSaveId(doc.details[0].saveId);
        }).catch(error => {
            console.log(error)
        })

        function handleResize() {
            if(window.innerWidth<=Number(768)){
                setMatched(false)
            }else{
                setMatched(true)
            }
        } 

        window.addEventListener('resize', handleResize)
        if(window.innerWidth<=Number(768)){
            setMatched(false)
        }else{
            setMatched(true)

        }
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
            <div className="image-gallery-container">
                <ImageGallery
                    items={props.items}
                    lazyLoad={true}
                    showPlayButton={false}
                    showThumbnails={matched}
                    showNav={matched}
                    autoPlay={false}
                    showFullscreenButton={matched}
                />
            </div>
            <div className = "save-icon-gallery" onClick={() => isLogin() ? handleClick(props.productId, getLogin()) : popupToggle() }>
                <LoginSignupModal isOpen={popupModal} toggle={popupToggle} />
                {
                    saveId ? 
                    // <Lottie options={defaultOptions} />
                    <FontAwesomeIcon icon={faBookmark} className = "save-gallery-icon" />
                    :
                    <Bookmark color="#000000" size={20} className = "un-save-gallery-icon" />
                    // <Lottie options={defaultUnSaveOptions} />
                }
            </div>
        </div>    
    );
};

export default Gallery;