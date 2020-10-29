import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Label, Input } from 'reactstrap';
import Filters from '../../../components/ProductFilters';
import ProductCard from '../../../components/ProductCard/components/ProductCard';
import '../styles/Products.css'
import { GetSearchResult } from '../api/GetRequests';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
AOS.init({
    duration: 1200, // values from 0 to 3000, with step 50ms
});


const ShowSearchResults = (products) => {
    var table = [];
    for (let i = 0; i < products.length; i++) {
        table.push(
            <Col key={products[i].productId} data-aos="fade-up" xs="12" sm="6" md="4">
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
                                {
                                    products ? <Label className="output-num">{products.length} cars match your search...</Label> : <Label className="output-num">Loading your interested result, please wait...</Label>
                                }
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
                                products ? ShowSearchResults(products) : null
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}

export default Products;