import React from 'react';
import { Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';

const LowerSection = () => {

    const LowerImage = {
        backgroundImage: `url(${require("../../../../assets/LowerSectionDummyImage.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '50vh',
      };
     

    return(
        <Row>
            <Col md = "12" xs = "12" style = {LowerImage}></Col>
        </Row>
    )
}

export default LowerSection;