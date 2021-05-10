import React, { useState, useEffect } from 'react';
import Header from './Header'
import Searchbar from './Searchbar';
import { Row, Col, Label, Container} from 'reactstrap';
import { AddCommaToNumber } from '../../../utils/NumberManipulation';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Skeleton from '@material-ui/lab/Skeleton';
import { GetAllBodyTypes, GetRecommendationsTrendings, GetFeaturedCars } from '../api/GetRequests';
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
import {ArticleCard1,ArticleCard2,ArticleCard4} from './ArticleCard';
import CarSection1 from './CarSection1';
import ServicesOffer from './ServicesOffer';
import PriceRange from './PriceRange';
import SellCar from './SellCar';
import LowerCar from './LowerCars';
import CarsLogo from './CarsLogo';
import OldFeaturedCars from './OldFeaturedCars';
import NewFeaturedCars from './NewFeatureCars';
import TruckSection from './TruckSection';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { useHistory } from 'react-router-dom';

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
//                 productSubtitle={data[i].mileage + " mileage · " + data[i].zipCode}
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
                    productSubtitle={AddCommaToNumber(list[i].mileage) + " mileage · " + list[i].zipCode}
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

    const [bodyTypes, setBodyTypes] = useState(null);
    const [homeData, setHomeData] = useState(null);
    const [featuredCars, setFeaturedCars] = useState(null);

    const history=useHistory()


    useEffect(() => {
        const password = prompt('To visit Double Cars, you need to enter the magic key here.');

        if(password === "easypeasy") {
            alert("Congratulations! You have unlocked the secret chamber");
        }
        else {
            alert("Panicc!!!! Intruder Spotted!!!");
            window.location.reload();
        }
    }, [])



    useEffect(() => {
       
        // calling Api function
       
        // If User is logged in the you will send id param other wise no id param will be send
        // Login not implemented yet that

        GetRecommendationsTrendings(isLogin() ? getLogin() : -1).then(doc => {
            if(doc){
                console.log("recomm",doc)
                setHomeData(doc)
            }
            
        })
        .catch(error => {
            console.log(error.message);
        });

        //Get the list of all body types
        GetAllBodyTypes().then(doc => {
            setBodyTypes(doc.bodyStyleList);
        })
        .catch(error => {
            console.log(error.message);
        });


        // Featured cars
        GetFeaturedCars().then(doc => {
            setFeaturedCars(doc);
        }).catch(error => {
            alert(error.message);
        })
    }, []);
   
    return(
        <div className = "landing-page-dc">
            <Header/>
                <Container fluid className = "home-container">
                    <Row>
                        <Col xs="2"></Col>
                        <Col xs="8" style={{padding: '0'}}> 
                            <Searchbar />
                        </Col>
                        <Col xs="2"></Col>
                    </Row>

                    {
                        featuredCars  ? 

                    <>
                      <Container>
                        <Row className='features-row'>
                            
                                <Col xs = "12" md = "8" sm = "12" className = "">
                                    <h2 className = "feature-heading">Featured Cars</h2>
                                </Col>
                            
                                <Col md = "4" xs = "12" className='col-md4-of-new-used'>
                                 {/* <TabList className = "new-used-class">
                                    <Tab tabFor="new-feature-tab" className='px-1'>New</Tab>
                                    <Tab tabFor="old-feature-tab" className='px-1'>Used</Tab> 
                                 </TabList> */}
                                </Col>
                        </Row>
                      </Container>
                        <Row>
                            <Col className='featured-main-coloumn'>
                                    <NewFeaturedCars
                                        featuredCars={featuredCars}
                                    />
                            </Col>
                        </Row> 
                        </> : 
                        <Container>
                            <Row className = "mt-5">
                                <Col md="6">
                                    <Skeleton variant="rect" width={680} height={415} animation="wave" />
                                </Col>
                                <Col md="6">
                                    <Row>
                                        <Col md = "6">
                                        <Skeleton variant="rect" width={300} height={200} animation="wave" className = "mb-3"/>
                                        <Skeleton variant="rect" width={300} height={200} animation="wave" />
                                        </Col>
                                        <Col md = "6">
                                        <Skeleton variant="rect" width={300} height={200} animation="wave" className = "mb-3"/>
                                        <Skeleton variant="rect" width={300} height={200} animation="wave" />
                                        </Col>
                                        
                                    </Row>
                                    
                                   
                                </Col>
                        </Row>
                    </Container>
                    }

                    
                   {/* recomended trending and others sections */}
                   <Container>
                    {homeData ? 
                        homeData.map((item,index)=>{
                            return(
                            <div>
                                <Row>
                                    <Col xs="12">
                                            <Row className = "">
                                                <Col md = "6" xs = "12" className = "recomended-coloumn">
                                                    <h2 className = "recommended-trending-cars-head">{item.title}</h2>
                                                </Col>
        
                                                {item.data.length>=5 ?
                                                <Col md = "6" xs = "12" className = "recomended-coloumn text-right">
                                                    <Link className = "view-all" to="/products">View All</Link>
                                                </Col>
                                                :null
                                                }
                                            </Row>                            
                                    </Col>
                                </Row>

                                <DCSlider
                                    slidesToShow = {5}
                                    items={item.data}
                                    allowBookmark={false}
                                />
                            </div>) 
                        })
                        :
                        <Container>
                        <Row className = "mt-5">
                            <Col md="2">
                                <Skeleton variant="rect" width={200} height={200} animation="wave" />
                            </Col>
                            <Col md="2">
                                <Skeleton variant="rect" width={200} height={200} animation="wave" />
                            </Col>
                            <Col md="2">
                                <Skeleton variant="rect" width={200} height={200} animation="wave" />
                            </Col>
                            <Col md="2">
                                <Skeleton variant="rect" width={200} height={200} animation="wave" />
                            </Col>
                            <Col md="2">
                                <Skeleton variant="rect" width={200} height={200} animation="wave" />
                            </Col>
                            <Col md="2">
                                <Skeleton variant="rect" width={200} height={200} animation="wave" />
                            </Col>
                            
                    </Row>
                </Container>
                    }
                    </Container>
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
                        
                        {/* <TopBudget/> */}
                        <Container>
                            {/* <PriceRange/> */}
                            <TruckSection/>
                            <ServicesOffer/>
                            
                        </Container>
                        
                     

            <div>
            </div>
            
            

            </Container>
           
            <CarSection1/>
            
            
            
            
            <SellCar/>
            <LowerCar bodyTypes={bodyTypes}/>
            <Container>
            <CarsLogo/>
            </Container>
            
            <div style={{backgroundColor:'white '}}>
                 <Row style={{margin:'0'}}>
                    <Col xs = "12" md = "12" sm = "12" className = "top-stories-main text-center">
                            <h2 className = "top-stories-heading">Top Stories</h2>
                            <Label className = "download-app-label">Download app and upload your car in few steps</Label>
                    </Col>
                </Row>
                
                <Container>
                <Row style={{margin:'0'}}>
                    <Col xs = "12" md = "3" style={{padding:'1.5rem'}} onClick={()=>history.push('/blogs')}>
                        <ArticleCard />
                    </Col>
                    <Col xs = "12" md = "3" style={{padding:'1.5rem'}} onClick={()=>history.push('/blogs')}>
                        <ArticleCard1 />
                    </Col>
                    <Col xs = "12" md = "3" style={{padding:'1.5rem'}} onClick={()=>history.push('/blogs')}>
                        <ArticleCard2 />
                    </Col>
                    <Col xs = "12" md = "3" style={{padding:'1.5rem'}} onClick={()=>history.push('/blogs')}>
                        <ArticleCard4 />
                    </Col>
                </Row>
                </Container>
                
               
            </div>
         
            
        </div>
    )
    
}

export default Home;