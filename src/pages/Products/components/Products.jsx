import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Label, Input } from 'reactstrap';
import Filters from '../../../components/ProductFilters';
import ProductCard from '../../../components/CarCard/components/ProductCard';
import '../styles/Products.css'
import { GetSearchResult } from '../api/GetRequests';
import Footer from '../../../components/Footer'

const ShowSearchResults = (products) => {
    var table = [];
    for (let i = 0; i < products.length; i++) {
        table.push(
            <Col key={products[i].productId} xs="12" sm="6" lg="4">
                <ProductCard
                    productTitle={products[i].carName}
                    productSubtitle={products[i].mileage + " mileage . " + products[i].zipCode}
                    productText={"$ " + products[i].price}
                    productImg={products[i].coverPic}
                    productName={products[i].carName}
                    productBadge={"TRENDING"}
                    privateSeller />
            </Col>
        );        
    }
    return table;
}

const Products = () => {
    const [ products, setProducts ] = useState(null);
    useEffect(() => {
        GetSearchResult("range").then(doc => {
            setProducts(doc);
        })
    }, [])

    return(
        <Container fluid>
            <Row>
                <Col xs="12" md="3">
                    <Filters />
                </Col>
                <Col xs="12" md="9" >
                    <Row className = "mb-3">
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
                        {
                            products ? ShowSearchResults(products) : "Loading..."
                        }
                    </Row>
                </Col>
            </Row>
            <Footer/>
        </Container>
    );
}

export default Products;