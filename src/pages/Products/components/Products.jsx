import React, { useState, useEffect } from 'react';
import { Row, Col, Label, Input, Container } from 'reactstrap';
import Filters from '../../../components/ProductFilters';
import ProductCard from '../../../components/ProductCard/components/ProductCard';
import { AddCommaToNumber } from '../../../utils/NumberManipulation';
import { GetSearchResult, GetFilterResult } from '../api/GetRequests';
import { SortByRelevance, SortByPrice } from '../../../utils/Sorting.jsx';
import adProducts from '../../../assets/ad_products.png';
import Skeleton from '@material-ui/lab/Skeleton';
import '../styles/Products.css';


const ShowSearchResults = (products) => {
    var table = [];
    var adPlacement = 5;
    for (let i = 0; i < products.length; i++) {
        if(i !== 0 && i % adPlacement === 0) {
            table.push(
                <Col key={products[i].productId} xs="12" sm="6" lg="4">
                    <img src={adProducts} alt="Advertisement" className="img-fluid" />
                </Col>
            );
        }
        else {
            table.push(
                <Col key={products[i].productId} xs="12" sm="6" lg="4">
                    <ProductCard
                        productId={products[i].productId}
                        productTitle={products[i].carName}
                        productSubtitle={AddCommaToNumber(products[i].mileage) + " miles · " + products[i].zipCode}
                        productText={"$" + AddCommaToNumber(products[i].price)}
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
    }
    return table;
}

function DrawSkeleton(){
    var table = [];
    for(let i = 0; i < 6; i++){
        table.push(
            <Col xs="12" sm="6" lg="4" key={i}>
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
    return toSearch[1];
}

const Products = ({location}) => {
    const [sortFlag, setSortFlag] = useState(false);
    const [products, setProducts] = useState(null);

    
    useEffect(() => {
        GetSearchResult(GetSearchInput(location.search)).then(doc => {
            setProducts(doc);
        })
        .catch(error => {
            alert("Error", error.message);
        });
    }, []);

    const queryChange = (queryStr) => {
        GetFilterResult(queryStr).then(doc => {
            setProducts(doc);
        })
        .catch(error => {
            alert("Error", error.message);
        });
    }

    function ProductSorting(sortingType){
        if(sortingType === "relevance"){
            setProducts(SortByRelevance(products));
            setSortFlag(!sortFlag);
        }
        else if(sortingType === "price"){
            setProducts(SortByPrice(products));
            setSortFlag(!sortFlag);
        }
    }

    return(
                    
        <Container className = "products-container">

        
            <Row>
                <Col xs="12" md="3">
                    <Filters
                        onQueryChange={queryChange} />
                </Col>
                <Col xs="12" md="9" >
                    <Row className="search-heading mb-2">
                        <Col md="8">
                            {
                                products ? 
                                <Label className="output-num">{products.length} car(s) match your search...</Label> 
                                : 
                                <Label className="output-num">Loading your interested results, please wait...</Label>
                            }
                        </Col>
                        <Col md="2">
                            <Label className="float-right mt-2">Sort by</Label>
                        </Col>
                        <Col md="2">
                            <Input type="select" onChange={(e) => ProductSorting(e.target.value)}>
                                <option value="relevance">Relevance</option>
                                <option value="price">Price</option>
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