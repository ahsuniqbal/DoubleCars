import React from 'react';
import { Container, NavLink, Row, Col, Input, Button, Card, CardBody, FormGroup, Label, CardImg} from 'reactstrap';
import '../styles/ProductResults.css'
import CompanyLogo from '../../../assets/company-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductResults = () => {
    return(
        <Container>
            <Row>
                <Col className = "" md = "6" >
                    <NavLink className="back-button" to="/products">Back to search results</NavLink>                
                </Col>
                <Col className = "" md = "6" >
                    <NavLink className="float-right report-button" to="/products">Report this car</NavLink>                
                </Col>
            </Row>

            <Row>
                <Col md = "7">
                    <h3>Image gallery here</h3>
                </Col>
                <Col md = "5">
                    <h6>Are you interested in this car?</h6>
                    <h6>Let the seller know about your interest</h6>
                    <Input type = "email" placeholder = "Your email address"></Input>
                    <Button size = "lg" block className = "contact-seller-button secondary mt-4"> Contact Seller</Button>

            <Card className="filters">
            <CardBody>
                <Row>
                    <Col xs="3">
                        <CardImg src={CompanyLogo} alt="Company logo"/>
                    </Col>
                </Row>
                
                <hr/>
                <h6>About seller</h6>
                <p>Contrary to popular belief, Lorem Ipsum is not slimi random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock.</p>
                <h6>Contact Details</h6>
                <p className = ""><i className="fa fa-envelope "></i>+1 2345 78974</p>
                <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                <p className = ""> <i className="fa fa-phone "></i>hellochance@gmail.com</p>

                
                
               
                
               
                

               

                

                
            </CardBody>
        </Card>



                    


                </Col>
            </Row>
        </Container>
    )
}

export default ProductResults;