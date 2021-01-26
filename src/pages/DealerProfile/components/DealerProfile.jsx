import React, { useEffect, useState } from "react";
import { Col ,Row, Label, Input, Container} from 'reactstrap';
import { SortByRelevance, SortByPrice } from '../../../utils/Sorting';
import { AddCommaToNumber } from '../../../utils/NumberManipulation'
import Filters from '../../../components/ProductFilters/components/Filters';
import SellerDetails from './SellerDetails'
import '../styles/DealerProfile.css'
import ProductCard from '../../../components/ProductCard/components/ProductCard';
import { GetSellerDetails, GetSellerInventory } from '../api/GetRequests';

const ShowSearchResults = (inventory) => {
    var table = [];
    for (let i = 0; i < inventory.length; i++) {
        table.push(
            <Col key={inventory[i].productId} data-aos="fade-up" xs="12" sm="6" md="4">
                <ProductCard
                    productId={inventory[i].productId}
                    productTitle={inventory[i].yearCar + " " + inventory[i].carModel + " " + inventory[i].carMake}
                    productSubtitle={AddCommaToNumber(inventory[i].mileage) + " mileage · " + inventory[i].zipCode}
                    productText={"$" + AddCommaToNumber(inventory[i].price)}
                    productImg={inventory[i].coverPic}
                    productName={inventory[i].yearCar + " " + inventory[i].carModel + " " + inventory[i].carMake}
                    productBadge={"TRENDING"}
                    userId={inventory[i].userId}
                    allowBookmark={true} />
            </Col>
        );        
    }
    return table;
}

const DealerProfile = ({match}) => {
    const [dealer, setDealer] = useState(null);
    const [inventory, setInventory] = useState(null);
    const [sortFlag, setSortFlag] = useState(false);
    
    useEffect(() => {
        GetSellerDetails(match.params.id).then(doc => {
            setDealer(doc[0]);
        })
        .catch(error => {
            alert(error.message);
        });
        GetSellerInventory(match.params.id).then(doc => {
            setInventory(doc.inventory);
        })
        .catch(error => {
            alert(error.message);
        });
    }, []);


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

    return(
        <Container className = "dealer-profile">

       
            <Row>
                <Col md = "3">
                    <Filters/>
                </Col>
                <Col md = "9">
                    <Row>
                        <Col xs="12">
                        {
                            dealer ?
                            <SellerDetails 
                                userId={dealer.userId}
                                fullName={dealer.fullName}
                                email={dealer.email}
                                phNum={dealer.phNum}
                                aboutMe={dealer.aboutMe}
                                profilePic={dealer.profilePic}
                                userRole={dealer.userRole} />
                            :
                            null
                        }
                        </Col>
                    </Row>
                    
                    <Row className="search-heading my-4">
                        <Col md="8">
                            {
                                inventory ? 
                                <Label className="output-num">{inventory.length} car(s) found in inventory...</Label> 
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
                            inventory ? ShowSearchResults(inventory) : null
                        }
                    </Row>
                </Col>
            </Row>
            </Container>
    )
}

export default DealerProfile;