import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import UpperSection from './UpperSection'
import { Link } from 'react-router-dom';
import '../../styles/BlogsHome.css'
import Container from 'reactstrap/lib/Container';
import UpcomingCars from './UpcomingCars';
import TopNews from './TopNews'
import MostPopularCard from './MostPopularCard';
import ArticleCard from '../../../Home/components/ArticleCard';

const BlogsHome = () => {
    return(
        <body className = "blogs-home-body">
            <Container fluid = {false}>
                <UpperSection/>
                <Row>
                    <Col xs = "12" md = "9">
                        <h1 className = "top-news-heading">Top News</h1>
                        <TopNews/>
                        <h1 className = "article-heading">Latest Articles</h1>
                        <Row>
                            <Col xs = "6" md = "4">
                                <ArticleCard/>
                            </Col>
                            <Col xs = "6" md = "4">
                                <ArticleCard/>
                            </Col>
                            <Col xs = "6" md = "4">
                                <ArticleCard/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs = "6" md = "4">
                                <ArticleCard/>
                            </Col>
                            <Col xs = "6" md = "4">
                                <ArticleCard/>
                            </Col>
                            <Col xs = "6" md = "4">
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
                    </Col>
                </Row> 
            </Container>
        </body>
        
       

         
   
    )
}

export default BlogsHome;