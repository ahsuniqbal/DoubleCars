import React, { useState, useEffect } from 'react';
import Header from './Header'
import PopularMake from './PopularMake'
import TrendingBodyTypes from './TrendingBodyTypes'
import BuyNow from './BuyNow';
import Searchbar from './Searchbar';
import { Row, Col, CardBody, Container } from 'reactstrap';
import { AddCommaToNumber } from '../../../utils/NumberManipulation';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Skeleton from '@material-ui/lab/Skeleton';
import { GetAllBodyTypes, GetRecommendationsTrendings } from '../api/GetRequests';
import { isLogin, getLogin } from '../../../config/LoginAuth'
import ProductCard from '../../../components//ProductCard/components/ProductCard';
import '../styles/Home.css'
import '../styles/RecommendedCar.css';
import '../styles/TrendingCar.css';
import '../styles/TrendingBodyTypes.css';
import DCSlider from '../../../components/DcSlider'


// function DrawProductCards(data){
//     var table = [];
//     for(let i = 0; i < data.length; i++){
//         table.push(
//             <ProductCard 
//                 key={i}
//                 productId={data[i].productId}
//                 productImg={data[i].coverPic}
//                 productName={data[i].name}
//                 productTitle={data[i].name}
//                 productSubtitle={data[i].mileage + " miles · " + data[i].zipCode}
//                 productText = {"$" + data[i].price}
//             />
            
//         );
//     }
//     return table;
// }



const DrawSkeleton = () => {
    var table = [];
    for(let i = 0; i < 4; i++){
        table.push(
            <Carousel.Item>
                <Row>
                    {
                        DrawSkeletonCols(i)
                    }
                </Row>
            </Carousel.Item>
        );
        i+=3;
    }
    return table;
}


const DrawSkeletonCols = (index) => {
    var table = [];
    for(let i = index; i < index + 4; i++){
        table.push(
            <Col key={i} xs="12" sm="6" lg="3">
                <Skeleton variant="rect" width={298} height={178} animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Row>
                    <Col xs="3">
                        <Skeleton variant="text" width={50} height={50} animation="wave" />
                    </Col>
                    <Col xs="9" className="mt-2">
                        <Skeleton variant="text" animation="wave" />
                    </Col>
                </Row>
            </Col>
        );
    }
    return table;
}

const DrawCarouselCols = (list, index) => {
    var table = [];
    for(let i = index; i < index + 4; i++){
        if(i > list.length - 1){
            return table;
        }
        table.push(
            <Col xs="12" sm="4" lg="3">
                {
                    list[i].productId ? <ProductCard 
                    key={i}
                    productId={list[i].productId}
                    productImg={list[i].coverPic}
                    productName={list[i].name}
                    productTitle={list[i].name}
                    productSubtitle={AddCommaToNumber(list[i].mileage) + " miles · " + list[i].zipCode}
                    productText={"$" + AddCommaToNumber(list[i].price)}
                />
                 : null
                }
                
            </Col>
        );
    }
    return table;
}

const DrawCarousel = (list) => {
    var table = [];
    for(let i = 0; i < list.length; i++){
        table.push(
            <Carousel.Item>
                <Row>
                {
                    DrawCarouselCols(list, i)
                }
                </Row>
            </Carousel.Item>
        );
        i+=3;
    }
    return table;
}




const Home = () => {
    const [recommendations, setRecommendations] = useState(null);
    const [trending, setTrending] = useState(null);
    const [bodyTypes, setBodyTypes] = useState(null);

    useEffect(() => {
        // If User is logged in the you will send id param other wise no id param will be send
        // Login not implemented yet that

        if(isLogin()){
            GetRecommendationsTrendings(getLogin()).then(doc => {
                
                setRecommendations(doc[0].data);
                setTrending(doc[1].data);
            })
            .catch(error => {
                alert("Error", error.message);
            });
        }
        else{
            GetRecommendationsTrendings('-1').then(doc => {
                setRecommendations(doc[0].data);
                setTrending(doc[1].data);
            });
        }

        //Get the list of all body types
        GetAllBodyTypes().then(doc => {
            setBodyTypes(doc.bodyStyleList);
        })
        .catch(error => {
            alert("Error", error.message);
        });
    }, []);
   
    return(
        <div className = "landing-page-dc">
            <Header/>
            <Container className = "foo">
            <Row>
                <Col xs="1"></Col>
                <Col xs="10">
                    <Searchbar />
                </Col>
            </Row>
            <div>
            <Row>
                <Col xs="12">
                    <CardBody className = "recommended-cars">
                        <Row className = "">
                            <Col md = "6" xs = "12">
                                <h2 className = "recommended-cars-head">Recommneded Cars</h2>
                            </Col>

                            <Col md = "6" xs = "12" className = "text-right">
                                <Link className = "view-all" to="/products?search=">View All</Link>
                            </Col>
                        </Row>
                    
                        <Row>
                            <Col>
                                {/* <DCSlider/> */}
                                <Carousel indicators={false} >
                                {
                                    recommendations ? DrawCarousel(recommendations) : DrawSkeleton()
                                }
                                </Carousel>
                            </Col>
                        </Row>
                    </CardBody>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <CardBody className="trending-cars">
                        <Row className = "">
                            <Col md = "6" xs = "12">
                                <h2 className = "trending-cars-head">Trending in US</h2>
                            </Col>

                            <Col md = "6" xs = "12" className = "text-right">
                                <Link className = "view-all" to="/products?search=">View All</Link>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                                <Carousel indicators={false}>
                                {
                                    trending ? DrawCarousel(trending) : DrawSkeleton()
                                }
                                </Carousel>
                            </Col>
                        </Row>

                    </CardBody>
                </Col>
            </Row>
            </div>

            {/* <input onChange={e => setImage(e)} type="file" id="file-input" name="file-input" /> */}
            

            
            <div className = "trending-body-types">
            <CardBody className = "trending-body-types2">
                <Row>
                <Col md = "12" xs = "12" className = "text-center mb-5">
                       <h2 className = "trending-body-head">Trending Body Type in 2020</h2>
                   </Col>
                </Row>
                {
                    bodyTypes ? <TrendingBodyTypes bodyTypes={bodyTypes} /> : null
                }
                </CardBody>
            </div>
            <BuyNow/>
           
            <PopularMake/>
            </Container>
        </div>
    )
    
}

export default Home;