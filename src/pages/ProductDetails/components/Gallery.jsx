import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../styles/Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Gallery = (props) => {
    return(
        <div>    
            <ImageGallery
                items={props.items}
                lazyLoad={true}
                showFullscreenButton={false}
                showPlayButton={false}
            />
            <FontAwesomeIcon icon={["far", "bookmark"]} color="gray" className = "save-gallery-icon"/>
        </div>    
    );
};

export default Gallery;