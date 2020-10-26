import React from 'react';
import { Container, Row, Col, Label, Input } from 'reactstrap';
import Filters from '../../../components/ProductFilters';
import ProductCard from '../../../components/CarCard/components/ProductCard';
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
                        <Col md="8">
                            <Label><strong>9 cars match your search...</strong></Label>
                        </Col>
                        <Col md="2">
                            <Label className="float-right">Sort by</Label>
                        </Col>
                        <Col md="2">
                            <Input type="select">
                                <option>Relevence</option>
                            </Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" sm="6" lg="4">
                            <ProductCard />
                        </Col>
                        <Col xs="12" sm="6" lg="4">
                            <ProductCard />
                        </Col>
                        <Col xs="12" sm="6" lg="4">
                            <ProductCard />
                        </Col>
                        <Col xs="12" sm="6" lg="4">
                            <ProductCard />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Products;