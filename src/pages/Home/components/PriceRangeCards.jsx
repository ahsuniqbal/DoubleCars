
import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row,Col
  } from 'reactstrap';
  import img from '../../../assets/FeaturedDemo2.png'
  import '../styles/PriceRange.css'
const PriceRangeCards = () => { 
    return(
           <Row >
                {/* <Col md = "12" sm='6' xs = "12">
                    <Row> */}
                        <Col md = "3" sm='' xs = "12" className='row-class'>
                        <Card>
                            <CardImg top width="100%" src={img} alt="Card image cap" />
                            <CardBody>
                            <CardTitle className='head'>2019 Mercedes Benz Hybrid</CardTitle>
                            <CardSubtitle className="sub-head mb-2">19,850 mileage - california</CardSubtitle>
                            <CardText className='price'>$32,500</CardText>
                            </CardBody>
                         </Card>
                        </Col>
                        <Col md = "3" xs = "12" className='row-class'>
                        <Card>
                            <CardImg top width="100%" src={img} alt="Card image cap" />
                            <CardBody>
                            <CardTitle className='head'>2019 Mercedes Benz Hybrid</CardTitle>
                            <CardSubtitle className="sub-head mb-2">19,850 mileage - california</CardSubtitle>
                            <CardText className='price'>$32,500</CardText>
                            </CardBody>
                         </Card>
                        </Col>
                        <Col md = "3" xs = "12" className='row-class'>
                        <Card>
                            <CardImg top width="100%" src={img} alt="Card image cap" />
                            <CardBody>
                            <CardTitle className='head'>2019 Mercedes Benz Hybrid</CardTitle>
                            <CardSubtitle className="sub-head mb-2">19,850 mileage - california</CardSubtitle>
                            <CardText className='price'>$32,500</CardText>
                            </CardBody>
                         </Card>
                        </Col>
                        <Col md = "3" xs = "12" className='row-class'>
                        <Card>
                            <CardImg top width="100%" src={img} alt="Card image cap" />
                            <CardBody>
                            <CardTitle className='head'>2019 Mercedes Benz Hybrid</CardTitle>
                            <CardSubtitle className="sub-head mb-2">19,850 mileage - california</CardSubtitle>
                            <CardText className='price'>$32,500</CardText>
                            </CardBody>
                         </Card>
                        </Col>
                    {/* </Row>
                </Col> */}
           </Row> 
    )
  
}

export default PriceRangeCards;