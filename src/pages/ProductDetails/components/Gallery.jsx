import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Col, Row } from 'reactstrap';
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
            <Row>
                <Col md = "8">
                    <h2 className = "car-name">2019 Acura MDX Hybrid Sport SH-AWD</h2>
                </Col>
                <Col className = "text-right" md = "4">
                    <h2 className = "car-price">$3200</h2>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h4 className = "car-info mb-5">19,850 mileage · California </h4>
                </Col>
            </Row>
            
        
        </div>    
    );
};

export default Gallery;