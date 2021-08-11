import React from 'react';
import {Row, Col, Container, CardBody, Card, Button, Label, NavLink} from 'reactstrap'
const SellerNote = () => {
    return(
        
        <Container>  
          
            
              <Row>
                <Col xs = "12" md = "12">
                  <Label  className="mb-2 certified-car-label">Seller’s Note</Label><br/>
                  <Label className = "certified-car-sublabel">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis efficitur nulla nec cursus. Donec gravida quam ex, non vulputate ligula auctor ac. Vivamus quis erat imperdiet, efficitur leo et, tristique risus. Sed sed tincidunt turpis. Aliquam sagittis sollicitudin sem ut ullamcorper. </Label>
                </Col>
               
              </Row>
        </Container>
 
    )
}

export default SellerNote;