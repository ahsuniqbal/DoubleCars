import React from 'react';
import { Row, Col, Label } from 'reactstrap';
import '../../styles/LowerSection.css';
import {useHistory} from 'react-router-dom';

const LowerSection = () => {
  const history = useHistory()
    const LowerImage = {
        backgroundImage: `url(${require("../../../../assets/LowerSectionDummyImage.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
      };
     

    return(
        <Row className='lower-section' onClick={()=>history.push('/blogs')}>
            <Col md = "12" xs = "12" style = {LowerImage}>
            <div className = "">
                <Label className = "type-label">New Cars</Label>
                <h2 className = "car-name">Video: BMW M2 CS is part of Autocar’s 2020 Best Sports Cars</h2>
                <Label className = "date-label">Dec 15, 2020</Label>
              </div>

            </Col>
        </Row>
    )
}

export default LowerSection;