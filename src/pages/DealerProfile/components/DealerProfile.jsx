import React, { useEffect, useState } from "react";
import { Col ,Row, Label, Input} from 'reactstrap';
import Filters from '../../../components/ProductFilters/components/Filters';
import SellerDetails from './SellerDetails'
import '../styles/DealerProfile.css'
import ProductCard from '../../../components/ProductCard/components/ProductCard';
import { GetSearchResult } from '../api/GetRequests';

function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ShowSearchResults = (products) => {
    var table = [];
    for (let i = 0; i < products.length; i++) {
        table.push(
            <Col key={products[i].productId} data-aos="fade-up" xs="12" sm="6" md="4">
                <ProductCard
                    productId={products[i].productId}
                    productTitle={products[i].carName}
                    productSubtitle={numberWithCommas(products[i].mileage) + " miles · " + products[i].zipCode}
                    productText={"$" + numberWithCommas(products[i].price)}
                    productImg={products[i].coverPic}
                    productName={products[i].carName}
                    productBadge={"TRENDING"}
                    dealer />
            </Col>
        );        
    }
    return table;
}
function GetSearchInput(searchInput){
    var toSearch = searchInput.replaceAll('%20', ' ').split('=');
    return toSearch[1];
}

const DealerProfile = ({location}) => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        GetSearchResult(GetSearchInput(location.search)).then(doc => {
            setProducts(doc);
        })
    }, [])

    return(
        <div className = "container-fluid">
            <Row>
                <Col md = "3">
                    <Filters/>
                </Col>
                <Col md = "9">
                    <SellerDetails/>
                    <Row className="search-heading mb-2 mt-3">
                        <Col md="8">
                            <Label className="inv-label">9 cars in inventory...</Label> 
                            
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
        </div>
    )
}

export default DealerProfile;