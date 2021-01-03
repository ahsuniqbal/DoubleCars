import React from 'react';
import '../styles/AboutStats.css'
import { Row, Col, Container, NavLink, Card, CardBody, Label} from 'reactstrap';
const AboutStats = () => {
    return(
        <div className = "">
            

            <Row>
                <Col xs = "6" md = "3" className = "text-center">
                    <Card className = "stats-card">
                        <CardBody>
                            <Label className = "stats-label">14,000+</Label> <br/>
                            <Label className = "stats-label2">Cars on sell</Label>
                        </CardBody>
                    </Card>
                </Col>

                <Col xs = "6" md = "3" className = "text-center">
                    <Card className = "stats-card">
                        <CardBody>
                            <Label className = "stats-label">1000+</Label><br/>
                            <Label className = "stats-label2">Active sellers</Label>
                        </CardBody>
                    </Card>
                </Col>

                <Col xs = "6" md = "3" className = "text-center">
                    <Card className = "stats-card">
                        <CardBody>
                            <Label className = "stats-label">5,000+</Label><br/>
                            <Label className = "stats-label2">Cars sold</Label>
                        </CardBody>
                    </Card>
                </Col>

                <Col xs = "6" md = "3" className = "text-center">
                    <Card className = "stats-card">
                        <CardBody>
                            <Label className = "stats-label">50,000+</Label><br/>
                            <Label className = "stats-label2">Daily Users</Label>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}

export default AboutStats;