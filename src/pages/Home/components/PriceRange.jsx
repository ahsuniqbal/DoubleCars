import React from 'react';
import { ListGroup, ListGroupItem,Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/PriceRange.css';
import PriceRangeCards from './PriceRangeCards'

const PriceRange = () => {
 

    return(
        <div className="PriceRange">
             <div className='row'>
                    <div >
                        <ListGroup>
                        <ListGroupItem className='price-head'>Price Range</ListGroupItem>
                        <ListGroupItem tag="a" className='Items' action>Under $1000</ListGroupItem>
                        <ListGroupItem tag="a" className='Items' action>Under $2000</ListGroupItem>
                        <ListGroupItem tag="a" className='Items' action>Under $3000</ListGroupItem>
                        <ListGroupItem tag="a" className='Items' action>Under $4000</ListGroupItem>
                        <ListGroupItem tag="a" className='Items' action>Under $5000</ListGroupItem>    
                        </ListGroup>
                    </div>
                    {/* <div className='col-lg-9 md-7 sm-12'>
                        <div className='row'>
                            <div className='col-lg-3 sm-12'>
                                <PriceRangeCards/>
                            </div>
                            <div className='col-lg-3 sm-12'>
                                <PriceRangeCards/>
                            </div>
                            <div className='col-lg-3 sm-12'>
                                <PriceRangeCards/>
                            </div>
                            <div className='col-lg-3 sm-12'>
                                <PriceRangeCards/>
                            </div>
                           
                        </div>
                    </div> */}
                </div>
             {/* <Row>
                    <Col md='3' sm='12'>
                        <ListGroup>
                        <ListGroupItem className='price-head'>Price Range</ListGroupItem>
                        <ListGroupItem tag="a" className='Items' action>Under $1000</ListGroupItem>
                        <ListGroupItem tag="a" className='Items' action>Under $2000</ListGroupItem>
                        <ListGroupItem tag="a" className='Items' action>Under $3000</ListGroupItem>
                        <ListGroupItem tag="a" className='Items' action>Under $4000</ListGroupItem>
                        <ListGroupItem tag="a" className='Items' action>Under $5000</ListGroupItem>    
                        </ListGroup>
                    </Col>
                    <Col md='9' sm='12'>
                        <Row>
                            <Col md='3' sm='12'>
                                <PriceRangeCards/>
                            </Col>
                            <Col md='3' sm='12'>
                                <PriceRangeCards/>
                            </Col>
                            <Col md='3' sm='12'>
                                <PriceRangeCards/>
                            </Col>
                            <Col md='3' sm='12'>
                                <PriceRangeCards/>
                            </Col>
                           
                        </Row>
                    </Col>
                </Row> */}
                
         
        
        </div>
    );
}

export default PriceRange;