import React from 'react';
import '../styles/DCAdBanner.css'
import {Row, Col, Container, Button} from 'reactstrap'
import { Link } from 'react-router-dom';
const DCAdBanner = () => {

    const mystyle = {
        backgroundImage: `url(${require("../../../assets/DCAdBanner.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '384px',
        marginTop: '3rem',
        borderRadius: '8px',
    };

    return(
        <Container>
            <Row>
                <Col md = "12" xs = "12" style={mystyle}>
                    {/* <Row>
                        <Col xs="12" md="12"> */}
                            <Row>
                                <Col xs = "12" md = "5" className="content-col">
                                    <h1 className = "banner-heading">The perfect vehicle for a grand entrance.</h1>
                                    <Link to='https://play.google.com/store/apps'>
                                        <Button  className = "buynow-button">Buy Now</Button>
                                    </Link>
                                </Col>

                                {/* <Col xs="12" md="5">
                                    <Link to='https://play.google.com/store/apps'>
                                        <Button  className = "buynow-button">Buy Now</Button>
                                    </Link>
                                </Col> */}
                            </Row>
                            
                        {/* </Col>
                    </Row> */}
                </Col>
            </Row>
           
            
        </Container>
    )
}

export default DCAdBanner;