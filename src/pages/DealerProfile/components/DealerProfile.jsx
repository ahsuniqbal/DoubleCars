import React, { useEffect, useState } from "react";
import { Col ,Row, Label, Input, Container, Button} from 'reactstrap';
import { SortByRelevance, SortByPrice } from '../../../utils/Sorting';
import { AddCommaToNumber } from '../../../utils/NumberManipulation'
import Filters from '../../../components/ProductFilters/components_new/Filters';
import SellerDetails from './SellerDetails'
import '../styles/DealerProfile.css'
import ProductCard from '../../../components/ProductCard/components/ProductCard';
import queryString from 'query-string';

import { GetSellerDetails, GetSellerInventory, GetSearchResult } from '../api/GetRequests';
import { ArrowUp } from "react-feather";

const ShowSearchResults = (inventory) => {
    var table = [];
    for (let i = 0; i < inventory.length; i++) {
        table.push(
            <Col key={inventory[i].productId} data-aos="fade-up" xs="12" sm="6" md="4">
                <ProductCard
                    productId={inventory[i].productId}
                    productTitle={inventory[i].carName}
                    productSubtitle={inventory[i].mileage === "" || inventory[i].mileage === null ? "NEW · " + inventory[i].zipCode : AddCommaToNumber(inventory[i].mileage) + " mileage · " + inventory[i].zipCode}
                    productText={"$" + AddCommaToNumber(inventory[i].price)}
                    productImg={inventory[i].coverPic}
                    productName={inventory[i].carName}
                    productBadge={"TRENDING"}
                    userId={inventory[i].userId}
                    allowBookmark={true} />
            </Col>
        );        
    }
    return table;
}

const DealerProfile = (props) => {

    let locationSearch = queryString.parse(props.location.search);

    const [dealer, setDealer] = useState(null);
    const [inventory, setInventory] = useState([]);
    const [sortFlag, setSortFlag] = useState(false);
    const [totalCount, setTotalCount] = useState(0)


    // Copying from products page
    const [pageNumber, setPageNumber] = useState(0);
    const [isBottom, setIsBottom] = useState(false);
    const [flag, setFlag] = useState(false)
    const [booleanFlag, setBooleanFlag] = useState(false);
    const [globalQuery,setGloableQuery] = useState("")
    const [savedSearchObj,setSavedSearchObj] = useState({})
    

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


    var firstFlag = false
    // useEffect(() => {
    //     var tempStr = ""
    //     const userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : -1
    //     // if(locationSearch.search){
    //     //     tempStr += `search=${locationSearch.search}&page=${pageNumber}&${globalQuery}`
    //     // }else{
    //         tempStr += `page=${pageNumber}&${globalQuery}&id=${userId}&dealerId=${props.match.params.id}`
    //     // }
    //     // tempStr += `&id=${userId}`
    //     // tempStr += `&dealerId=${props.match.params.id}`
    //     console.log("QQUERY",tempStr)
    //     setPageNumber(pageNumber + 1);
    //     GetSearchResult(tempStr).then(doc1 => {
    //         setTotalCount(doc1.totalCount);
    //         const doc = doc1.results;
    //         console.log(doc)

    //         // This was the condition that was written previously
    //         // I changed this condition copying products page
    //         // if(inventory.length > 0)
    //         if(doc.length > 0){
    //             var tempObj = {
    //                 title : doc[0].carName,
    //                 image_one : doc[0].coverPic,
    //                 image_two : doc[1] ? doc[1].coverPic ? doc[1].coverPic : null : null,
    //                 image_three : doc[2] ? doc[2].coverPic ? doc[2].coverPic : null : null
    //             }
    //             setSavedSearchObj(tempObj)
    //         }
            
    //         if(inventory.length > 0) {
    //             setBooleanFlag(false);
    //             var temp = inventory
    //             for(let i = 0; i < doc.length; i++){
    //                 temp.push(doc[i])
    //             }
    //             setInventory(temp);
    //         }

    //             // setPageNumber(pageNumber + 1)
    //             // setBooleanFlag(false);
    //             // var temp = inventory
    //             // for(let i = 0; i < doc.length; i++){
    //             //     temp.push(doc[i])
    //             // }
    //             // setInventory(temp);
    //         // }
    //         else{
    //             setInventory(doc);
    //             setBooleanFlag(true);
    //         }
    //         setFlag(!flag)
    //     })
    //     .catch(error => {
    //         console.log(error.message);
    //     });
    
    // }, [isBottom]);


    useEffect(() => {
        GetSellerDetails(props.match.params.id).then(doc => {
            setDealer(doc[0]);
        })
        .catch(error => {
            console.log(error.message);
        });
        // GetSellerInventory(props.match.params.id).then(doc => {
        //     setInventory(doc.inventory);
        // })
        // .catch(error => {
        //     console.log(error.message);
        // });
    }, []);


    const filterQueryChange = (queryStr) => {
        setGloableQuery(queryStr)
        var str = ""
        const userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : -1
        // if(locationSearch.search){
        //     str = `search=${locationSearch.search}&page=${pageNumber}&${queryStr}`
        // }else{
            str = `page=${pageNumber}${queryStr ? "&"+queryStr : ""}&id=${userId}&dealerId=${props.match.params.id}`
        // }
        // str += `&id=${userId}`
        // str += `&dealerId=${props.match.params.id}`
        console.log("QQUERY",str)
        window.history.replaceState(null,"dealerProfile",`/dealer/${props.match.params.id}?${queryStr}`)

        GetSearchResult(str).then(doc1 => {
            console.log(doc1)
            setTotalCount(doc1.totalCount)
            const doc = doc1.results;
            if(doc.length > 0) {
                // setBooleanFlag(false);
                setInventory(doc)
                var tempObj = {
                    title : doc[0].carName,
                    image_one : doc[0].coverPic,
                    image_two : doc[1] ? doc[1].coverPic ? doc[1].coverPic : null : null,
                    image_three : doc[2] ? doc[2].coverPic ? doc[2].coverPic : null : null
                }
                setSavedSearchObj(tempObj)
            }
            else {
                // setBooleanFlag(true);
                setInventory([])
            }

            if(!booleanFlag){
                setBooleanFlag(true);
            }
            // console.log("doc",doc)
            // setInventory(doc)
            setFlag(!flag)
        })
        .catch(error => {
            console.log(error.message);
        });
    }


    function ProductSorting(sortingType){
        if(sortingType === "relevance"){
            setInventory(SortByRelevance(inventory));
            setSortFlag(!sortFlag);
        }
        else if(sortingType === "price"){
            setInventory(SortByPrice(inventory));
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

    return(
        <Container className = "dealer-profile">

       
            <Row>
                <Col md = "3" style = {{marginTop: '6rem'}}>
                    <Filters
                        onFilterChange={filterQueryChange}
                        isUsed={locationSearch.isUsed}
                        bodyStyle={locationSearch.bodyStyle}
                        carMake={locationSearch.carMake}
                        carModel={locationSearch.carModel}
                        minPrice={locationSearch.minPrice}
                        maxPrice={locationSearch.maxPrice}
                        yearCar={locationSearch.yearCar}
                        savedSearch={savedSearchObj}
                        // search={"audi"}
                    />
                </Col>
                <Col md = "9" style = {{marginTop: '2rem'}}>
                    <Row>
                        <Col xs="12" >
                        {
                            dealer ?
                            <SellerDetails 
                                userId={dealer.userId}
                                fullName={dealer.fullName}
                                email={dealer.email}
                                phNum={dealer.phNum}
                                aboutMe={dealer.aboutMe}
                                profilePic={dealer.profilePic}
                                userRole={dealer.userRole} 
                            />
                            :
                            null
                        }
                        </Col>
                    </Row>
                    
                    <Row className="search-heading my-4">
                        <Col md="8">
                            {
                                inventory ? 
                                <Label className="output-num">{totalCount} car(s) found in inventory...</Label> 
                                : 
                                <Label className="output-num">Loading your interested results, please wait...</Label>
                            }
                            
                        </Col>
                        <Col md="2">
                            <Label className="sort-class float-right mt-2">Sort by</Label>
                        </Col>
                        <Col md="2" className='relevance-select-option-class'>
                            <Input type="select" onChange={(e) => ProductSorting(e.target.value)} className='relevance-class'>
                                <option value="relevance">Relevence</option>
                                <option value="price">Price</option>
                            </Input>
                        </Col>
                    </Row>
                    <Row>
                        {
                            inventory.length > 0 ? ShowSearchResults(inventory) : 
                            booleanFlag ? <h2 className="text-center">No result found</h2> : "loading..."
                        }
                    </Row>
                </Col>
            </Row>
            <button onClick={(e) => topFunction(e)} id="myBtn" title="Go to top"><ArrowUp size={16} /> </button>
            </Container>
    )
}

export default DealerProfile;