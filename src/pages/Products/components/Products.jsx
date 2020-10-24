import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Filters from '../../../components/ProductFilters';

const Products = () => {
    return(
        <Container fluid>
            <Row>
                <Col xs="12" md="3">
                    <Filters />
                </Col>

                <Col xs="12" md="9">

                </Col>
            </Row>
        </Container>
    );
}

export default Products;