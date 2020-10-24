import React from 'react';
import { Button, Card, CardBody, Col, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Filters = () => {
    return(
        <Card>
            <CardBody>
                Filter (2)
                <Button color="link" className="float-right" size="sm">Clear</Button>
                <hr />
                <h6>LOCATION</h6>
                <InputGroup>
                    <InputGroupAddon addonType="prepend" >
                        <InputGroupText>
                            <FontAwesomeIcon icon="fa-user" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text"></Input>
                </InputGroup>
                <Label>Radius</Label>
                <hr />
                <h6>MAKE</h6>
                <Input type="select">
                    <option>Model</option>
                </Input>
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
                    <Label>
                        <Input type="checkbox" />Manual
                    </Label>
                    <Label>
                        <Input type="checkbox" />Automatic
                    </Label>
                    <Label>
                        <Input type="checkbox" />Electric
                    </Label>
                    <Label>
                        <Input type="checkbox" />Random
                    </Label>
                </InputGroup>

                <hr />
                <h6>SELLER TYPE</h6>
                <InputGroup>
                    <Label>
                        <Input type="checkbox" />Dealer
                    </Label>
                    <Label>
                        <Input type="checkbox" />Private Seller
                    </Label>
                </InputGroup>
            </CardBody>
        </Card>
    );
}

export default Filters;