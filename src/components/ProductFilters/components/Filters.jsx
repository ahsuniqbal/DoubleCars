import React from 'react';
import { Button, Card, CardBody, Col, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Filters.css'
import { Slider } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import {  withStyles, makeStyles } from '@material-ui/core/styles';




const RadiusSlider = withStyles({
    thumb: {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -10.5,
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



//Price range slider starts here...
const PriceRangeSlider = withStyles({
    root: {
        marginTop: 30,
    },
    thumb: {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -10.5,
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
  
//   function priceValueText(value) {
//     return `${value}`;
//   }
  
//   export function PriceRangeSlider(props) {
//     const CurrentState = props.currentstate
//     const classes = usePriceStyles();
//     const [value, setValue] = React.useState([18, 70]);
  
//     const handleChange1 = (event, newValue) => {
    
//         var minPrice = 0;
//         var maxPrice = 1;
//         CurrentState.state.map["minPrice"] = newValue[minPrice];
//         CurrentState.state.map["maxPrice"] = newValue[maxPrice];
//         CurrentState.searchQueryString(CurrentState.state.map)
//         setValue(newValue);
//     };

//     const mark = [
//         {
//             value: 18,
//             label: '18',
//         },
//         {
//             value: 30,
//             label: '30',
//         },
//         {
//             value: 40,
//             label: '40',
//         },
//         {
//             value: 50,
//             label: '50',
//         },
//         {
//             value: 60,
//             label: '60',
//         },
//         {
//             value: 70,
//             label: '70',
//         },

//     ]

//     return(

//     <div className={classes.root}>
//       <Slider
//         value={value}
//         min={18}
//         max={70}
//         steps={1}
//         marks={mark}
//         onChange={handleChange1}
//         valueLabelDisplay="auto"
//         aria-labelledby="range-slider"
//         getAriaValueText={priceValueText}
//       />
//     </div>
//     )
// }



//Price range slider starts here...
const MileageRangeSlider = withStyles({
    thumb: {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -10.5,
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
                                max={100} />
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
                <div className="px-2">
                    <PriceRangeSlider
                        min={0}
                        max={100}
                        marks={[
                            {
                              value: 0,
                              label: '$0',
                            },
                            {
                              value: 100,
                              label: 'Max',
                            }
                          ]} />
                </div>
                
                <hr />
                
                <h6>MILEAGE</h6>
                <div className="px-2">
                    <Typography id="continuous-slider" gutterBottom>
                        Any Km
                    </Typography>
                    <MileageRangeSlider
                        min={0}
                        max={2000} />
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