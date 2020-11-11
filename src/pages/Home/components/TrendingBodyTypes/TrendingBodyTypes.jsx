import React from 'react';
import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import TrendingBody1 from './TrendingBody1';
import TrendingBody2 from './TrendingBody2';
import TrendingBody3 from './TrendingBody3';
import TrendingBody4 from './TrendingBody4';
import TrendingBody5 from './TrendingBody5';
import TrendingBody6 from './TrendingBody6';

// import '../../views/Settings.css'
import '../../styles/TrendingBodyTypes.css'
import classnames from 'classnames';

const TrendingBodyTypes = () =>{
        
        return(
            <div>
                <Row>
                    <Col md = "12" xs = "12" className = "text-center mt-5">
                        <h2 className = "trending-body-head">Trending Body Type in 2020</h2>
                    </Col>
                    <Col xs="12">
                        <Nav>
                            <NavItem>
                                <NavLink>
                                   SUV
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink >
                                    Sedan
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink >
                                    Hatchback
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink >
                                    Crossover
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink >
                                    Coup
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink >
                                    Covertable
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
                                <TrendingBody4/>
                            </TabPane>

                            <TabPane tabId="5">
                                <TrendingBody5/>
                            </TabPane>
                            <TabPane tabId="6">
                                <TrendingBody6/>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </div>
        );
    
}
export default TrendingBodyTypes;