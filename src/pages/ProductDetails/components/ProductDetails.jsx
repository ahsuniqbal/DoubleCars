import React, { useState, useEffect } from 'react';
import { NavLink, Row, Col, Button, Container, CardBody } from 'reactstrap';
import dummyAvatar from '../../../assets/dummyAvatar.jpg';
import Gallery from './Gallery';
import Information from './Information';
import AboutSeller from './AboutSeller';
import { GetProductDetails } from '../api/GetRequests';
import '../styles/ProductDetails.css';
import { Skeleton } from '@material-ui/lab';
import { ChevronLeft } from 'react-feather';
import { useHistory } from 'react-router-dom';
import DCSlider from '../../../components/DcSlider/components/DCSlider';
import { Link } from 'react-router-dom';
import { isLogin, getLogin } from '../../../config/LoginAuth';
import { GetRecommendationsTrendings, getSimilarCars } from '../api/GetRequests';
import { Share2 } from 'react-feather';
import UsersSlider from '../../../components/DcSlider/components/UsersSlider';
import StatsTable from './StatsTable';

const ProductResults = ({match}) => {
    const [productDetails, setProductDetails] = useState(null);
    const [homeData, setHomeData] = useState(null);
    const [similarCars,setSimilarCars] = useState([]);

    const history = useHistory();

    useEffect(() => {
        GetProductDetails(match.params.id).then(doc => {
            setProductDetails(doc);
            getSimilarCars(doc.details[0].carMake)
            .then(doc => {
                setSimilarCars(doc)
            })
            .catch(e => {
                console.log(e.message)
            })
        })
        .catch(error => {
            console.log(error.message);
        });



        GetRecommendationsTrendings(isLogin() ? getLogin() : -1).then(doc => {
            setHomeData(doc) 
        })
        .catch(error => {
            console.log(error.message);
            
        });
    }, []);


    const DrawGallery = (images, coverPic, noOfSaves) => {
        var desc;
        // if(noOfSaves === 0) {
        //     desc = null;
        // }
        // else {
        //     desc = noOfSaves + " person have saved this car";
        // }
        const galleryImages = [{
            original: coverPic,
            thumbnail: coverPic,
            description: desc
        }];
        for(let i = 0; i < images.length; i++){
            var tempObj = {
                original: images[i].image,
                thumbnail: images[i].image,
                description: desc
            };
            galleryImages.push(tempObj);
        }
        return(galleryImages);
    }


    return(
        //Product Detail starts here.
        <body className = "product-detail-body">
            <Container >
                <CardBody className = "product-detail-cardbody">
                    <Row className='product-detailed-first-row'>
                        <Col className = "text-left" md = "6" >
                            <Button onClick={() => history.push("/products")} className="back-button-product mb-3" id = "back"><ChevronLeft color="#1C67CE" size={20} className = "mr-1"/>Back to search results</Button>
                        </Col>
                        <Col md = "6" >
                            <div className='d-flex float-right'>
                                <NavLink className="share-button"><Share2 color="#1C67CE" size={20} className = "mr-1"/>Share</NavLink>
                                <NavLink className="report-button">Report this car</NavLink>
                            </div>
                            
                        </Col>
                    </Row>
                    {
                        productDetails ?
                        <Row >
                            <Col md = "12">
                                {
                                    productDetails.images > 0 ?
                                        productDetails.images[0].image !== "" ? 
                                        <Gallery items={DrawGallery(productDetails.images, productDetails.details[0].coverPic, productDetails.details[0].saves)} productId={productDetails.details[0].productId} />
                                        : <Gallery items={[{original: dummyAvatar, thumbnail: dummyAvatar}]} productId={productDetails.details[0].productId} />
                                    : productDetails.details[0].coverPic ? <Gallery items={DrawGallery(productDetails.images, productDetails.details[0].coverPic, productDetails.details[0].saves)} productId={productDetails.details[0].productId} /> :
                                    <Gallery items={[{original: dummyAvatar, thumbnail: dummyAvatar}]} productId={productDetails.details[0].productId} />
                                }

                                
                               

                            </Col>
                            <Col md = "8">
                           
                                <Information
                                    details={productDetails.details[0]}
                                    attributes={productDetails.attributes}
                                />
                                
                            </Col>

                            <Col md = "4">
                                <AboutSeller
                                    userId={productDetails.details[0].userId}
                                    details={productDetails.details[0]}
                                />
                                <StatsTable/>
                            </Col>
                            
                            {/* <Col md = "4">
                                
                            </Col> */}
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
                                <Row>
                                    <Col md = "12">
                                    <Skeleton variant="rect" width={390} height={270} animation="wave" className = "mb-3"/>
                                    </Col>
                                </Row>
                               
                                <Row>
                                    <Col md = "2">
                                        <Skeleton variant="rect" width={55} height={55} animation="wave" className = "seller-image-skeloton"/>
                                    </Col>
                                    <Col md = "8">
                                    <Skeleton variant="rect" width={260} height={20} animation="wave" className = "mb-2" className = "seller-default-skeloton" />
                                    <Skeleton variant="rect" width={200} height={20} animation="wave" className = "seller-default-skeloton"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md = "12">
                                    <Skeleton variant="rect" width={260} height={10} animation="wave" className = "mb-2" className = "seller-default-skeloton" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md = "12">
                                    <Skeleton variant="rect" width={260} height={10} animation="wave" className = "mb-2" className = "seller-default-skeloton" />
                                    </Col>
                                </Row>
                                
                                {/* <Skeleton variant="text" animation="wave" />
                                <Skeleton variant="text" animation="wave" />
                                <Skeleton variant="text" animation="wave" />
                                <Skeleton variant="text" animation="wave" />
                                <Skeleton variant="text" animation="wave" /> */}
                            </Col>
                        </Row>
                    }
                   
                        
                            <Row>
                                <Col md = "6" xs = "12">
                                    <h2 className = "dealer-head">Top Acura MDX dealers</h2>
                                </Col>
                            </Row>

                            <UsersSlider
                             slidesToShow={4}
                             items={similarCars}
                           
                            />
                           
                       
                       
                     {
                        similarCars.length > 0 ? 
                        <>
                            <Row>
                                <Col md = "6" xs = "12">
                                    <h2 className = "similar-cars-head">Similar cars</h2>
                                </Col>

                                <Col md = "6" xs = "12" className = "text-right">
                                    <Link className = "view-all" to="/products">View All</Link>
                                </Col>
                            </Row>

                            <DCSlider
                                slidesToShow={4}
                                items={similarCars}
                                allowBookmark={false}
                            />
                            
                        </>
                        
                        : null
                    }
                    {/* <Row>
                         <Col md = "6" xs = "12">
                             <h2 className = "similar-cars-head">Similar cars</h2>
                         </Col>

                         <Col md = "6" xs = "12" className = "text-right">
                             <Link className = "view-all" to="/products">View All</Link>
                         </Col>
                     </Row>

                     <DCSlider
                         slidesToShow={4}
                     /> */}
                  
                </CardBody>
            </Container>
        </body>
    )
}

export default ProductResults;