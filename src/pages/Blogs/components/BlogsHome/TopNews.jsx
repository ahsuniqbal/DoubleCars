import React from 'react';
import { Row, Col } from 'reactstrap';
import '../../styles/TopNews.css'
import TopNewsDummyImage from '../../../../assets/TopNewsDummyImage.png'
import Label from 'reactstrap/lib/Label';
import TopNewsCard from './TopNewsCard'
import {TopNewsCard1,TopNewsCard2,TopNewsCard3} from './TopNewsCard';
import {useHistory} from 'react-router-dom';

const TopNews = () => {
    const history = useHistory()
   return(
        <Row>
            <Col xs = "12" md = "6" sm = "12" onClick={()=>history.push('/blogs')} className='top-news-first-column'>
                <img src = {TopNewsDummyImage} className = "img-fluid" alt = "top image"/>
                <Label className = "top-news-label">Video: BMW M440i Review Goes Over the Latest Tech on Offer</Label> <br/>
                <Label className = "top-news-date-label">Dec 15, 2020</Label> <br/>
                <Label className = "top-news-content">Not many products actually deserve the label "iconic," but Airstream travel trailers have earned iNot many products actually deserve the label "iconic," but Airstream travel trailers have earned t. Most people can't tell...</Label>
            </Col> 

            <Col xs = "12" md = "6" sm = "12" style={{paddingLeft: '0'}}>
                <TopNewsCard/>
                <TopNewsCard1 />
                <TopNewsCard2/>
                <TopNewsCard3/>
                
                
            </Col> 
        </Row>
    )
}

export default TopNews;