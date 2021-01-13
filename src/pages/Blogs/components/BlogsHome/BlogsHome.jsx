import React from 'react';
import { Row, Col } from 'reactstrap';
import UpperSection from './UpperSection'
import '../../styles/BlogsHome.css'
import Container from 'reactstrap/lib/Container';
import UpcomingCars from './UpcomingCars';
import TopNews from './TopNews'
import MostPopularCard from './MostPopularCard';
import ArticleCard from '../../../Home/components/ArticleCard';
import LowerSection from './LowerSection';
import AdImage from '../../../../assets/StaticBlogAd.png'
import SubsribeCard from './SubscribeCard'
import Footer from '../../../../components/Footer/components/Footer'
const BlogsHome = () => {
    return(
        <body className = "blogs-home-body">
                            

            <Container fluid = {false}>
                <UpperSection/>
                <Row>
                    <Col xs = "12" md = "9">
                        <h1 className = "top-news-heading">Top News</h1>
                        <TopNews/>
                        <img className = "img-fluid" src = {AdImage} alt = "ad"/>
                        <h1 className = "article-heading">Latest Articles</h1>
                        <Row>
                            <Col  md = "4" sm = "12">
                                <ArticleCard/>
                            </Col>
                            <Col  md = "4" sm = "12">
                                <ArticleCard/>
                            </Col>
                            <Col  md = "4" sm = "12">
                                <ArticleCard/>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col md = "4" sm = "12">
                                <ArticleCard/>
                            </Col>
                            <Col  md = "4" sm = "12">
                                <ArticleCard/>
                            </Col>
                            <Col  md = "4" sm = "12">
                                <ArticleCard/>
                            </Col>
                        </Row>
                       
                        <LowerSection/>
                        <Row className='new-cars'>
                            <Col md = "4" sm = "12" >
                                <ArticleCard/>
                            </Col>
                            <Col md = "4" sm = "12" >
                                <ArticleCard/>
                            </Col>
                            <Col md = "4" sm = "12" >
                                <ArticleCard/>
                            </Col>
                            
                        </Row>

                    </Col>
                    <Col xs = "12" md = "3">
                        <h2 className = "upcoming-cars-heading">Upcoming Cars</h2>
                        <UpcomingCars/>
                        <h2 className = "most-popular-heading">Most Popular</h2>
                        <MostPopularCard/>
                        <MostPopularCard/>
                        <MostPopularCard/>
                        <MostPopularCard/>
                        <SubsribeCard/>
               
                    </Col>
                </Row> 
            </Container>
        </body>
        
       

         
   
    )
}

export default BlogsHome;