import React from 'react';
import { Container, NavLink, Row, Col } from 'reactstrap';
import '../styles/ProductResults.css'

const ProductResults = () => {
    return(
        <Container>
            <Row>
                <Col className = "" md = "6" >
                    <NavLink className="" to="/products">Back to search results</NavLink>                
                </Col>
                <Col className = "" md = "6" >
                    <NavLink className="float-right report-button" to="/products">Report this car</NavLink>                
                </Col>
            </Row>
        </Container>
    )
}

export default ProductResults;