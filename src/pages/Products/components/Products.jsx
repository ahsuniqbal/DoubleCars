import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Label, Input } from 'reactstrap';
import Filters from '../../../components/ProductFilters';
import ProductCard from '../../../components/ProductCard/components/ProductCard';
import '../styles/Products.css'
import { GetSearchResult } from '../api/GetRequests';


function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ShowSearchResults = (products) => {
    var table = [];
    for (let i = 0; i < products.length; i++) {
        table.push(
            <Col key={products[i].productId} xs="12" sm="6" lg="4">
                <ProductCard
                    productId={products[i].productId}
                    productTitle={products[i].carName}
                    productSubtitle={numberWithCommas(products[i].mileage) + " miles · " + products[i].zipCode}
                    productText={"$" + numberWithCommas(products[i].price)}
                    productImg={products[i].coverPic}
                    productName={products[i].carName}
                    productBadge={"TRENDING"}
                    userId={products[i].userId}
                    dealerPic={products[i].userPic}
                    dealer={products[i].userRole}
                    dealerRating={Math.floor(Math.random() * (5 * 100 - 1 * 100) + 1 * 100) / (1*100)}
                    allowBookmark={true} />
            </Col>
        );        
    }
    return table;
}

function GetSearchInput(searchInput){
    
    var toSearch = searchInput.replace(/%20/g, ' ').split('=');
    return toSearch[1];
}

const Products = ({location}) => {
    const [radius, setRadius] = useState(0);
    const [mileage, setMileage] = useState(0);
    const [price, setPrice] = useState([0, 0]);
    const [make, setMake] = useState(null);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        console.log("location",location.search)
        GetSearchResult(GetSearchInput(location.search)).then(doc => {
            setProducts(doc);
        })
    }, [])

    const handleRadius = (value) => {
        setRadius(value);
    }

    const handleMileage = (value) => {
        setMileage(value);
    }

    const handlePrice = (price) => {
        setPrice(price);
    }

    const handleMake = (make) => {
        setMake(make);
    }

    return(
        <div>
            <Row>
                <Col xs="12" md="3">
                    <Filters 
                        onHandleRadius={handleRadius}
                        onHandleMileage={handleMileage}
                        onHandlePrice={handlePrice}
                        onHandleMake={handleMake} />
                </Col>
                <Col xs="12" md="9" >
                    <Row className="search-heading mb-2">
                        <Col md="8">
                            {
                                products ? 
                                <Label className="output-num">{products.length} cars match your search...</Label> 
                                : 
                                <Label className="output-num">Loading your interested results, please wait...</Label>
                            }
                        </Col>
                        <Col md="2">
                            <Label className="float-right mt-2">Sort by</Label>
                        </Col>
                        <Col md="2">
                            <Input type="select">
                                <option>Relevence</option>
                                <option>Price</option>
                                <option>Date Published</option>
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
        </div>
        
    );
}

export default Products;