import React from 'react';
import { Button } from 'reactstrap';
import { Row, Col, Label } from 'reactstrap';
import '../../styles/UpperSection.css'

const UpperSection = () => {

    const BlogpageImage1 = {
        backgroundImage: `url(${require("../../../../assets/BlogPageImage1.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '50vh',
      };

      const BlogpageImage2 = {
        backgroundImage: `url(${require("../../../../assets/BlogPageImage2.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '50vh',
      };
      
      const BlogpageImage3 = {
        backgroundImage: `url(${require("../../../../assets/BlogPageImage3.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '25vh',
      };
      const BlogpageImage4 = {
        backgroundImage: `url(${require("../../../../assets/BlogPageImage4.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '25vh',
      };
     

    return(
        <Row>
            <Col md = "6" xs = "12" style = {BlogpageImage1}>
              <div className = "upper-section-column">
                <Label className = "type-label1">New Cars</Label>
                <h2 className = "car-name">Video: BMW M2 CS is part of Autocar’s 2020 Best Sports Cars</h2>
                <Label className = "date-label">Dec 15, 2020</Label>
              </div>
              </Col>
            <Col md = "3" xs = "12" style = {BlogpageImage2}>
            <div className = "">
                <Label className = "type-label2">New Cars</Label>
                <h2 className = "car-name1">Video: BMW M2 CS is part of Autocar’s 2020 Best Sports Cars</h2>
                <Label className = "date-label">Dec 15, 2020</Label>
              </div>
            </Col>
            <Col md = "3" xs = "12">
                <Row>
                    <Col md = "12" xs = "12" style = {BlogpageImage3}>
                    <div className = "">
                <Label className = "type-label3">New Cars</Label>
                <h2 className = "car-name1">Video: BMW M2 CS is part of Autocar’s 2020 Best Sports Cars</h2>
               
              </div>
                    </Col>
                    
                </Row>
                <Row>
                    <Col md = "12" xs = "12" style = {BlogpageImage4}>
                    <div className = "">
                <Label className = "type-label3">New Cars</Label>
                <h2 className = "car-name1">Video: BMW M2 CS is part of Autocar’s 2020 Best Sports Cars</h2>
               
              </div>
                    </Col>
                </Row>
                
            </Col>
        </Row>
    )
}

export default UpperSection;