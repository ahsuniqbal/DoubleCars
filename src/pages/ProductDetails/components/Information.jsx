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
                    <Label className = "car-detail">{props.transmission ? props.transmission : "N/A"}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Trim</Label><br/>
                    <Label className = "car-detail">{props.trim ? props.trim : "N/A"}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Fuel Type</Label> <br/>
                    <Label className = "car-detail">{props.fuelType ? props.fuelType : "N/A"}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">VIN</Label> <br/>
                    <Label className = "car-detail">{props.vin ? props.vin : "N/A"}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Exterior Color</Label> <br/>
                    <Label className = "car-detail">{props.exteriorColor ? props.exteriorColor : "N/A"}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Interior Color</Label> <br/>
                    <Label className = "car-detail">{props.interiorColor ? props.interiorColor : "N/A"}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Engine</Label> <br/>
                    <Label className = "car-detail">{props.engine ? props.engine : "N/A"}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Car Condition</Label> <br/>
                    <Label className = "car-detail">{props.conditionCar ? props.conditionCar : "N/A"}</Label>
                </Col>

                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Gas Mileage</Label> <br/>
                    <Label className = "car-detail">{props.gasMileage ? props.gasMileage : "N/A"}</Label>
                </Col>

                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Body Style</Label> <br/>
                    <Label className = "car-detail">{props.bodyStyle ? props.bodyStyle : "N/A"}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Type</Label> <br/>
                    <Label className = "car-detail">{props.type ? props.type : "N/A"}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Interior</Label> <br/>
                    <Label className = "car-detail">{props.interior ? props.interior : "N/A"}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Exterior</Label> <br/>
                    <Label className = "car-detail">{props.exterior ? props.exterior : "N/A"}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Security</Label> <br/>
                    <Label className = "car-detail">{props.security ? props.security : "N/A"}</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label className = "info-sub-head">Others</Label> <br/>
                    <Label className = "car-detail">{props.others ? props.others : "N/A"}</Label>
                </Col>
            </Row>
    </div>
    )
}

export default Information;




