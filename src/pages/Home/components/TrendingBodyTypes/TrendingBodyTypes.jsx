import React from 'react';
import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import TrendingBody1 from './TrendingBody1';
import TrendingBody2 from './TrendingBody2';
import TrendingBody3 from './TrendingBody3';
import TrendingBody5 from './TrendingBody5'
import TrendingBody4 from './TrendingBody4'
// import '../../views/Settings.css'
import '../../styles/TrendingBodyTypes.css'
import classnames from 'classnames';

const TrendingBodyTypes = () =>{
    
    
        
        return(
            <div>
                <Row>
                    <Col xs="12">
                        <Nav tabs>
                            <NavItem>
                                <NavLink>
                                   SUV
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink >
                                    T2
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink >
                                    T3
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink >
                                    T4
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink >
                                    T5
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent >
                            <TabPane tabId="1">
                                <TrendingBody1/>
                                
                            </TabPane>
                            
                            <TabPane tabId="2">
                                <TrendingBody2/>
                            </TabPane>

                            <TabPane tabId="3">
                                <TrendingBody3/>
                            </TabPane>

                            <TabPane tabId="4">
                                <Row>
                                    <Col xs="12">
                                    <TrendingBody4/>
                                    </Col>
                                </Row>
                            </TabPane>

                            <TabPane tabId="5">
                                <Row>
                                    <Col xs="12">
                                        <TrendingBody5/>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </div>
        );
    
}
export default TrendingBodyTypes;