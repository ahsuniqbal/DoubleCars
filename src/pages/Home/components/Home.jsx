import React from 'react';
import Cover from '../../../assets/DummyCarCard.png'
import Footer from '../../../components/Footer/components/Footer'
import { NavLink } from "react-router-dom";
import PopularMake from './PopularMake';
import SearchBox from './SearchBox';
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button, Row, Col} from 'reactstrap';
import Header from './Header';
const Home = () => {
    return(
        <div className = "">
            
        <Header/>
            <PopularMake/>

            <Footer/>
      
        </div>
    )
}

export default Home;