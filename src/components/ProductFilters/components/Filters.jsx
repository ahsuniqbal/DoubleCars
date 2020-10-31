import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row, FormGroup, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Filters.css'
import Typography from '@material-ui/core/Typography';
import { RadiusSlider, PriceRangeSlider, MileageSlider } from './sliders/Sliders';


const Filters = () => {
    const [isModelCollapseOpen, setisModelCollapseOpen] = useState(false);
    const [radius, setRadius] = useState(0);
    const [minPrice, maxPrice, setPrice] = useState([0, 0]);
    const [mileage, setMileage] = useState(0);
    const [fromYear, toYear, setYear] = useState([0, 0]);
    const [manual, automatic, electric, random, setTransmission] = useState([false, false, false, false]);
    const [dealer, privateSeller, setSellerType] = useState([false, false]);

    const handleRadius = (value) => {
        setRadius(value);
    }

    const handlePrice = (minPrice, maxPrice) => {
        setPrice([minPrice, maxPrice]);
    }

    const handleMileage = (mileage) => {
        setMileage(mileage);
    }

    return(
        <Card className="filters">
            <CardBody>
                <Label><b>Filter</b> (2)</Label>
                <Button color="link" className="float-right" size="sm">Clear</Button>
                
                <hr/>
                
                <div className="location">
                    <h6>LOCATION</h6>
                    <InputGroup>
                    <Input type="text" className="location-box" />
                        <InputGroupAddon addonType="append">
                            <InputGroupText>
                                <FontAwesomeIcon icon="map-pin" size="sm" color="#1C67CE" />
                            </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                    

                    <Row className="radius">
                        <Col xs="3" sm="2" md="4" lg="3">
                            <Label>Radius</Label>
                        </Col>
                        <Col xs="6" sm="8" md="4" lg="6">
                            <RadiusSlider />
                        </Col>
                        <Col xs="3" sm="2" md="4" lg="3" className="px-0">
                            <Label>{radius + "Km"}</Label>
                        </Col>
                    </Row>
                </div>
                
                <hr />
                
                <h6>MAKE</h6>
                <Input type="select" className="mb-4" onChange={() => setisModelCollapseOpen(true)}>
                    <option>Make</option>
                    <option>Suzuki</option>
                </Input>

                <Collapse isOpen={isModelCollapseOpen}>
                    <h6>MODEL</h6>
                    <Input type="select" className="mb-4">
                        <option>Model</option>
                    </Input>
                </Collapse>

                <hr />
                
                <h6>PRICE</h6>
                <div className="px-2">
                    <PriceRangeSlider
                        min={1000}
                        max={2000}
                        defaultValue={1000} />
                </div>
                
                <hr />
                
                <h6>MILEAGE</h6>
                <div className="px-2">
                    <Typography id="continuous-slider" gutterBottom>
                        {mileage + "Km"}
                    </Typography>
                    <MileageSlider />
                </div>
                
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
                    <FormGroup check>
                        <Input type="checkbox" id="manual" name="transmission" />
                        <Label check htmlFor="manual">Manual</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" id="automatic" name="transmission" />
                        <Label check htmlFor="automatic">Automatic</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" id="electric" name="transmission" />
                        <Label check htmlFor="electric">Electric</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" id="random" name="transmission" />
                        <Label check htmlFor="random">Random</Label>
                    </FormGroup>


                <hr />

                <h6>SELLER TYPE</h6>
                <FormGroup check>
                    <Input type="checkbox" id="dealer" name="seller-type" />
                    <Label check htmlFor="dealer">Dealer</Label>
                </FormGroup>
                <FormGroup check>
                    <Input type="checkbox" id="private-seller" name="seller-type" />
                    <Label check htmlFor="private-seller">Private Seller</Label>
                </FormGroup>
            </CardBody>
        </Card>
    );
}

export default Filters;