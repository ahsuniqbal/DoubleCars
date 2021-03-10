import React from 'react'
import { Col, Container, Row, Input, Label } from 'reactstrap'
import '../styles/SavedSearches.css';
import car1 from '../../../assets/LC1.png'

const SavedSearches = () => {
    return (
        <Container className="saved-searches">
            <Row>
                <Col xs="9">
                    <h4>Saved Searches <span>4</span></h4>
                </Col>
                <Col md="1">
                    <Label className="float-right mt-2">Sort by</Label>
                </Col>
                <Col xs="2">
                    <Input type="select">
                        <option value="relevance">Relevance</option>
                        <option value="price">Price</option>
                    </Input>
                </Col>
            </Row>


            <Row>
                <Col xs="12" sm="6" md="3">
                    <div className="grid-parent">
                        <Row>
                            <Col xs="7" style={{paddingLeft: '3px', paddingRight: '3px'}}>
                                <img src={car1} className="img-fluid" alt="Car 1" />
                            </Col>

                            <Col xs="5" style={{paddingLeft: '3px', paddingRight: '3px'}}>
                                <img src={car1} className="img-fluid" alt="Car 1" />
                                <img src={car1} className="img-fluid" alt="Car 1" />
                            </Col>
                        </Row>


                        <Row style={{marginTop: '20px', marginBottom: '17px'}}>
                            <Col xs="12">
                                <h6>“2017 Mercedes Benz Hybrid”</h6>
                            </Col>
                            <Col xs="12">
                                <Label className="active-filters">16 filters activated &nbsp;·&nbsp; <span>Remove</span></Label>
                            </Col>

                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SavedSearches
