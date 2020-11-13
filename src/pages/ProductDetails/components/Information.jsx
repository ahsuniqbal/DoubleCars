import React from 'react';
import { Row, Col,Label} from 'reactstrap';
import '../styles/Information.css';

function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Information = (props) => {
    return(
        <div>     
            <Row>
                <Col md = "8">
                    <h2 className = "car-name">{props.yearCar + " " + props.carModel + " " + props.carMake}</h2>
                </Col>
                <Col className = "text-right" md = "4">
                    <h2 className = "car-price">{"$" + numberWithCommas(props.price)}</h2>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h4 className = "car-info mb-5">{numberWithCommas(props.mileage) + " mi."} · {props.zipCode} </h4>
                </Col>
            </Row>

            <h4 className = "information-head">Information</h4>
            <Row className = "mb-5">
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Transmission</Label><br/>
                    <Label>{props.transmission}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Trim</Label><br/>
                    <Label>{props.trim}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Fuel Type</Label> <br/>
                    <Label>{props.fuelType}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">VIN</Label> <br/>
                    <Label>{props.vin}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Exterior Color</Label> <br/>
                    <Label>{props.exteriorColor}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Interior Color</Label> <br/>
                    <Label>{props.interiorColor}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Engine</Label> <br/>
                    <Label>{props.engine}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Car Condition</Label> <br/>
                    <Label>{props.conditionCar}</Label>
                </Col>

                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Gas Mileage</Label> <br/>
                    <Label>{props.gasMileage}</Label>
                </Col>

                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Body Style</Label> <br/>
                    <Label>{props.bodyStyle}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Type</Label> <br/>
                    <Label>{props.type}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Interior</Label> <br/>
                    <Label>{props.interior}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Exterior</Label> <br/>
                    <Label>{props.exterior}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Security</Label> <br/>
                    <Label>{props.security}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Others</Label> <br/>
                    <Label>{props.others}</Label>
                </Col>
            </Row>
    </div>
    )
}

export default Information;




