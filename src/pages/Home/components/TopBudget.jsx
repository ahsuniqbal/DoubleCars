import React, { useState} from 'react';
import {   Button,  Row, Col } from 'reactstrap';
import '../styles/TopBudget.css'
import { Link } from 'react-router-dom';
const TopBudget = () => {
    const [activeTab, setActiveTab] = useState('1');
    const mystyle = {
        backgroundImage: `url(${require("../../../assets/TopBudgetCar.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '258px',
        marginTop: '4rem',
      };

      const toggle = (e, tab) => {
        
        if(activeTab !== tab){
            setActiveTab(tab);
        }
    }

      
    return(
        <Row className='top-budget-main-row'>
            <Col md = "12" xs = "12" style={mystyle}>
                <Row className = "topBudgetRow">
                    <Col xs = "12" md = "12" className = "text-center">
                        <h1 className = "top-budget-label">Best cars for you under $5000</h1>
                        <h1 className = "top-budget-heading">Top Budget Cars</h1>
                        <Link to = {'/about/'}>
                        <Button  className = "explore-button">Exlpore more</Button>
                        </Link>
                        </Col>
                </Row>
               
{/* 
                <Row>
                  <Col xs="6" sm="4" md="4">
                    <Nav tabs vertical pills>
                      <NavItem>
                        <NavLink
                          className={classnames({active: activeTab === '1'})}
                          onClick={() => {
                            toggle('1');
                          }}
                        >
                          Tab1
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({active: activeTab === '2'})}
                          onClick={(e) => { toggle(2)}}
                        >
                          Moar Tabs
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col xs="6" sm="6" md="6">
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1">
                        <h4>Tab 1 Contents</h4>
                      </TabPane>
                      <TabPane tabId="2">
                        <h4>Tab 2 Contents</h4>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row> */}


                
          
            </Col>
        </Row>
        
    )
  
}

export default TopBudget;