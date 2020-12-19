import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Row, Col, Label, Input, Container } from 'reactstrap';
import Filters from '../../../components/ProductFilters';
import ProductCard from '../../../components/ProductCard/components/ProductCard';
import { AddCommaToNumber } from '../../../utils/NumberManipulation';
import { GetSearchResult, GetFilterResult } from '../api/GetRequests';
import { SortByRelevance, SortByPrice } from '../../../utils/Sorting.jsx';
import adProducts from '../../../assets/ad_products.png';
import { ProductSkeleton } from '../../../components/Skeletons';
import '../styles/Products.css';
// import useProductSearch from './useProductSearch';


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
            <Col xs="12" sm="6" lg="4" key={i} className="my-2">
                <ProductSkeleton />
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
    const [pageNumber, setPageNumber] = useState(0);


    // const {
    //     productss,
    //     hasMore,
    //     loading,
    //     error
    // } = useProductSearch(GetSearchInput(location.search));

    // const observer = useRef();
    // const lastElementRef = useCallback(node => {
    //     if(observer.current) observer.current.disconnect();
    //     observer.current = new IntersectionObserver(entries => {
    //         if (entries[0].isIntersecting && hasMore) {
    //           setPageNumber(prevPageNumber => prevPageNumber + 1)
    //         }
    //     })
    //     if (node) observer.current.observe(node)
    // }, [loading, hasMore])
    
    
    useEffect(() => {
        setPageNumber(location.page)
        if(location.search) {
            GetSearchResult(GetSearchInput(location.search), pageNumber).then(doc => {
                setProducts(doc);
            })
            .catch(error => {
                alert(error.message);
            });
        }
        else {
            GetSearchResult('', pageNumber).then(doc => {
                setProducts(doc);
            })
            .catch(error => {
                alert(error.message);
            });
        }
        
    }, [location.heading]);

    const filterQueryChange = (queryStr) => {
        GetFilterResult(queryStr).then(doc => {
            setProducts(doc);
        })
        .catch(error => {
            alert(error.message);
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
                    
        <Container className="products-container">        
            <Row>
                <Col xs="12" md="3">
                    <Filters
                        onFilterChange={filterQueryChange} />
                </Col>
                <Col xs="12" md="9" >
                    <Row className="search-heading mb-2">
                        <Col md="8">
                            {location.heading ? <h6>{location.heading}</h6> : null}
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
                        {/* {
                            productss.map((product, index) => { 
                                if(products.length === index + 1){
                                    return <div ref={lastElementRef}>{product}</div>
                                }
                                else{
                                    return <div>{product}</div>
                                }
                            })
                        } */}
                    </Row>
                </Col>
            </Row>
            </Container>
         
        
    );
}

export default Products;