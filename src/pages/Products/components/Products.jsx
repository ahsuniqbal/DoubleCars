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
        <div>
        <Container fluid className="mt-5">
            <Row>
                <Col xs="12" md="3">
                    <Filters />
                </Col>
                <Col xs="12" md="9" >
                    <Row className="search-heading mb-2">
                        <Col md="8">
                            <Label className="output-num">9 cars match your search...</Label>
                        </Col>
                        <Col md="2">
                            <Label className="float-right mt-2">Sort by</Label>
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
        </Container>
        <Footer/>
        </div>
        
    );
}

export default Products;