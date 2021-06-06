import React from 'react';
import '../styles/StatsTable.css'
import { ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';
import {Row, Col, Card, CardBody, Label, Input, Button} from 'reactstrap'
import { AddCommaToNumber } from '../../../utils/NumberManipulation';


const StatsTable = (props) => {
    return(
       
        <div>
            <Card className="mt-5" styles = {{borderRadius: '4px'}}>
                <CardBody>
                    <Row>
                        <Col md = "7" xs = "12">
                            <h4 className = "table-heading">More {props.carMake} {props.carModel} </h4>
                        </Col>

                        
                        {/* <Col md="1">
                            <Label className="by-label">by</Label>
                        </Col>
                        <Col md="2">
                            <Input className = "year-dropdown" type="select">
                                <option value="year">Year</option>
                                <option value="year">2020</option>
                            </Input>
                        </Col> */}
                        
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
                            {
                                props.tableData.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className = "table-year-label">{data.yearCar}</td>
                                            <td className = "table-label">${AddCommaToNumber(data.price)}</td>
                                            <td className = "table-label">{data.availableCount ? data.availableCount : 5}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <Col className = "text-left" md = "12" >
                        <Link to={"/products/"}>
                            <Button className="mb-3 view-all-cars-stats-button" id = "forward">View all {AddCommaToNumber(props.totalCount)} Cars<ChevronRight color="#1C67CE" size={20} className = "mr-1"/></Button>
                        </Link>
                    </Col>

                       
                    
                </CardBody>
            </Card> 
        
       
    </div>
    
    )
}

export default StatsTable;