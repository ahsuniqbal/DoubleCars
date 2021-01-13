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
import ArticleCard from './ArticleCard'
import {ArticleCard1,ArticleCard2,ArticleCard3} from './ArticleCard';
import FeaturedCars from './FeaturedCars';
import CarSection1 from './CarSection1';
import ServicesOffer from './ServicesOffer';
import PriceRange from './PriceRange';
import SellCar from './SellCar';
import LowerCar from './LowerCars';
import CarsLogo from './CarsLogo';
import OldFeaturedCars from './OldFeaturedCars';
import NewFeaturedCars from './NewFeatureCars';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { ActionSwapVerticalCircle } from 'material-ui/svg-icons';

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
    const [recommendationName, setRecommendationName] = useState('');
    const [trendingName, setTrendingName] = useState('');
    const [recommendations, setRecommendations] = useState(null);
    const [trending, setTrending] = useState(null);
     const [bodyTypes, setBodyTypes] = useState(null);
     const [homeData, setHomeData] = useState(null);
    // const ApiCall=async()=>{
    //     await axios
    //     .get('https://magnetic-flare-280505.uc.r.appspot.com/home/part-two?id=1')
    //     .then((data) => {
    //         const recomendedData=data.data.results[0].data
    //         const trendingData=data.data.results[1].data
    //         console.log('data',recomendedData)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // }
    useEffect(() => {
        // calling Api function
       
        // If User is logged in the you will send id param other wise no id param will be send
        // Login not implemented yet that
        
      

        GetRecommendationsTrendings(isLogin() ? getLogin() : -1).then(doc => {
            setHomeData(doc)
            console.log(homeData)  
        })
        .catch(error => {
            alert(error.message);
        });

        //Get the list of all body types
        GetAllBodyTypes().then(doc => {
            console.log('bodytye api***',doc)
            setBodyTypes(doc.bodyStyleList);
        })
        .catch(error => {
            alert(error.message);
        });
    }, []);
   
    return(
        <div className = "landing-page-dc">
            <Header/>
                <Container fluid = {true} className = "home-container">
                    <Row>
                        <Col xs="2"></Col>
                        <Col xs="10">
                            <Searchbar />
                        </Col>
                    </Row>
                    <Tabs defaultTab="feature-tab">
                        <Row className='features-row'>
                            
                                <Col xs = "12" md = "8" sm = "12" className = "">
                                    <h2 className = "feature-heading">Featured Cars</h2>
                                </Col>
                            
                                <Col md = "4" xs = "12" >
                                 <TabList className = "new-used-class">
                                    <Tab tabFor="new-feature-tab" className='px-1'><Link className = "new-used-tab" to="">New</Link></Tab>
                                    <Tab tabFor="old-feature-tab" className='px-1'><Link className = "new-used-tab" to="">Used</Link></Tab> 
                                 </TabList>
                                </Col>
                           

                        </Row>
                        <Row>
                            <Col>
                                <TabPanel tabId="feature-tab">
                                    <FeaturedCars/>
                                </TabPanel>
                                <TabPanel tabId="new-feature-tab">
                                    <NewFeaturedCars/>
                                </TabPanel>
                                <TabPanel tabId="old-feature-tab">
                                    <OldFeaturedCars/>
                                </TabPanel>

                            </Col>
                        </Row>
                    </Tabs>
                   {/* recomended trending and others sections */}
                    {homeData ? 
                        homeData.map((item,index)=>{
                            return(
                            <div>
                                <Row>
                                    <Col xs="12">
                                            <Row className = "">
                                                <Col md = "6" xs = "12" className = "recomended-coloumn">
                                                    <h2 className = "recommended-cars-head">{item.title}</h2>
                                                </Col>
        
                                                <Col md = "6" xs = "12" className = "recomended-coloumn text-right">
                                                    <Link className = "view-all" to="/products">View All</Link>
                                                </Col>
                                            </Row>                            
                                    </Col>
                                </Row>

                                <DCSlider
                                slidesToShow = {5}
                                items={item.data}/>
                            </div>) 
                        })
                        :null
                    }
                        {/* <Container>
                        <Row>
                            <Col xs="12">
                                
                                    <Row className = "">
                                        <Col md = "6" xs = "12" className = "recomended-coloumn">
                                            <h2 className = "recommended-cars-head">Recommneded Cars</h2>
                                        </Col>

                                        <Col md = "6" xs = "12" className = "recomended-coloumn text-right">
                                            <Link className = "view-all" to="/products">View All</Link>
                                        </Col>
                                    </Row>                            
                                
                            </Col>
                        </Row>
                        {
                            recommendations ? 
                            <DCSlider
                                slidesToShow = {5}
                                items={recommendations}
                            /> : null
                        }

                        </Container> */}
                        
                        <TopBudget/>
                        <PriceRange/>
                        <ServicesOffer/>

            <div>
               
                
               
            </div>
            
            

            </Container>

            <CarSection1/>
            <SellCar/>
            <LowerCar bodyTypes={bodyTypes}/>
            <CarsLogo/>
            <div style={{backgroundColor:'white '}}>
                 <Row style={{margin:'0'}}>
                    <Col xs = "12" md = "12" sm = "12" className = "top-stories-main text-center">
                            <h2 className = "top-stories-heading">Top Stories</h2>
                            <Label className = "download-app-label">Download app and upload your car in few steps</Label>
                    </Col>
                </Row>
                <Row style={{margin:'0'}}>
                    <Col xs = "12" md = "3">
                        <ArticleCard/>
                    </Col>
                    <Col xs = "12" md = "3">
                        <ArticleCard1/>
                    </Col>
                    <Col xs = "12" md = "3">
                        <ArticleCard2/>
                    </Col>
                    <Col xs = "12" md = "3">
                        <ArticleCard3/>
                    </Col>
                </Row>
               
            </div>
         
            
        </div>
    )
    
}

export default Home;