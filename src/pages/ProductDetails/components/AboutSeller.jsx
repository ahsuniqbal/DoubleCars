import React from 'react';
import { Col,  Row, Label, Card,CardBody, CardImg, Button,Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CompanyLogo from '../../../assets/company-logo.png'; 
const SellerDetails = () => {
    return(
        <div>
            <h6>Are you interested in this car?</h6>
                    <h6>Let the seller know about your interest</h6>
                    <Input type = "email" placeholder = "Your email address"></Input>
                    <Button size = "lg" block className = "contact-seller-button primary mt-4"> Contact Seller</Button>

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
                <Button size = "lg" block className = "view-inventory-button primary mt-4"> View Inventory</Button> 
            </CardBody>
        </Card>
    </div>
    )
}

export default SellerDetails;