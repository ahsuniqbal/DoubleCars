import React from 'react';
import { Container, NavLink, Row, Col } from 'reactstrap';
import '../styles/ProductResults.css'

const ProductResults = () => {
    return(
        <Container>
            <Row>
                <Col className = "" md = "6" >
                    <NavLink className="back-button" to="/products">Back to search results</NavLink>                
                </Col>
                <Col className = "" md = "6" >
                    <NavLink className="float-right report-button" to="/products">Report this car</NavLink>                
                </Col>
            </Row>

            <Row>
                <Col md = "7">
                    <h3>Image gallery here</h3>
                </Col>
                <Col md = "5">
                    <h6>Are you interested in this car?</h6>
                    <h6>Are you interested in this car?</h6>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductResults;