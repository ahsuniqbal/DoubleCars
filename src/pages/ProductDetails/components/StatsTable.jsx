import React from 'react';
import '../styles/StatsTable.css'
import { ChevronLeft } from 'react-feather';
import {Row, Col, Card, CardBody, Label, Input, Button} from 'reactstrap'
const StatsTable = () => {
    return(
       
        <div>
            <Card className="mt-5">
                <CardBody>
                    <Row>
                        <Col md = "7" xs = "12">
                            <h4>More Acura MDX </h4>
                        </Col>

                        
                        <Col md="2">
                            <Label className="float-right mt-2">by</Label>
                        </Col>
                        <Col md="2">
                            <Input type="select">
                                <option value="relevance">Year</option>
                                <option value="price">2020</option>
                            </Input>
                        </Col>
                        
                    </Row>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Year</th>
                            <th scope="col">Starting From</th>
                            <th scope="col">Available cars</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                           
                            <td>2020</td>
                            <td>$5,000</td>
                            <td>22,671</td>
                            </tr>
                            <tr>
                            
                            <td>2019</td>
                            <td>$5,000</td>
                            <td>22,671</td>
                            </tr>
                            <tr>
                        
                            <td>2018</td>
                            <td>$5,000</td>
                            <td>22,671</td>
                            </tr>
                        </tbody>
                    </table>
                    <Col className = "text-left" md = "12" >
                            <Button className="mb-3 view-all-cars-stats-button" id = "back"><ChevronLeft color="#1C67CE" size={20} className = "mr-1"/>Back to search results</Button>
                    </Col>

                       
                    
                </CardBody>
            </Card> 
        
       
    </div>
    
    )
}

export default StatsTable;