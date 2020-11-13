import React from 'react';
import { Col, Row } from 'reactstrap';
import AdImage from '../../../assets/advertisementLanding.png'
import '../styles/BuyNow.css'

const BuyNow = () => {
    return(
        <Row>
            <Col md = "12" xs = "12" className = "text-center buy-now">
            
                <img src = {AdImage} alt = "advertisment" className = "mt-5 mb-5 ad-image img-fluid"/>
          
            </Col>
        </Row>
        
    )
  
}

export default BuyNow;