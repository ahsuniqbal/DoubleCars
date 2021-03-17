import React ,{useState} from 'react';
import {Row,Col,Label} from 'reactstrap'
import ProductHeaderCover from '../../../assets/PopularMakeProductImage.png'
import '../styles/ProductHeader.css';

function ProductHeader () {

    const imageStyle = {
        backgroundImage: `url(${require("../../../assets/PopularMakeProductImage.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '282px',
      };
      
    return(
       <div className='product-header-main'>
      
                <div style={imageStyle} >
                    <div className = "product-header-div">
                        
                    </div>
                    <div className = "product-header-content">
                        <Label className = "roll-ryce-label">91 cars avaliable for sell</Label>
                        <h1 className = "roll-ryce-head">Rolls-Royce</h1>
                    </div>
                </div>
                
          {/* <LazyLoadImage width="100%" alt="demo image" effect="blur" src={ProductHeaderCover} className='img-fluid product-header-img'/>
          <div className='product-page-content-div'>
                <h1 className = "roll-ryce-head">Rolls-Royce</h1>
                <Label className = "roll-ryce-label">91 cars avaliable for sell</Label>
          </div> */}
          {/* <Row className='top-budget-main-row'>
        <Col md = "12" xs = "12" style={mystyle}>
            <Row className = "topBudgetRow">
                <Col xs = "12" md = "12" className = "text-center">
                    <h1 className = "roll-ryce-head">Rolls-Royce</h1>
                    <Label className = "roll-ryce-label">91 cars avaliable for sell</Label>
                </Col>
            </Row>
   </Col>
   </Row> */}
       </div>
        
    )
  
}

export default ProductHeader;