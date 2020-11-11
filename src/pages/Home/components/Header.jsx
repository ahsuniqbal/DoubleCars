import React from 'react';
import Cover from '../../../assets/landingPageCover.png'
import { NavLink } from "react-router-dom";
import '../styles/Header.css'
import '../styles/SearchBox.css'
import {Button, Label, Row, Col, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import search from '../../../assets/search.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return(
        <div>
            <section className = "d-flex align-items-center">
                <div className = "container-fluid">
                    <div className = "row">
                        <div className = "col-12">
                            <div className = "row">
                                <div className = "col-md-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column left-cover-section">
                                    <h1 className = "cover-left-heading">
                                        Find the most desireable car
                                    </h1>
                                    <h5 className = "my-3 header-sub-head">
                                        Buy and sell cars with ease using our app!
                                    </h5>
                                    <div className = "mt-3">
                                    <NavLink className="nav-link download-button-cover mb-5" to="">Download App</NavLink>
                                    </div>
                                </div>

                                <div className = "col-lg-7  order-1 order-lg-2 right-cover-section">
                                    {/* <img src = {Cover} alt = "Cover image" className = "img-fluid" width = "100%"/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className = "search-box">
                <Row>
                    <Col md = "6">
                        <Label className = "search-label mt-2 ml-3 mb-5">Search for your dream car</Label>
                    </Col>
                    <Col md = "6" className = "text-right mt-2  ">
                    <Link className = "mr-3">Advanced Search</Link>
                    </Col>

                </Row>
                <Row>
                    <Col md = "5" className="ml-4">
                    <InputGroup>
                    <Input type="text"  placeholder = "Search a car..." />
                    <InputGroupAddon addonType="append">
                        <InputGroupText>
                            <FontAwesomeIcon icon="search" size="sm" color="#1C67CE" />
                        </InputGroupText>
                    </InputGroupAddon>
                    </InputGroup>
                    </Col>
                    <Col md="2">
                        <Input type="select">
                            <option>Make</option>
                            
                        </Input>
                    </Col>
                    <Col md="2">
                        <Input type="select">
                            <option>Model</option>
                            
                        </Input>
                    </Col>
                    <Col md="2" className = "">
                        <Input type="select">
                            <option>Price Range</option>
                            
                        </Input>
                    </Col>
                    

                    

                </Row>
                
            </div>
    </div>
    )
}

export default Header;