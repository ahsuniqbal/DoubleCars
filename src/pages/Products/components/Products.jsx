import React, { useRef, useState, useEffect } from 'react';
import { Row, Col, Label, Input, Container, Button } from 'reactstrap';
import Filters from '../../../components/ProductFilters/components_new/Filters';
import ProductCard from '../../../components/ProductCard/components/ProductCard';
import { AddCommaToNumber } from '../../../utils/NumberManipulation';
import { GetSearchResult,GetAllMakes,GetZipCodesList } from '../api/GetRequests';
import { SortByRelevance, SortByPrice } from '../../../utils/Sorting.jsx';
import adProducts from '../../../assets/ad_products.png';
import { ProductSkeleton } from '../../../components/Skeletons';
import queryString from 'query-string';
import { Frown, Repeat } from 'react-feather';
import '../styles/Products.css';
import { ArrowUp } from "react-feather";
import DCAdBanner from './DCAdBanner';

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {
    CPagination
} from '@coreui/react'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const ShowSearchResults = (products) => {
    var table = [];
    var adPlacement = 5;
    var flag = false;

    for (let i = 0; i < products.length; i++) {
        if(i !== 0 && i % adPlacement === 0 && !flag) {
            table.push(
                <>
                <Col key={products[i].productId} xs="12" sm="6" lg="4"style={{padding: '0 7px'}}>
                    <img src={adProducts} alt="Advertisement" width="100%" className="img-fluid" style={{height: '374px'}} />
                </Col>
                </>
            );
            i--
            flag = true;
        }
        else {
            flag = false
            table.push(
                <Col key={products[i].productId} xs="12" sm="6" lg="4" style={{padding: '0 7px'}}>
                    <ProductCard
                        productId={products[i].productId}
                        productTitle={products[i].carName}
                        productSubtitle={products[i].mileage === "" || products[i].mileage === null ? "NEW · " + products[i].zipCode : AddCommaToNumber(products[i].mileage) + " mileage · " + products[i].zipCode}
                        productText={"$" + AddCommaToNumber(products[i].price)}
                        productImg={products[i].coverPic}
                        productName={products[i].carName}
                        productBadge={products[i].isFeatured ? "FEATURED" : null}
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

    const classes = useStyles();
    let locationSearch = queryString.parse(props.location.search);
   // console.log("LS",locationSearch)

    const [sortFlag, setSortFlag] = useState(false);
    const [products, setProducts] = useState([]);
    const [showProducts, setShowProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [isBottom, setIsBottom] = useState(false);
    const [flag, setFlag] = useState(false)
    const [booleanFlag, setBooleanFlag] = useState(false);
    const [globalQuery,setGloableQuery] = useState("")
    const [savedSearchObj,setSavedSearchObj] = useState({})
    const [totalCount, setTotalCount] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [makeAndZips,setMakeAndZips] = useState(null)

    const handleScroll = () => {
        const scrollTop = (document.documentElement
            && document.documentElement.scrollTop)
            || document.body.scrollTop;
        const scrollHeight = (document.documentElement
            && document.documentElement.scrollHeight)
            || document.body.scrollHeight;
        if (scrollTop + window.innerHeight + 800 >= scrollHeight){
            // console.log('page called')
            // var page = pageNumber
            // console.log(page)
            // page++;
            // console.log(page)
            // setPageNumber(pageNumber + 1)
            setIsBottom(!isBottom);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [isBottom]);

    const makeFilterStringForQueryParams = (obj) => {
        var str = "";
        if(obj.bodyStyle){
            str += "&bodyStyle=" + obj.bodyStyle
        }
        if(obj.carMake){
            str += "&carMake=" + obj.carMake
        }
        if(obj.carModel){
            str += "&carModel=" + obj.carModel
        }
        if(obj.minPrice && obj.maxPrice){
            str += "&minPrice=" + obj.minPrice
            str += "&maxPrice=" + obj.maxPrice
        }
        if(obj.yearCar){
            str += "&yearCar=" + obj.yearCar
        }
        if(obj.isUsed){
            str += "&isUsed=" + obj.isUsed
        }
        return str
// bodyStyle={locationSearch.bodyStyle}
        //                 carMake={locationSearch.carMake}
        //                 carModel={locationSearch.carModel}
        //                 minPrice={locationSearch.minPrice}
        //                 maxPrice={locationSearch.maxPrice}
        //                 yearCar={locationSearch.yearCar}
    }
    
    // useEffect(() => {
    //     var tempStr = ""
    //     const userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : -1
    //     tempStr += `page=${pageNumber}&${globalQuery}`

    //     tempStr += `&id=${userId}`
    //     console.log('tempStr',tempStr)
    //     setPageNumber(pageNumber + 1)
    //     GetSearchResult(tempStr).then(doc1 => {
    //         setTotalCount(doc1.totalCount)
    //         const doc = doc1.results;
    //         if(doc.length > 0){
    //             var tempObj = {
    //                 title : doc[0].carName,
    //                 image_one : doc[0].coverPic,
    //                 image_two : doc[1].coverPic ? doc[1].coverPic : null,
    //                 image_three : doc[2].coverPic ? doc[2].coverPic : null,
    //             }
    //             setSavedSearchObj(tempObj)
    //         }
            
    //         if(products.length > 0){
    //             setBooleanFlag(false);
    //             var temp = products
    //             for(let i = 0; i < doc.length; i++){
    //                 temp.push(doc[i])
    //             }
    //             setProducts(temp);
    //         }else{
    //             setProducts(doc);
    //             setBooleanFlag(true);
    //         }
    //         setFlag(!flag)
    //     })
    //     .catch(error => {
    //         console.log(error.message);
    //     });
    
    // }, [isBottom]);

    const filterQueryChange = (queryStr,page) => {
        console.log("QURYSTR",queryStr)
        setBooleanFlag(false)
        setGloableQuery(queryStr)
        var pageBool = true
        if(page){
            if(page <= pageNumber){
                //pageBool = false
                setPageNumber(page+1);
                var tempProd = []
                for(let i = (page*10); i < (page*10) + 10; i++){
                    if(i < products.length){
                        tempProd.push(products[i])
                    }
                    
                }
                setShowProducts(tempProd)
                //yahan per wo array of products show hogi jo uss page per dhikani hogi
            }
        }else{
            setPageNumber(1)
        }
        //window.location.href = `?${"carMake=Acura"}`
        //props.history.push(`/products?${queryStr}`)
        window.history.replaceState(null,"title",`/products?${queryStr}`)
        setProducts([])
        var str = ""
        const userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : -1
        if(locationSearch.search){
            str = `search=${locationSearch.search}&page=${0}&${queryStr}`
        }else{
            str = `page=${page ? page : 0}&${queryStr}`
        }
        str += `&id=${userId}`
        console.log("STRRR",str)
        GetSearchResult(str).then(doc1 => {
            setBooleanFlag(true)
            setTotalCount(doc1.totalCount)
            setTotalPages(doc1.totalPages)
            console.log(doc1)
            const doc = doc1.results;
            
            if(doc.length > 0){
                if(pageBool){
                    setProducts(doc)
                    setShowProducts(doc)
                }else{
                    if(products.length > 0){
                        var temp = products
                        for(let i = 0; i < doc.length; i++){
                            temp.push(doc[i])
                        }
                        setProducts(temp);
                    }else{
                        setProducts(doc);
                        setShowProducts(doc)
                    }
                }
                var tempObj = {
                    title : doc[0].carName,
                    image_one : doc[0].coverPic,
                    image_two : doc[1].coverPic ? doc[1].coverPic : null,
                    image_three : doc[2].coverPic ? doc[2].coverPic : null,
                    
                }
                setSavedSearchObj(tempObj)
            }else{
                setProducts([])
            }
            
            if(!booleanFlag){
                setBooleanFlag(true);
            }
            setFlag(!flag)
            
        })
        .catch(error => {
            setBooleanFlag(true)
            console.log(error.message);
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


     // When the user clicks on the button, scroll to the top of the document
     const topFunction = (e) => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    window.onscroll = function() {
        scrollFunction();
    } 
    function scrollFunction() {
        const mybutton = document.getElementById("myBtn");
        if (mybutton) {
            if (document.body.scrollTop > 1280 || document.documentElement.scrollTop > 1280) {
                mybutton.style.display = "block";
            } else {
            mybutton.style.display = "none";
            }
        }
        else {
            return;
        }
        
    }

    const pageChange = (event, value) => {
        window.scrollTo(0, 400)
        setPageNumber(value)
        filterQueryChange(globalQuery,value - 1)
      };

    return(
                    
        <Container className="products-container">  
            <Row>
                <Col xs = "12" md = "12">
                    {/* This is a Ad by Double Cars section */}
                    <DCAdBanner/>
                </Col>    
            </Row>      
            <Row>
                <Col xs="12" md="3" style = {{marginTop: '5rem'}}>
               
                    <Filters 
                        onFilterChange={filterQueryChange}
                        isUsed={locationSearch.isUsed}
                        bodyStyle={locationSearch.bodyStyle}
                        carMake={locationSearch.carMake}
                        carModel={locationSearch.carModel}
                        minPrice={locationSearch.minPrice}
                        maxPrice={locationSearch.maxPrice}
                        minYear={locationSearch.minYear}
                        search={locationSearch.search}
                        isDealer={true}
                        savedSearch={savedSearchObj}
                    />
                </Col>
                <Col xs="12" md="9" style = {{marginTop: '5rem'}}>
                    <Row className="search-heading mb-2">
                        <Col md="8">
                            {locationSearch.isUsed ? locationSearch.isUsed == "false" ? <h6>New Cars</h6> : <h6>Used Cars</h6> : null}
                            {
                                products ? 
                                <Label className="output-num">{totalCount} car(s) match your search...</Label> 
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
                            booleanFlag ? 
                                <Col xs="12" className="text-center mt-5">
                                    <Frown size={100} color="rgba(0, 0, 0, 0.65)" />
                                    <h4 className="my-2">No result found</h4>
                                    <Label>We can't find any item matching your search</Label>
                                    <br />
                                    <Button outline onClick={() => window.location.reload()}><Repeat size={15} className="mr-2" />Reset filters</Button>
                                </Col> 
                            : DrawSkeleton()
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

                    {
                        totalPages > 1 &&
                        <Row>
                            <Col xs="12" className="pl-0">
                                <div className={classes.root}>
                                    <Pagination count={totalPages} page={pageNumber} onChange={pageChange} color="primary" />
                                </div>
                            </Col>
                        </Row>
                    }
                </Col>
            </Row>
            <button onClick={(e) => topFunction(e)} id="myBtn"  title="Go to top"><ArrowUp size={16} /> </button>
            </Container>
         
        
    );
}

export default Products;