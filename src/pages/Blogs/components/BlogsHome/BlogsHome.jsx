import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import UpperSection from './UpperSection'
import { Link } from 'react-router-dom';
import '../../styles/BlogsHome.css'
import Container from 'reactstrap/lib/Container';
import UpcomingCars from './UpcomingCars';
import TopNews from './TopNews'

const BlogsHome = () => {
    return(
        <Container fluid = {false}>
            <UpperSection/>
            <Row>
            <Col xs = "12" md = "9">
                <h1>Top News</h1>
                <TopNews/>
            </Col>

            <Col xs = "12" md = "3">
                <h2>Upcoming Cars</h2>
                <UpcomingCars/>
            </Col>
        </Row> 
        </Container>
       
        
       

         
   
    )
}

export default BlogsHome;