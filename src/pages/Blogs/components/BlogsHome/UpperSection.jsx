import React from 'react';
import { Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import '../../styles/UpperSection.css'

const BlogsHome = () => {

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
            <Col md = "6" xs = "12" style = {BlogpageImage1}></Col>
            <Col md = "3" xs = "12" style = {BlogpageImage2}></Col>
            <Col md = "3" xs = "12">
                <Row>
                    <Col md = "12" xs = "12" style = {BlogpageImage3}></Col>
                    
                </Row>
                <Row>
                    <Col md = "12" xs = "12" style = {BlogpageImage4}></Col>
                </Row>
                
            </Col>
        </Row>
    )
}

export default BlogsHome;