import React from 'react';
import { Col ,Row} from 'reactstrap';

import Filters from '../../../components/ProductFilters/components/Filters';
import SellerDetails from './SellerDetails'
import '../styles/DealerProfile.css'

const DealerProfile = () => {
    return(
        <div className = "container-fluid">
            <Row>
                <Col md = "3">
                    <Filters/>
                </Col>
                <Col md = "9">
                <SellerDetails/>
                </Col>
            </Row>
        </div>
    )
}

export default DealerProfile;