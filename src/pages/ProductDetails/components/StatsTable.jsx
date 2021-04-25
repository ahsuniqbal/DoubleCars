import React from 'react';
import '../styles/StatsTable.css'
import { ChevronRight } from 'react-feather';
import {Row, Col, Card, CardBody, Label, Input, Button} from 'reactstrap'
const StatsTable = () => {
    return(
       
        <div>
            <Card className="mt-5" styles = {{borderRadius: '4px'}}>
                <CardBody>
                    <Row>
                        <Col md = "7" xs = "12">
                            <h4 className = "table-heading">More Acura MDX </h4>
                        </Col>

                        
                        <Col md="1">
                            <Label className="by-label">by</Label>
                        </Col>
                        <Col md="2">
                            <Input className = "year-dropdown" type="select">
                                <option value="year">Year</option>
                                <option value="year">2020</option>
                            </Input>
                        </Col>
                        
                    </Row>
                    <table class="table">
                        <thead>
                            <tr className = "table-borders">
                                <th className = "table-col-heading" scope="col">Year</th>
                                <th className = "table-col-heading" scope="col">Starting From</th>
                                <th className = "table-col-heading" scope="col">Available cars</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className = "table-year-label">2020</td>
                                <td className = "table-label">$5,000</td>
                                <td className = "table-label">22,671</td>
                            </tr>
                            <tr>
                                <td className = "table-year-label">2019</td>
                                <td className = "table-label">$5,000</td>
                                <td className = "table-label">22,671</td>
                            </tr>
                            <tr>
                                <td className = "table-year-label">2018</td>
                                <td className = "table-label">$5,000</td>
                                <td className = "table-label">22,671</td>
                            </tr>
                            <tr>
                                <td className = "table-year-label">2017</td>
                                <td className = "table-label">$5,000</td>
                                <td className = "table-label">22,671</td>
                            </tr>
                            <tr>
                                <td className = "table-year-label">2016</td>
                                <td className = "table-label">$5,000</td>
                                <td className = "table-label">22,671</td>
                            </tr>
                        </tbody>
                    </table>
                    <Col className = "text-left" md = "12" >
                        <Button className="mb-3 view-all-cars-stats-button" id = "forward">View all 5,250 Cars<ChevronRight color="#1C67CE" size={20} className = "mr-1"/></Button>
                    </Col>

                       
                    
                </CardBody>
            </Card> 
        
       
    </div>
    
    )
}

export default StatsTable;