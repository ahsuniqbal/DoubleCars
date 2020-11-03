import React from 'react';
import { Row, Col,Label} from 'reactstrap';

const Information = () => {
    return(
        <div>     
            <h4>Information</h4>
            <Row className = "mb-5">
                <Col xs = "6" md = "3">
                    <Label>Transmission</Label><br/>
                    <Label>Automatic</Label>
                </Col>
                <Col xs = "6" md = "3">
                    <Label>Trim</Label><br/>
                    <Label>V6w/Tech</Label>
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




