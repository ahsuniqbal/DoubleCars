import React from 'react';
import Header from './Header'
import RecommendedCar from './RecommendedCar';
import PopularMake from './PopularMake'
import TrendingCar from './TrendingCar';
import TrendingBodyTypes from './TrendingBodyTypes/TrendingBodyTypes'
import BuyNow from './BuyNow';
import Searchbar from './Searchbar';
import { Row, Col } from 'reactstrap';

const Home = () => {
    return(
        <div className = "trending-body-types">
        <Header/>

        <Row>
            <Col xs="1"></Col>

            <Col xs="10">
                <Searchbar />
            </Col>
        </Row>
        
      
        <RecommendedCar/>
        <TrendingCar/>
        <TrendingBodyTypes/>
        <BuyNow/>
        <PopularMake/>
        
        

       

        </div>
    )
}

export default Home;