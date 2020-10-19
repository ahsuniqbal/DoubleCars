import React from 'react';
import '../styles/Home.css'
import search from '../../../assets/search.png'
import {Button, Label, Row, Col, Input} from 'reactstrap'
const SearchBox = () => {
    return(
        <div className = "container">
            <div className = "searchbox">
                <Row>
                    <Col md = "6">
                        <Label>Search For your dream car</Label>
                        <Col md = "6">
                        <Input type="text" className = "search-text-field" placeholder="Search a car..." />
                        </Col>
                        <Col md = "6">
                        <img src = {search} alt = "twitter" width = "10%"/>
                        </Col>
                        
                    </Col>

                    <Col md = "6" className = "text-right">
                        <Button>Advanced Search</Button>
                    </Col>

                </Row>
                
            </div>
        </div>
    )
}

export default SearchBox;