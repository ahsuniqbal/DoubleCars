import React from 'react';
import { Row, Col,Label} from 'reactstrap';
import { AddCommaToNumber } from '../../../utils/NumberManipulation';
import '../styles/Information.css';

const Information = (props) => {
    const details = props.details;
    const attributes = props.attributes;

    function renderFeaturesList() {
        var table = [];
        
        if(attributes[0].category === 'features') {
            for(let i = 0; i < attributes.length; i++) {
                table.push(
                    <Col xs="6" md="3">
                        <Label className = "car-feature">{attributes[i].itemName}</Label>
                    </Col>
                );
            }
        }
        else {
            for(let i = 0; i < attributes.length; i++) {
                if(i < attributes.length - 1 && attributes[i].category === attributes[i + 1].category) {
                    table.push(
                        <Col xs="6" md="3">
                            <Label className = "info-sub-head">{attributes[i].category}</Label><br />
                            {
                                attributes[i].category === attributes[i + 1].category ? 
                                    <Label className="car-feature">{attributes[i].itemName}</Label>
                                :null
                            }
                        </Col>
                    );
                }
                else {
                    table.push(
                        <Col xs="6" md="3">
                            <Label className = "info-sub-head">{attributes[i].category}</Label><br />
                                <Label className="car-feature">{attributes[i].itemName}</Label>
                        </Col>
                    );
                }
                
                // if(attributes[i].category === attributes[i + 1].category) {
                //     table.push(
                //         <Col xs="6" md="3">
                //             <Label className="car-feature">{attributes[i].itemName}</Label>
                //         </Col>
                //     );
                // }
                // else { 

                // }
            }
            // var categoryName = attributes[0].category;
            // for(let i = 0; i < attributes.length; i++) {
            //     if(categoryName === attributes[i].category)
            //         table.push(
            //             <Col xs="6" md="3">
            //                 <Label className="info-sub-head">{attributes[i].category}</Label> <br/>
            //                 {
            //                     renderItems(attributes, i)
            //                 }
            //             </Col>
            //         );
            // }
        }
        return table;
    }

    return(
        <div>
            {/* Car name and price section starts here. */}
            <Row>
                <Col md = "8" className = "mt-5">
                    <h2 className = "car-name" title={details.yearCar + " " + details.carMake + " " + details.carModel + " " + details.trim}>{details.yearCar + " " + details.carMake + " " + details.carModel + " " + details.trim}</h2>
                </Col>
                <Col className = "text-right mt-5" md = "4">
                    <h2 className = "car-price">{details.price ? ("$" + AddCommaToNumber(details.price)) : null}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4 className = "car-info mb-4">{details.mileage ? (AddCommaToNumber(details.mileage) + " mi ·") : null} {details.zipCode ? details.zipCode + " - " : null} {details.location ? details.location : null}</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4 className = "car-info mb-4">{details.mileage ? details.description : null}</h4>
                </Col>
            </Row>
            <hr  className = "info-bottom-line mb-5"/>

            {/* Information section starts here.*/}
            <h4 className = "information-head">Information</h4>
            <Row className = "mb-5">
                {
                    details.vin ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Vin</Label><br/>
                        <Label className = "car-detail">{details.vin}</Label>
                    </Col>
                    : null
                }
                {
                    details.isUsed === 0 ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Car Category</Label> <br/>
                        <Label className = "car-detail">New</Label>
                    </Col>
                    :
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Car Category</Label> <br/>
                        <Label className = "car-detail">Used</Label>
                    </Col>
                }
                {
                    details.transmission ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Transmission</Label><br/>
                        <Label className = "car-detail">{details.transmission}</Label>
                    </Col>
                    : null
                }
                {
                    details.stockNo ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Stock No</Label> <br/>
                        <Label className = "car-detail">{details.stockNo}</Label>
                    </Col>
                    : null
                }
                {
                    details.exteriorColor ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Exterior Color</Label> <br/>
                        <Label className = "car-detail">{details.exteriorColor}</Label>
                    </Col>
                    : null
                }
                {
                    details.interiorColor ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Interior Color</Label> <br/>
                        <Label className = "car-detail">{details.interiorColor}</Label>
                    </Col>
                    : null
                }
                {
                    details.engine ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Engine</Label> <br/>
                        <Label className = "car-detail">{details.engine}</Label>
                    </Col>
                    : null
                }
                {
                    details.fuelType ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Fuel Type</Label> <br/>
                        <Label className = "car-detail">{details.fuelType}</Label>
                    </Col>
                    : null
                }
                {
                    details.gasMilage ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">City MPG</Label> <br/>
                        <Label className = "car-detail">{details.gasMilage}</Label>
                    </Col>
                    : null
                }
                {
                    details.highway_mileage ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Highway MPG</Label> <br/>
                        <Label className = "car-detail">{details.highway_mileage}</Label>
                    </Col>
                    : null
                }
                {
                    details.bodyStyle ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Body Style</Label> <br/>
                        <Label className = "car-detail">{details.bodyStyle}</Label>
                    </Col>
                    : null
                }
                {
                    details.anti_brake_system ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Anti Brake System</Label> <br/>
                        <Label className = "car-detail">{details.anti_brake_system}</Label>
                    </Col>
                    : null
                }
                {
                    details.curb_weight ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Curb Weight</Label> <br/>
                        <Label className = "car-detail">{details.curb_weight}</Label>
                    </Col>
                    : null
                }
                {
                    details.doors ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Doors</Label> <br/>
                        <Label className = "car-detail">{details.doors}</Label>
                    </Col>
                    : null
                }
                {
                    details.drivetrain ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Drive Train</Label> <br/>
                        <Label className = "car-detail">{details.drivetrain}</Label>
                    </Col>
                    : null
                }
                {
                    details.engine_cylinders ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Engine Cylinders</Label> <br/>
                        <Label className = "car-detail">{details.engine_cylinders}</Label>
                    </Col>
                    : null
                }
                {
                    details.engine_size ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Engine Size</Label> <br/>
                        <Label className = "car-detail">{details.engine_size}</Label>
                    </Col>
                    : null
                }
                {
                    details.fuel_capacity ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Fuel Capacity</Label> <br/>
                        <Label className = "car-detail">{details.fuel_capacity}</Label>
                    </Col>
                    : null
                }
                {
                    details.made_in ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Made in Country</Label> <br/>
                        <Label className = "car-detail">{details.made_in}</Label>
                    </Col>
                    : null
                }
                {
                    details.made_in_city ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Made in City</Label> <br/>
                        <Label className = "car-detail">{details.made_in_city}</Label>
                    </Col>
                    : null
                }
                {
                    details.made_in_city ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Gross Vehicle Weight</Label> <br/>
                        <Label className = "car-detail">{details.gross_vehicle_weight_rating}</Label>
                    </Col>
                    : null
                }
                {
                    details.overall_height ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Overall Height</Label> <br/>
                        <Label className = "car-detail">{details.overall_height}</Label>
                    </Col>
                    : null
                }
                {
                    details.overall_length ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Overall Length</Label> <br/>
                        <Label className = "car-detail">{details.overall_length}</Label>
                    </Col>
                    : null
                }
                {
                    details.overall_width ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Overall Width</Label> <br/>
                        <Label className = "car-detail">{details.overall_width}</Label>
                    </Col>
                    : null
                }
                {
                    details.size ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Size</Label> <br/>
                        <Label className = "car-detail">{details.size}</Label>
                    </Col>
                    : null
                }
                {
                    details.standard_seating ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Standard Seating</Label> <br/>
                        <Label className = "car-detail">{details.standard_seating}</Label>
                    </Col>
                    : null
                }
                {
                    details.standard_seating ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Style</Label> <br/>
                        <Label className = "car-detail">{details.style}</Label>
                    </Col>
                    : null
                }
                {
                    details.transmission_speeds ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Transmission Speed</Label> <br/>
                        <Label className = "car-detail">{details.transmission_speeds}</Label>
                    </Col>
                    : null
                }
                {
                    details.transmission_type ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Transmission Type</Label> <br/>
                        <Label className = "car-detail">{details.transmission_type}</Label>
                    </Col>
                    : null
                }
                {
                    details.wheelbase_length ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Wheel Base Length</Label> <br/>
                        <Label className = "car-detail">{details.wheelbase_length}</Label>
                    </Col>
                    : null
                }
            </Row>
            {/* Information section ends here.*/}

            <hr className = "info-bottom-line mb-5"/>

            {/* Car Feature section starts here. */}
            <h4 className = "mb-5 car-feature-head">Car Features</h4>
            <Row className = "mb-5">
                {
                    attributes.length > 0 ? renderFeaturesList(attributes) : <Col xs = "12"><Label className = "car-detail">No features have been listed by the user</Label></Col>
                }
            </Row>
            <hr className = "info-bottom-line mb-5"/>
        </div>
    )
}

export default Information;