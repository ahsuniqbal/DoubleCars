import React, { useEffect } from 'react';
import { Container, NavLink, Row, Col, Input, Button, Card, CardBody, FormGroup, Label, CardImg} from 'reactstrap';
import '../styles/ProductDetails.css'
import CompanyLogo from '../../../assets/company-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DemoCar from '../../../assets/DemoCar.png';
import Thumbnail from '../../../assets/thumbnail.png';
import Gallery from './Gallery';

const images = [
    {
        original: DemoCar,
        thumbnail: Thumbnail,
        originalAlt: 'Original',
        thumbnailAlt: 'Thumbnail',
        originalTitle: 'Original Title',
        thumbnailTitle: 'Thumbnail Title',
    },
    {
        original: DemoCar,
        thumbnail: Thumbnail
    },
    {
        original: DemoCar,
        thumbnail: Thumbnail
    }
]

const ProductResults = ({match}) => {
    const productId = match.params.id;
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
                    <Gallery
                        items={images} />

                    <h4>Information</h4>
                    <Row className = "mb-5">
                        <Col xs = "6" md = "3">
                            <Label>Transmission</Label><br/>
                            <Label>Automatic</Label>
                        </Col>
                        <Col xs = "6" md = "3">
                            <Label>Trim</Label><br/>
                            <Label>V6w/Tech</Label>
                        </Col>
                        <Col xs = "6" md = "3">
                            <Label>Full Type</Label> <br/>
                            <Label>Gasoline</Label>
                        </Col>
                        <Col xs = "6" md = "3">
                            <Label>VIN</Label> <br/>
                            <Label>WDD3G4FB</Label>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs = "6" md = "3">
                            <Label>Trim</Label><br/>
                            <Label>V6w/Tech</Label>
                        </Col>
                        <Col xs = "6" md = "3">
                            <Label>Fule Type</Label><br/>
                            <Label>Gasoline</Label>
                        </Col>
                        <Col xs = "6" md = "3">
                            <Label>Full Type</Label> <br/>
                            <Label>Gasoline</Label>
                        </Col>
                        <Col xs = "6" md = "3">
                            <Label>VIN</Label> <br/>
                            <Label>WDD3G4FB</Label>
                        </Col>
                    </Row>

                    <h4 className = "mt-5">Car Features</h4>
                    <Row className = "mb-5">
                        <Col xs = "6" md = "3">
                            <Label>ABS</Label>
                        </Col>
                        <Col xs = "6" md = "3">
                            <Label>Trim</Label>
                            
                        </Col>
                        <Col xs = "6" md = "3">
                            <Label>Immobilizer Key</Label>
                        </Col>
                        <Col xs = "6" md = "3">
                            <Label>Power Mirrors</Label>
                        </Col>
                    </Row>

                </Col>
                <Col md = "5">
                    <h6>Are you interested in this car?</h6>
                    <h6>Let the seller know about your interest</h6>
                    <Input type = "email" placeholder = "Your email address"></Input>
                    <Button size = "lg" block className = "contact-seller-button secondary mt-4"> Contact Seller</Button>

            <Card className="mt-4">
            <CardBody>
                <Row>
                    <Col xs="3">
                        <CardImg src={CompanyLogo} alt="Company logo"/>
                    </Col>
                    <Col xs = "9">
                        <Label>One chance auto</Label> <br/>
                        <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                        <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                        <FontAwesomeIcon icon={["fas", "star"]} color="#FFBB54" size="1x" className="mr-2" />
                        <FontAwesomeIcon icon={["fas", "star"]} color="#DBDBDB" size="1x" className="mr-2" />
                        <Label style= {{color: "#FFC061"}}>4.2</Label>
                    </Col>
                </Row>
                
                <hr/>
                <h6>About seller</h6>
                <p className = "text-secondary">Contrary to popular belief, Lorem Ipsum is not slimi random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock.</p>
                <h6>Contact Details</h6>
                <p className = ""><i className="fa fa-envelope "></i>+1 2345 78974</p>
                <p className = ""> <i className="fa fa-phone "></i>hellochance@gmail.com</p>
                <Button size = "lg" block className = "view-inventory-button secondary mt-4"> View Inventory</Button> 
            </CardBody>
        </Card>

                </Col>
            </Row>
        </Container>
    )
}

export default ProductResults;