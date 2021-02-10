import React from 'react';
import { Row, Col, Label, Badge } from 'reactstrap';
import '../../styles/UpperSection.css'
import {useHistory} from 'react-router-dom';


const UpperSection = () => {
  const history = useHistory()

    const BlogpageImage1 = {
        backgroundImage: `url(${require("../../../../assets/BlogPageImage1.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        border: '5px solid white',
        borderLeft: '0px solid white',
        
        // height: '80vh',
      };

      const BlogpageImage2 = {
        backgroundImage: `url(${require("../../../../assets/BlogPageImage2.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        border: '5px solid white',
       width:'95%'
        // height: '80vh',
      };
      
      const BlogpageImage3 = {
        backgroundImage: `url(${require("../../../../assets/BlogPageImage3.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        border: '5px solid white',
        borderLeft:'5px solid white',
        padding:'0',
      
        // height: '40vh',
      };
      const BlogpageImage4 = {
        backgroundImage: `url(${require("../../../../assets/BlogPageImage4.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        border: '5px solid white',
        borderLeft:'5px solid white',
        padding:'0',
       
        // height: '40vh',
      };
     

    return(
        <Row className="blogs-header">
         <Col md = "6" xs = "12" className="uper-section-coloumns" >
              <div className = "first-column"  style={BlogpageImage1} onClick={()=>history.push('/blogs')}>
                {/* <div className="">
                  <img src={img1} className="img-fluid" />
                </div> */}
                <div className="content1">
                  <Label className='blog-page-label'>NEW CARS</Label>
                  <h2>Video: BMW M2 CS is part of Autocar’s 2020 Best Sports Cars</h2>
                  <Label className="date">Dec 15, 2020</Label>  
                </div>
                
              </div>
              </Col>
            <Col md = "3" xs = "12" className="uper-section-coloumns">
              <div className = "second-column"  style={BlogpageImage2} onClick={()=>history.push('/blogs')}>
                {/* <div className="">
                  <img src={img2} className="img-fluid" />
                </div> */}
                <div className="content1">
                  <Label className='blog-page-label'>NEW CARS</Label>
                  <h2>Here is the perfect car for your love of black</h2>
                  <Label className="date">Dec 15, 2020</Label>
                </div>
              </div>
                
            </Col>
            <Col md = "3" xs = "12"  className="uper-section-coloumns">
                <Row>
                    <Col md = "12" xs = "12" className=" pb-1" style={BlogpageImage3} className='blog-third-column'>
                      <div className='third-coloumn' onClick={()=>history.push('/blogs')} >
                        {/* <div className="">
                          <img src={img3} className="img-fluid" />
                        </div> */}
                        <div className="content2">
                          <Label className='blog-page-label'>ADVANCE</Label>
                          <h2>Top 10 electric cars to buy as soon as possible </h2>
                          {/* <Label className="date">Dec 15, 2020</Label> */}
                        </div>
                      </div>
                      
                    </Col>
                    
                    <Col md = "12" xs = "12" className="pt-1" style={BlogpageImage4} className='blog-third-column'>
                     <div className='third-coloumn' onClick={()=>history.push('/blogs')} >
                      {/* <div className="">
                          <img src={img4} className="img-fluid" />
                        </div> */}
                        
                        <div className="content2">
                          <Label className='blog-page-label'>MINI</Label>
                          <h2>Video: BMW M2 CS is part of Autocar’s 2020 Best Sports Cars</h2>
                          {/* <Label className="date">Dec 15, 2020</Label> */}
                        </div>
                     </div>
                      
                    </Col>
                </Row>
                
            </Col> 

        </Row>
    )
}

export default UpperSection;
