import React from 'react';
import { Card, CardBody, CardImg, Row, Col, Label } from 'reactstrap';
// import companyLogo from '../../../assets/company-logo.png';
import { Star, Trash2 } from 'react-feather';
import '../styles/Toolbar.css';

const Toolbar = (props) => {
    return (
        <Card className="toolbar">
            <CardBody>
                <Row>
                    <Col xs="1">
                        <CardImg src={props.user.profilePic} />
                    </Col>
                    <Col xs="9">
                        <h6>{props.user.fullName}</h6>
                        <Label>2 hr ago</Label>
                    </Col>

                    <Col xs="2">
                        <Star color="rgba(0, 0, 0, 0.25)" size={20} />
                        <Trash2 color="#E84D4D" size={20} />
                    </Col>
                </Row>
            </CardBody>

        </Card>
    )
}

export default Toolbar
