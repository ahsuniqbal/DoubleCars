import React from 'react';
import { Col, Container, Row, Label, Card,CardBody, CardImg, Button} from 'reactstrap';
import CompanyLogo from '../../../assets/company-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Filters from '../../../components/ProductFilters/components/Filters';
import '../styles/DealerProfile.css'

const DealerProfile = () => {
    return(
        <Container>
            <Row>
                <Col md = "3">
                    <Filters/>
                </Col>
                <Col md = "9">
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

export default DealerProfile;