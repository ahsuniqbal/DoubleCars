import React from 'react';
import { Button } from 'reactstrap';
import { Row, Col, Label } from 'reactstrap';
import '../../styles/UpperSection.css'
import img1 from '../../../../assets/BlogPageImage1.png'
import img2 from '../../../../assets/BlogPageImage2.png'
import img3 from '../../../../assets/BlogPageImage3.png'
import img4 from '../../../../assets/BlogPageImage4.png'


const UpperSection = () => {

    const BlogpageImage1 = {
        backgroundImage: `url(${require("../../../../assets/BlogPageImage1.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // height: '80vh',
      };

      const BlogpageImage2 = {
        backgroundImage: `url(${require("../../../../assets/BlogPageImage2.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // height: '80vh',
      };
      
      const BlogpageImage3 = {
        backgroundImage: `url(${require("../../../../assets/BlogPageImage3.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // height: '40vh',
      };
      const BlogpageImage4 = {
        backgroundImage: `url(${require("../../../../assets/BlogPageImage4.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // height: '40vh',
      };
     

    return(
        <Row className="blogs-header">
            <Col md = "6" xs = "12" className="fucking-padding-right">
              <div className = "first-column">
                <div className="img-div">
                  <img src={img1} className="img-fluid" />
                </div>
                <div className="content">
                  <Label>New Cars</Label>
                  <h2>Video: BMW M2 CS is part of Autocar’s 2020 Best Sports Cars</h2>
                  <Label className="date">Dec 15, 2020</Label>  
                </div>
                
              </div>
              </Col>
            <Col md = "3" xs = "12" className="fucking-padding-left fucking-padding-right">
              <div className="img-div">
                <img src={img2} className="img-fluid" />
              </div>
              <div className="content">
                <Label>New Cars</Label>
                <h2>Video: BMW M2 CS is part of Autocar’s 2020 Best Sports Cars</h2>
                <Label className="date">Dec 15, 2020</Label>
              </div>
                
            </Col>
            <Col md = "3" xs = "12" className="fucking-padding-left">
                <Row>
                    <Col md = "12" xs = "12" className=" pb-1">
                      <div className="img-div">
                        <img src={img3} className="img-fluid" />
                      </div>
                      <div className="content">
                        <Label>New Cars</Label>
                        <h2>Video: BMW M2 CS is part of Autocar’s 2020 Best Sports Cars</h2>
                        <Label className="date">Dec 15, 2020</Label>
                      </div>
                      
                    </Col>
                    
                    <Col md = "12" xs = "12" className="pt-1">
                      <div className="img-div">
                        <img src={img2} className="img-fluid" />
                      </div>
                      
                      <div className="content">
                        <Label>New Cars</Label>
                        <h2>Video: BMW M2 CS is part of Autocar’s 2020 Best Sports Cars</h2>
                        <Label className="date">Dec 15, 2020</Label>
                      </div>
                      
                    </Col>
                </Row>
                
            </Col>
        </Row>
    )
}

export default UpperSection;