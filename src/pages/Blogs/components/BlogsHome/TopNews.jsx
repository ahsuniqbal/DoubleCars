import React from 'react';
import { Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import '../../styles/TopNews.css'
import TopNewsDummyImage from '../../../../assets/TopNewsDummyImage.png'
import Label from 'reactstrap/lib/Label';

const TopNews = () => {

   

    return(
        <Row>
            <Col xs = "12" md = "6" sm = "12">
                <img src = {TopNewsDummyImage} className = "img-fluid" alt = "top image"/>
                <Label className = "top-news-label">Video: BMW M440i Review Goes Over the Latest Tech on Offer</Label> <br/>
                <Label className = "top-news-date-label">Dec 15, 2020</Label> <br/>
                <Label className = "top-news-content">Not many products actually deserve the label "iconic," but Airstream travel trailers have earned iNot many products actually deserve the label "iconic," but Airstream travel trailers have earned t. Most people can't tell...</Label>
            </Col> 

            <Col xs = "12" md = "6" sm = "12">

            </Col> 
        </Row>
    )
}

export default TopNews;