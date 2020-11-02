import React from 'react';
import { Col, Container, Row, Label, Card,CardBody, CardImg, Button} from 'reactstrap';

import Filters from '../../../components/ProductFilters/components/Filters';
import SellerDetails from './SellerDetails'
import '../styles/DealerProfile.css'

const DealerProfile = () => {
    return(
        <Container>
            <Row>
                <Col md = "3">
                    <Filters/>
                </Col>
                <Col md = "9">
                <SellerDetails/>

                </Col>
            </Row>
        </Container>
    )
}

export default DealerProfile;