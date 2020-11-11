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
                    <Label>Transmission</Label><br/>
                    <Label>{props.transmission}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label>Trim</Label><br/>
                    <Label>{props.trim}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label>Fuel Type</Label> <br/>
                    <Label>{props.fuelType}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label>VIN</Label> <br/>
                    <Label>{props.vin}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label>Exterior Color</Label> <br/>
                    <Label>{props.exteriorColor}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label>Interior Color</Label> <br/>
                    <Label>{props.interiorColor}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label>Engine</Label> <br/>
                    <Label>{props.engine}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label>Car Condition</Label> <br/>
                    <Label>{props.conditionCar}</Label>
                </Col>

                <Col xs = "6" md = "3">
                    <Label>Gas Mileage</Label> <br/>
                    <Label>{props.gasMileage}</Label>
                </Col>

                <Col xs = "6" md = "3">
                    <Label>Body Style</Label> <br/>
                    <Label>{props.bodyStyle}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label>Type</Label> <br/>
                    <Label>{props.type}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label>Interior</Label> <br/>
                    <Label>{props.interior}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label>Exterior</Label> <br/>
                    <Label>{props.exterior}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label>Security</Label> <br/>
                    <Label>{props.security}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label>Others</Label> <br/>
                    <Label>{props.others}</Label>
                </Col>
            </Row>
    </div>
    )
}

export default Information;




