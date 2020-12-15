import React from 'react';
import { Col, Row, Label, Button } from 'reactstrap';
import AdImage from '../../../assets/advertisementLanding.png'
import '../styles/TopBudget.css'

const TopBudget = () => {
    const mystyle = {
        backgroundImage: `url(${require("../../../assets/TopBudgetCar.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '30vh',
      };

      
    return(
        <Row >
            <Col md = "12" xs = "12" style={mystyle}>
                <Row className = "topBudgetRow">
                    <Col xs = "12" md = "12" className = "text-center">
                        <Label className = "top-budget-label">Best cars for you under $5000</Label>
                        <h1 className = "top-budget-heading">Top Budget Cars</h1>
                        <Button  className = "explore-button">Exlpore more</Button>
                    </Col>
                </Row>
                
          
            </Col>
        </Row>
        
    )
  
}

export default TopBudget;