import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../styles/Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bookmark } from 'react-feather';

const Gallery = (props) => {
    return(
        <div>    
            <ImageGallery
                items={props.items}
                lazyLoad={true}
                showFullscreenButton={false}
                showPlayButton={false}
            />
            <div className = "save-icon-gallery">
                {/* <FontAwesomeIcon icon={["far", "bookmark"]} color="gray" className = "save-gallery-icon"/> */}
                <Bookmark color="#000000" size={20} className = "save-gallery-icon"/>
            </div>
        </div>    
    );
};

export default Gallery;