import React from 'react';
import '../styles/CertifiedCarCard.css'
import {Row, Col, Container, CardBody, Card, Button, Label, NavLink} from 'reactstrap'
const CertifiedCarCard = () => {
    return(
        
        <Container>
            
            <Card>
        <CardBody>
          <Row>
              <Col xs = "12" md = "8">
                <Label  className="mb-2 certified-car-label">This is a Certified Car</Label><br/>
                <Label className = "certified-car-sublabel">The seller has marked this car as a certified car.</Label>
          
              </Col>
              <Col xs = "12" md = "4">

          <NavLink className = "request-report-button float-right mt-3">Request Report</NavLink>
              </Col>
          </Row>
        </CardBody>
      </Card>
           
           
            
        </Container>
 
    )
}

export default CertifiedCarCard;