import React, { useState, useEffect } from 'react';
import { Row, Col, Label, Input, Container } from 'reactstrap';
import Filters from '../../../components/ProductFilters';
import ProductCard from '../../../components/ProductCard/components/ProductCard';
import { GetSearchResult } from '../api/GetRequests';
import Skeleton from '@material-ui/lab/Skeleton';
import '../styles/Products.css';

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
                    dealerName={products[i].fullName}
                    dealerRating={Math.floor(Math.random() * (5 * 100 - 1 * 100) + 1 * 100) / (1*100)}
                    allowBookmark={true} />
            </Col>
        );        
    }
    return table;
}

function DrawSkeleton(){
    var table = [];
    for(let i = 0; i < 6; i++){
        table.push(
            <Col xs="12" sm="6" lg="4">
                <Skeleton variant="rect" width={298} height={178} animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Row>
                    <Col xs="3">
                        <Skeleton variant="text" width={50} height={50} animation="wave" />
                    </Col>
                    <Col xs="9" className="mt-2">
                        <Skeleton variant="text" animation="wave" />
                    </Col>
                </Row>
            </Col>
        );
    }
    return table;
}

function GetSearchInput(searchInput){
    
     var toSearch = searchInput.replace(/%20/g, ' ').split('=');
    // var toSearch = searchInput.replace('%20', ' ').split('=');
    return toSearch[1];
}

const Products = ({location}) => {
    const [radius, setRadius] = useState(0);
    const [mileage, setMileage] = useState(0);
    const [price, setPrice] = useState([0, 0]);
    const [make, setMake] = useState(null);
    const [products, setProducts] = useState(null);
    
    useEffect(() => {
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

    const queryChange = (queryStr) => {
        GetSearchResult(queryStr).then(doc => {
            setProducts(doc);
        });
    }

    return(
        <Container>

        
            <Row>
                <Col xs="12" md="3">
                    <Filters 
                        onHandleRadius={handleRadius}
                        onHandleMileage={handleMileage}
                        onHandlePrice={handlePrice}
                        onHandleMake={handleMake}
                        onQueryChange={queryChange} />
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
                            products ? ShowSearchResults(products) : DrawSkeleton()
                        }
                    </Row>
                </Col>
            </Row>
            </Container>
        
    );
}

export default Products;