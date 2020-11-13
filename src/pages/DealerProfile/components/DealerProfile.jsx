import React, { useEffect, useState } from "react";
import { Col ,Row, Label, Input} from 'reactstrap';
import Filters from '../../../components/ProductFilters/components/Filters';
import SellerDetails from './SellerDetails'
import '../styles/DealerProfile.css'
import ProductCard from '../../../components/ProductCard/components/ProductCard';
import { GetSellerDetails, GetSellerInventory } from '../API/GetRequests';

function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ShowSearchResults = (inventory) => {
    var table = [];
    for (let i = 0; i < inventory.length; i++) {
        table.push(
            <Col key={inventory[i].productId} data-aos="fade-up" xs="12" sm="6" md="4">
                <ProductCard
                    productId={inventory[i].productId}
                    productTitle={inventory[i].carName}
                    productSubtitle={numberWithCommas(inventory[i].mileage) + " miles · " + inventory[i].zipCode}
                    productText={"$" + numberWithCommas(inventory[i].price)}
                    productImg={inventory[i].coverPic}
                    productName={inventory[i].carName}
                    productBadge={"TRENDING"}
                    dealer />
            </Col>
        );        
    }
    return table;
}

const DealerProfile = ({match}) => {
    const [dealer, setDealer] = useState([]);
    const [inventory, setInventory] = useState([]);
    
    useEffect(() => {
        GetSellerDetails(match.params.id).then(doc => {
            setDealer(doc[0]);
        });
        GetSellerInventory(match.params.id).then(doc => {
            setInventory(doc.inventory);
        })
    }, []);

    return(
        <div className = "container-fluid">
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
                                profilePic={dealer.profilePic} />
                            :
                            null
                        }
                        </Col>
                    </Row>
                    
                    <Row className="search-heading mb-2 mt-3">
                        <Col md="8">
                            {
                                inventory ? 
                                <Label className="output-num">{inventory.length} cars match your search...</Label> 
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
        </div>
    )
}

export default DealerProfile;