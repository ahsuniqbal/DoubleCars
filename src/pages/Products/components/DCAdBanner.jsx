import React from 'react';
import '../styles/DCAdBanner.css'
import {Row, Col, Container} from 'reactstrap'
const DCAdBanner = () => {

    const mystyle = {
        backgroundImage: `url(${require("../../../assets/TopBudgetCar.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '258px',
        marginTop: '4rem',
      };
    return(
        <Container>
            <Row className=''>
            <Col md = "12" xs = "12" style={mystyle}>
                <Row className = "">
                    <Col xs = "12" md = "12" className = "text-center">
                        <h1 className = "">Best cars for you under $5000</h1>
                        <h1 className = "">Top Budget Cars</h1>
                        {/* <Link to = {'/about/'}>
                        <Button  className = "explore-button">Exlpore more</Button>
                        </Link> */}
                        </Col>
                </Row>
               


                
          
            </Col>
        </Row>
           
            
        </Container>
    )
}

export default DCAdBanner;