import React from 'react';
import { Row, Col, Label} from 'reactstrap';
import UpperSection from './UpperSection'
import '../../styles/BlogsHome.css'
import Container from 'reactstrap/lib/Container';
import UpcomingCars from './UpcomingCars';
import TopNews from './TopNews'
import MostPopularCard from './MostPopularCard';
import ArticleCard from '../../../Home/components/ArticleCard';
import {ArticleCard1,ArticleCard2,ArticleCard3,ArticleCard4,ArticleCard5} from '../../../Home/components/ArticleCard';
import {MostPopularCard1,MostPopularCard2,MostPopularCard3} from './MostPopularCard';
import LowerSection from './LowerSection';
import AdImage from '../../../../assets/StaticBlogAd.png'
import SubsribeCard from './SubscribeCard'
import LatestArticlesCard from '../BlogsHome/LatestArticlesCard'
import {LatestArticlesCard2, LatestArticlesCard3 ,LatestArticlesCard4, LatestArticlesCard5, LatestArticlesCard6 , LatestArticlesCard7, LatestArticlesCard8, LatestArticlesCard9 } from './LatestArticlesCard';
import {useHistory} from 'react-router-dom';

const BlogsHome = () => {

    const history = useHistory()
    return(
        <body className = "blogs-home-body">
                            

            <Container fluid = {false} className='blog-home-container'>
                
                <UpperSection/>
                <Row>
                    <Col xs = "12" md = "9">
                        <Label className = "top-news-heading">Top News</Label>
                        <TopNews/>
                        <img className = "img-fluid" src = {AdImage} alt = "ad" style = {{marginLeft: '3rem'}}/>
                        <h1 className = "article-heading">Latest Articles</h1>
                        <Row>
                            <Col  md = "4" sm = "12" className='decrease-margin-between-cards' onClick={()=>history.push('/blogs')}>
                                <ArticleCard/>
                            </Col>
                            <Col  md = "4" sm = "12" className='decrease-margin-between-cards' onClick={()=>history.push('/blogs')}>
                                <ArticleCard1/>
                            </Col>
                            <Col  md = "4" sm = "12" className='decrease-margin-between-cards' onClick={()=>history.push('/blogs')}>
                                <ArticleCard2/>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col md = "4" sm = "12" className='decrease-margin-between-cards' onClick={()=>history.push('/blogs')}>
                                <ArticleCard3/>
                            </Col>
                            <Col  md = "4" sm = "12" className='decrease-margin-between-cards' onClick={()=>history.push('/blogs')}>
                                <ArticleCard4/>
                            </Col>
                            <Col  md = "4" sm = "12" className='decrease-margin-between-cards' onClick={()=>history.push('/blogs')}>
                                <ArticleCard5/>
                            </Col>
                        </Row>
                       
                        <LowerSection/>
                        <Row className='new-cars'>
                            <Col md = "4" sm = "12" onClick={()=>history.push('/blogs')}>
                                <LatestArticlesCard7 />
                            </Col>
                            <Col md = "4" sm = "12" onClick={()=>history.push('/blogs')}>
                                <LatestArticlesCard8/>
                            </Col>
                            <Col md = "4" sm = "12" onClick={()=>history.push('/blogs')}>
                                <LatestArticlesCard9/>
                            </Col>
                            
                        </Row>

                    </Col>
                    <Col xs = "12" md = "3">
                        <Label className = "upcoming-cars-heading">Upcoming Car</Label>
                        <UpcomingCars/>
                        <h2 className = "most-popular-heading">Most Popular</h2>
                        <MostPopularCard/>
                        <MostPopularCard1/>
                        <MostPopularCard2/>
                        <MostPopularCard3/>
                        <SubsribeCard/>
               
                    </Col>
                </Row> 

            </Container>
        </body>
        
       

         
   
    )
}

export default BlogsHome;