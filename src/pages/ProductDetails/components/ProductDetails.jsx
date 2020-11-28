import React, { useState, useEffect } from 'react';
import { NavLink, Row, Col, Button, Container, CardBody } from 'reactstrap';
import Gallery from './Gallery';
import Information from './Information';
import AboutSeller from './AboutSeller';
import Comments from './Comments';
import { GetProductDetails } from '../api/GetRequests';
import '../styles/ProductDetails.css';
import { Skeleton } from '@material-ui/lab';
import { ChevronLeft } from 'react-feather';
import { useHistory } from 'react-router-dom';


const ProductResults = ({match}) => {
    const [productDetails, setProductDetails] = useState(null);
    const history = useHistory();

    useEffect(() => {
        setTimeout(async() => {
            GetProductDetails(match.params.id).then(doc => {
                setProductDetails(doc);
            })
            .catch(error => {
                alert("Error", error.message);
            });
        }, 5000)

    }, []);


    const DrawGallery = (images, coverPic) => {
        const galleryImages = [{
            original: coverPic,
            thumbnail: coverPic,
            description: "1 person have saved this car"
        }];
        for(let i = 0; i < images.length; i++){
            var tempObj = {
                original: images[i].image,
                thumbnail: images[i].image,
                description: "1 person have saved this car"
            };
            galleryImages.push(tempObj);
        }
        return(galleryImages);
    }


    return(
        //Product Detail starts here.
        <body className = "product-detail-body">
            <Container>
                <CardBody className = "product-detail-cardbody">
                    <Row>
                        <Col className = "text-left" md = "6" >
                            <Button onClick={() => history.push("/products?search=")} className="back-button-product mb-3" id = "back"><ChevronLeft color="#1C67CE" size={20} className = "mr-1"/>Back to search results</Button>
                        </Col>
                        <Col md = "6" >
                            <NavLink className="float-right report-button">Report this car</NavLink>
                        </Col>
                    </Row>
                    {
                        productDetails ?
                        <Row>
                            <Col md = "8">
                                <Gallery
                                    items={DrawGallery(productDetails.images, productDetails.details[0].coverPic)}
                                />
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
                                    zipCode={productDetails.details[0].zipCode}
                                    exteriorColor={productDetails.details[0].exteriorColor}
                                    interiorColor={productDetails.details[0].interiorColor}
                                    engine={productDetails.details[0].engine}
                                    conditionCar={productDetails.details[0].conditionCar}
                                    gasMileage={productDetails.details[0].gasMileage}
                                    bodyStyle={productDetails.details[0].bodyStyle}
                                    type={productDetails.details[0].type}
                                    interior={productDetails.details[0].interior}
                                    exterior={productDetails.details[0].exterior}
                                    security={productDetails.details[0].security}
                                    others={productDetails.details[0].others}
                                />

                            </Col>
                            <Col md = "4">
                                <AboutSeller
                                    userId={productDetails.details[0].userId}
                                />
                            </Col>
                        </Row> :
                        <Row>
                            <Col md="8">
                                <Skeleton variant="rect" width={800} height={378} animation="wave" />
                                <Skeleton variant="text" height={80} animation="wave" />
                                <Skeleton variant="text" animation="wave" />
                                <Skeleton variant="text" animation="wave" />
                                <Skeleton variant="text" animation="wave" />
                                <Skeleton variant="text" animation="wave" />
                                <Skeleton variant="text" animation="wave" />
                                <Skeleton variant="text" animation="wave" />
                            </Col>
                            <Col md="4">
                                <Skeleton variant="rect" width={390} height={378} animation="wave" />
                                <Skeleton variant="text" animation="wave" />
                                <Skeleton variant="text" animation="wave" />
                                <Skeleton variant="text" animation="wave" />
                                <Skeleton variant="text" animation="wave" />
                                <Skeleton variant="text" animation="wave" />
                                <Skeleton variant="text" animation="wave" />
                            </Col>
                        </Row>
                    }
                    <Row>
                        <Col xs = "8" md = "8">
                            <Comments/>
                        </Col>
                    </Row>
                </CardBody>
            </Container>
        </body>
    )
}

export default ProductResults;