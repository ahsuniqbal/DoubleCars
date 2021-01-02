import React from 'react';
import '../styles/AboutStats.css'
import { Row, Col, Container, NavLink, Card, CardBody, Label} from 'reactstrap';
const AboutStats = () => {
    return(
        <div className = "">
            <Row>
                <Col xs = "12" md = "12" sm = "12">
                    <h2 className = "stats-heading">Stats say it all</h2>
                    <p className = "stats-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis, rutrum neque sit amet, ornare lorem. Donec est metus, sagittis a nunc suscipit, varius facilisis.</p>
                </Col>
            </Row>

            <Row>
                <Col xs = "6" md = "3">
                    <Card>
                        <CardBody>
                            <Label>14,000+</Label>
                        </CardBody>
                    </Card>
                </Col>

                <Col xs = "6" md = "3">
                <Card>
                        <CardBody>
                            <Label>1000+</Label>
                        </CardBody>
                    </Card>
                </Col>

                <Col xs = "6" md = "3">
                <Card>
                        <CardBody>
                            <Label>5,000+</Label>
                        </CardBody>
                    </Card>
                </Col>

                <Col xs = "6" md = "3">
                <Card>
                        <CardBody>
                            <Label>50,000+</Label>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}

export default AboutStats;