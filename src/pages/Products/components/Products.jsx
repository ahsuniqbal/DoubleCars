import React, { useState, useEffect } from 'react';
import { Row, Col, Label, Input, Container } from 'reactstrap';
import Filters from '../../../components/ProductFilters';
import ProductCard from '../../../components/ProductCard/components/ProductCard';
import { AddCommaToNumber } from '../../../utils/NumberManipulation';
import { GetSearchResult, GetFilterResult } from '../api/GetRequests';
import { SortByRelevance, SortByPrice } from '../../../utils/Sorting.jsx';
import adProducts from '../../../assets/ad_products.png';
import { ProductSkeleton } from '../../../components/Skeletons';
import queryString from 'query-string';
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
                <Col key={products[i].productId} xs="12" sm="6" lg="4" style={{padding: '0 7px'}}>
                    <ProductCard
                        productId={products[i].productId}
                        productTitle={products[i].carName}
                        productSubtitle={AddCommaToNumber(products[i].mileage) + " mileage · " + products[i].zipCode}
                        productText={"$" + AddCommaToNumber(products[i].price)}
                        productImg={products[i].coverPic}
                        productName={products[i].carName}
                        productBadge={"TRENDING"}
                        userId={products[i].userId}
                        dealerPic={products[i].userPic}
                        dealer={products[i].userRole}
                        dealerName={products[i].fullName}
                        isSave={products[i].saveId}
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


const Products = (props) => {
    let locationSearch = queryString.parse(props.location.search);

    const [sortFlag, setSortFlag] = useState(false);
    const [products, setProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [isBottom, setIsBottom] = useState(false);
    const [flag,setFlag] = useState(false)
    const [booleanFlag, setBooleanFlag] = useState(false);
    const handleScroll = () => {
        const scrollTop = (document.documentElement
            && document.documentElement.scrollTop)
            || document.body.scrollTop;
        const scrollHeight = (document.documentElement
            && document.documentElement.scrollHeight)
            || document.body.scrollHeight;
        if (scrollTop + window.innerHeight + 50 >= scrollHeight){
            var page = pageNumber
            page++;
            setPageNumber(page)
            setIsBottom(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
    useEffect(() => {
        GetSearchResult(locationSearch.search, pageNumber).then(doc => {
            if(products.length > 0){
                var temp = products
                for(let i = 0; i < doc.length; i++){
                    temp.push(doc[i])
                }
                setProducts(temp);
            }else{
                setProducts(doc);
                setBooleanFlag(true);
            }
            setFlag(!flag)
        })
        .catch(error => {
            alert("err",error.message);
        });
    
    }, [isBottom]);

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
                        onFilterChange={filterQueryChange}
                        isUsed={locationSearch.isUsed}
                    />
                </Col>
                <Col xs="12" md="9" className='product-column-margin'>
                    <Row className="search-heading mb-2">
                        <Col md="8">
                            {props.location.heading ? <h6>{props.location.heading}</h6> : null}
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
                            products.length > 0 ? ShowSearchResults(products) : 
                            booleanFlag ? <h2 className="text-center">No result found</h2> : DrawSkeleton()
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