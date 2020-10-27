import React from 'react';
import { Button, Card, CardBody, Col, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Filters.css'
import { Slider } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import {  withStyles } from '@material-ui/core/styles';




const RadiusSlider = withStyles({
    root: {
        color: "#1C67CE",
        height: 2,
    },
    thumb: {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -10.5,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
      },
      track: {
        height: 2,
        borderRadius: 4,
      },
      rail: {
        height: 2,
        borderRadius: 4,
      },
})(Slider);




const Filters = () => {
    return(
        <Card className="filters">
            <CardBody>
                <Label><b>Filter</b> (2)</Label>
                <Button color="link" className="float-right" size="sm">Clear</Button>
                
                <hr/>
                
                <div className="location">
                    <h6>LOCATION</h6>
                    <Input type="text" />

                    <Row>
                        <Col xs="3" sm="2" md="3">
                            <Label>Radius</Label>
                        </Col>
                        <Col xs="6" sm="8" md="6">
                            <RadiusSlider
                                min={0}
                                max={100}
                                valueLabelDisplay = "auto" />
                        </Col>
                        <Col xs="3" sm="2" md="3" className="px-0">
                            <Label>100km</Label>
                        </Col>
                    </Row>
                </div>
                
                <hr />
                
                <h6>MAKE</h6>
                <Input type="select" className="mb-4">
                    <option>Model</option>
                </Input>
                
                <hr/>
                
                <h6>PRICE</h6>
                <div>
                    {/* Price slider will be here */}
                </div>
                
                <hr />
                
                <h6>MILEAGE</h6>
                <div>
                    <Typography id="continuous-slider" gutterBottom>
                        Any Km
                    </Typography>
                    <Slider
                        min={0}
                        max={2000}
                        valueLabelDisplay="auto"
                    />
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