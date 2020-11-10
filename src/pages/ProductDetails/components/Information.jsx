import React from 'react';
import { Row, Col,Label} from 'reactstrap';
import '../styles/Information.css'

const Information = (props) => {
    return(
        <div>     
            <Row>
                <Col md = "8">
                    <h2 className = "car-name">{props.yearCar + " " + props.carModel + " " + props.carMake}</h2>
                </Col>
                <Col className = "text-right" md = "4">
                    <h2 className = "car-price">{"$" + props.price}</h2>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h4 className = "car-info mb-5">{props.mileage} · {props.zipCode} </h4>
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
            </Row>

            <Row>
                <Col xs = "6" md = "3">
                    <Label>Trim</Label><br/>
                    <Label>V6w/Tech</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label>Fule Type</Label><br/>
                    <Label>Gasoline</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label>Full Type</Label> <br/>
                    <Label>Gasoline</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label>VIN</Label> <br/>
                    <Label>WDD3G4FB</Label>
                </Col>
            </Row>
    </div>
    )
}

export default Information;




