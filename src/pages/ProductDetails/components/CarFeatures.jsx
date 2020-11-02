import React from 'react';
import { Container, NavLink, Row, Col, Input, Button, Card, CardBody, FormGroup, Label, CardImg} from 'reactstrap';
const CarFeatures = () => {
    return(
        <div>
             <h4 className = "mt-5">Car Features</h4>
                    <Row className = "mb-5">
                        <Col xs = "6" md = "3">
                            <Label>ABS</Label>
                        </Col>
                        <Col xs = "6" md = "3">
                            <Label>Trim</Label>
                            
                        </Col>
                        <Col xs = "6" md = "3">
                            <Label>Immobilizer Key</Label>
                        </Col>
                        <Col xs = "6" md = "3">
                            <Label>Power Mirrors</Label>
                        </Col>
                    </Row>
        </div>
    )
}

export default CarFeatures;