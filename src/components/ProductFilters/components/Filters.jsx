import React from 'react';
import { Button, Card, CardBody, Col, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Filters = () => {
    return(
        <Card>
            <CardBody>
                Filter (2)
                <Button color="link" className="float-right" size="sm">Clear</Button>
                <hr/>
                <h6>LOCATION</h6>
                <hr />
                <h6>MAKE</h6>
                <Input type="select">
                    <option>Model</option>
                </Input>
                <hr/>
                <h6>PRICE</h6>
                <hr />
                <h6>MILEAGE</h6>
                <hr />
                <h6>YEAR</h6>
                <Row>
                    <Col xs="6">
                        <Input type="select">
                            <option>From</option>
                        </Input>
                    </Col>
                    <Col xs="6">
                        <Input type="select">
                            <option>To</option>
                        </Input>
                    </Col>
                </Row>

                <hr />

                <h6>TRANSMISSION</h6>
                <InputGroup>
                <Row>
                    <Col xs = "12">
                        <Label>
                            <Input type="checkbox" />Manual
                        </Label>
                    </Col>
                    <Col xs = "12">
                    <Label>
                        <Input type="checkbox" />Automatic
                    </Label>
                    </Col>
                    <Col xs = "12">
                    <Label>
                        <Input type="checkbox" />Electric
                    </Label>
                    </Col>
                    <Col xs = "12">
                    <Label>
                        <Input type="checkbox" />Random
                    </Label>
                    </Col>

                </Row>
                   
                </InputGroup>

                <hr />
                <h6>SELLER TYPE</h6>
                <InputGroup>
                <Row>
                    <Col xs = "12">
                    <Label>
                        <Input type="checkbox" />Dealer
                    </Label>
                    </Col>
                    <Col xs = "12">
                    <Label>
                        <Input type="checkbox" />Private Seller
                    </Label>
                    </Col>
                </Row>
                    
                    
                </InputGroup>
            </CardBody>
        </Card>
    );
}

export default Filters;