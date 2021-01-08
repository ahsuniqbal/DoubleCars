import React, { useState, useEffect } from 'react';
import Header from './Header'
import PopularMake from './PopularMake'
import TrendingBodyTypes from './TrendingBodyTypes'
import Searchbar from './Searchbar';
import { Row, Col, Label, Container, CardBody} from 'reactstrap';
import { AddCommaToNumber } from '../../../utils/NumberManipulation';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Skeleton from '@material-ui/lab/Skeleton';
import { GetAllBodyTypes, GetRecommendationsTrendings } from '../api/GetRequests';
import { isLogin, getLogin } from '../../../config/LoginAuth'
import ProductCard from '../../../components//ProductCard/components/ProductCard';
import '../styles/Home.css'
import '../styles/TopStories.css'
import '../styles/RecommendedCar.css';
import '../styles/TrendingCar.css';
import '../styles/TrendingBodyTypes.css';
import DCSlider from '../../../components/DcSlider'
import TopBudget from './TopBudget'
import ArticleCard from './ArticleCard';
import FeaturedCars from './FeaturedCars';
import CarSection1 from './CarSection1';
import ServicesOffer from './ServicesOffer';
import PriceRange from './PriceRange';
import PriceRangeCards from './PriceRangeCards'
import SellCar from './SellCar';
import LowerCar from './LowerCars';
import CarsLogo from './CarsLogo';

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
    // const [bodyTypes, setBodyTypes] = useState(null);

    useEffect(() => {
        // If User is logged in the you will send id param other wise no id param will be send
        // Login not implemented yet that

        
        GetRecommendationsTrendings(isLogin() ? getLogin() : -1).then(doc => {
            setRecommendations(doc[0].data);
            setTrending(doc[1].data);
        })
        .catch(error => {
            alert(error.message);
        });

        //Get the list of all body types
        // GetAllBodyTypes().then(doc => {
        //     setBodyTypes(doc.bodyStyleList);
        // })
        // .catch(error => {
        //     alert(error.message);
        // });
    }, []);
   
    return(
        <div className = "landing-page-dc">
            <Header/>
                <Container fluid = {true} className = "home-container">
                    <Row>
                        <Col xs="1"></Col>
                        <Col xs="10">
                            <Searchbar />
                        </Col>
                    </Row>
                    <Row className='features-row'>
                        <Col xs = "12" md = "8" sm = "12" className = "">
                            <h2 className = "">Featured Cars</h2>
                        </Col>
                        <Col md = "4" xs = "12" className = " text-right">
                            <Link className = "mr-3" to="">All</Link>
                            <Link className = "mr-3" to="">New</Link>
                            <Link className = "" to="">Used</Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col><FeaturedCars/></Col>
                    </Row>
                    
                   
                        <Row>
                            <Col xs="12">
                                {/*      */}
                                    <Row className = "">
                                        <Col md = "6" xs = "12" className = "recomended-coloumn">
                                            <h2 className = "recommended-cars-head">Recommneded Cars</h2>
                                        </Col>

                                        <Col md = "6" xs = "12" className = "recomended-coloumn text-right">
                                            <Link className = "view-all" to="/products">View All</Link>
                                        </Col>
                                    </Row>                            
                                {/* </CardBody> */}
                            </Col>
                        </Row>
                        {
                            recommendations ? 
                            <DCSlider
                                slidesToShow = {5}
                                items={recommendations}
                            /> : null
                        }

                        <Row>
                            <Col xs="12">
                                {/* <CardBody className="trending-cars"> */}
                                    <Row className = "">
                                        <Col md = "6" xs = "12" className='trending-coloumn'>
                                            <h2 className = "trending-cars-head">Trending in US</h2>
                                        </Col>

                                        <Col md = "6" xs = "12" className = "trending-coloumn text-right">
                                            <Link className = "view-all" to="/products">View All</Link>
                                        </Col>
                                    </Row>
                                {/* </CardBody> */}
                            </Col>
                        </Row>
                        {
                            trending ? 
                            <DCSlider
                                slidesToShow = {5}
                                items={trending}
                            /> : null
                        }
                        
                       
                        {/* <input onChange={e => setImage(e)} type="file" id="file-input" name="file-input" /> */}
                        

                        
                        {/* <div className = "trending-body-types">
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
                        </div> */}
                    
                        <TopBudget/>
                        <Row style={{backgroundColor:'#FAFAFA'}}>
                            <Col lg='3' md='4' sm='12'>
                                <PriceRange/>
                            </Col>
                            <Col lg='9' md='8' sm='12'>
                                <PriceRangeCards/>
                            </Col>
                        </Row>
                        <Row>
                            <ServicesOffer/>
                        </Row>

                        
                       
                    
                    
{/*             
            <Row>
                <Col xs = "12" md = "12" sm = "12" className = "text-center">
                    <h2 className = "popular-heading">Popular Make</h2>
                    <Label className = "download-app-label">Download app and upload your car in few steps</Label>
                </Col>
            </Row>
            <Label>In progress</Label>
            <Row> */}
            <div>
               
                
               
            </div>
            
            

            </Container>

            <CarSection1/>
            <SellCar/>
            <LowerCar/>
            <CarsLogo/>
            <div style={{backgroundColor:'white '}}>
                 <Row>
                    <Col xs = "12" md = "12" sm = "12" className = "top-stories-main text-center">
                            <h2 className = "top-stories-heading">Top Stories</h2>
                            <Label className = "download-app-label">Download app and upload your car in few steps</Label>
                    </Col>
                </Row>
                <Row>
                    <Col xs = "12" md = "3">
                        <ArticleCard/>
                    </Col>
                    <Col xs = "12" md = "3">
                        <ArticleCard/>
                    </Col>
                    <Col xs = "12" md = "3">
                        <ArticleCard/>
                    </Col>
                    <Col xs = "12" md = "3">
                        <ArticleCard/>
                    </Col>
                </Row>
               
            </div>
         
            
        </div>
    )
    
}

export default Home;