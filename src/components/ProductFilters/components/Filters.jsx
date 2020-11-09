import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row, FormGroup, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Filters.css'
import Typography from '@material-ui/core/Typography';
import { RadiusSlider, PriceRangeSlider, MileageSlider } from './sliders/Sliders';

function FilterQueryString(obj){
    var str = "";
    for(let i = 0; i < Object.keys(obj).length; i++){
        str += Object.keys(obj)[i] + "=" + obj[Object.keys(obj)[i]];

        if(i !== Object.keys(obj).length - 1){
            str += "&";
        }
    }
    console.log(obj,str)
}

const Filters = (props) => {

    //Filters
    const [radius, setRadius] = useState(0);
    const [price, setPrice] = useState([1000, 2000]);
    const [mileage, setMileage] = useState(0);
    const [make, setMake] = useState(null);

    //Filters Object
    const [filters, setFilters] = useState({});

    //Make Model Collapse
    const [isModelCollapseOpen, setisModelCollapseOpen] = useState(false);
    
    
    
    const [year, setYear] = useState([0, 0]);
    const [transmission, setTransmission] = useState([false, false, false, false]);
    const [sellerType, setSellerType] = useState([false, false]);

    const handleRadius = (radius) => {
        setRadius(radius);
        props.onHandleRadius(radius);
        filters['radius'] = radius;
        setFilters(filters);
        FilterQueryString(filters);    
    }

    const handlePrice = (price) => {
        setPrice(price);
        props.onHandlePrice(price);
        filters['minPrice'] = price[0];
        filters['maxPrice'] = price[1];
        setFilters(filters);
        FilterQueryString(filters);
    }

    const handleMileage = (mileage) => {
        setMileage(mileage);
        props.onHandleMileage(mileage);
        filters['mileage'] = mileage;
        setFilters(filters);
        FilterQueryString(filters);
    }

    const handleMake = (make) => {
        setMake(make);
    }

    const todayYear = (new Date()).getFullYear();
    const dropdownYears = Array.from(new Array(100), (val, index) => todayYear - index);

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
                            <RadiusSlider 
                                min={0}
                                max={200}
                                onHandleRadius={handleRadius} />
                        </Col>
                        <Col xs="3" sm="2" md="4" lg="3" className="px-0">
                            <Label>{radius + " mi."}</Label>
                        </Col>
                    </Row>
                </div>
                
                <hr />
                
                <h6>MAKE</h6>
                <Input type="select" className="mb-4" onChange={(e) => { setisModelCollapseOpen(true); handleMake(e.target.value); }}>
                    <option value="">Make</option>
                    <option value="Suzuki">Suzuki</option>
                </Input>

                <Collapse isOpen={isModelCollapseOpen}>
                    <h6>MODEL</h6>
                    <Input type="select" className="mb-4" >
                        <option>Model</option>
                    </Input>
                </Collapse>

                <hr />
                
                <h6>PRICE</h6>
                <div className="px-2">
                    <PriceRangeSlider
                        min={1000}
                        max={2000}
                        minLabel={price[0]}
                        maxLabel={price[1]}
                        defaultValue={[1000, 2000]}
                        onHandlePrice={handlePrice} />
                </div>
                
                <hr />
                
                <h6>MILEAGE</h6>
                <div className="px-2">
                    <Typography id="continuous-slider" gutterBottom>
                        {mileage + " mi."}
                    </Typography>
                    <MileageSlider
                        min={0}
                        max={1000}
                        onHandleMileage={handleMileage} />
                </div>
                
                <hr />
                
                <h6>YEAR</h6>
                <Row>
                    <Col xs="6">
                        <Input type="select">
                            <option>From</option>
                            {
                                dropdownYears.map((year, index) => {
                                    return <option key={`year${index}`} value={year}>{year}</option>
                                })
                            }
                        </Input>
                    </Col>
                    <Col xs="6">
                        <Input type="select">
                            <option>To</option>
                            {
                                dropdownYears.map((year, index) => {
                                    return <option key={`year${index}`} value={year}>{year}</option>
                                })
                            }
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