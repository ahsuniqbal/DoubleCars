import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../styles/Gallery.css';



const Gallery = (props) => {
    return(
        <div>    
            <ImageGallery
                items={props.items}
                lazyLoad={true}
                showFullscreenButton={false}
                showPlayButton={false}
            />
        </div>    
    );
};

export default Gallery;