import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Filters from '../../../components/ProductFilters';
import CarCard from '../../../components/CarCard';

const Products = () => {
    return(
        <Container fluid>
            <Row>
                <Col xs="12" md="3">
                    <Filters />
                </Col>

                <Col xs="12" md="9">
                    <Row>
                        <Col xs="12" sm="6" lg="4" xl="3">
                            <CarCard />
                        </Col>
                        <Col xs="12" sm="6" lg="4" xl="3">
                            <CarCard />
                        </Col>
                        <Col xs="12" sm="6" lg="4" xl="3">
                            <CarCard />
                        </Col>
                        <Col xs="12" sm="6" lg="4" xl="3">
                            <CarCard />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Products;