import React, { useState, useEffect } from 'react';
import { Container, NavLink, Row, Col, Label} from 'reactstrap';
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
import Footer from '../../../components/Footer'


import { GetProductDetails } from '../api/GetRequests';

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
    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
        GetProductDetails(match.params.id).then(doc => {
            setProductDetails(doc);
            console.log(doc.details[0].transmission);
        })
    }, []);

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

                    
                    {
                        productDetails.details ? 
                        <Information 
                            transmission={productDetails.details[0].transmission}
                            trim={productDetails.details[0].trim}
                            fuelType={productDetails.details[0].fuelType}
                            vin={productDetails.details[0].vin}
                            yearCar={productDetails.details[0].yearCar}
                            carModel={productDetails.details[0].carModel}
                            carMake={productDetails.details[0].carMake}
                            price={productDetails.details[0].price}
                            mileage={productDetails.details[0].mileage}
                            zipCode={productDetails.details[0].zipCode} /> : 
                        <Label>Please wait while we fetch the information...</Label>
                    }
                    
                    

                   <CarFeatures/>

                </Col>
                <Col md = "5">
                    {
                        productDetails.details ? 
                        <AboutSeller
                            userId={productDetails.details[0].userId} />
                        :
                        null
                    }
                    

                </Col>
            </Row>
            <Comments/>
            <Footer/>
        </Container>
    )
}

export default ProductResults;