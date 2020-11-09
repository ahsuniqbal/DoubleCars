import React, { useEffect } from 'react';
import { Container, NavLink, Row, Col} from 'reactstrap';
import '../styles/ProductDetails.css'
import CompanyLogo from '../../../assets/company-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DemoCar from '../../../assets/DemoCar.png';
import Thumbnail from '../../../assets/thumbnail.png';
import Gallery from './Gallery';
import Information from './Information';
import CarFeatures from './CarFeatures';
import AboutSeller from './AboutSeller';
import Comments from './Comments';

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
                    <Gallery
                        items={images} />

                   <Information/>

                   <CarFeatures/>

                </Col>
                <Col md = "5">
                    <AboutSeller/>

                </Col>
            </Row>
            <Comments/>
        </Container>
    )
}

export default ProductResults;