import React from 'react';
import { Container, Row, Col, Label, Input } from 'reactstrap';
import Filters from '../../../components/ProductFilters';
import CarCard from '../../../components/CarCard';
import '../styles/Products.css'

const Products = () => {
    return(
        <Container>
            <Row>
                <Col xs="12" md="3">
                    <Filters />
                </Col>
                <Col xs="12" md="9" >
                    <Row>
                        <Col md = "6">
                            <Label><strong>9 cars match your search...</strong></Label>
                        </Col>
                        <Col md = "3">
                            <Label className = "float-right">Sort by</Label>
                        </Col>
                        <Col md = "3">
                        <Input className = "sortbylabel" type="select">
                                <option>Relevence</option>
                            </Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" sm="6" lg="4" xl="4">
                            <CarCard />
                        </Col>
                        <Col xs="12" sm="6" lg="4" xl="4">
                            <CarCard />
                        </Col>
                        <Col xs="12" sm="6" lg="4" xl="4">
                            <CarCard />
                        </Col>
                        <Col xs="12" sm="6" lg="4" xl="4">
                            <CarCard />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Products;