import React from 'react';
import { Col, Row, Label, Button } from 'reactstrap';
import TopStoriesCardDemoImage from '../../../assets/TopStoriesCardDemoImage.png'
import '../styles/ArticleCard.css'

const ArticleCard = () => { 
    return(
           <div>
                <img src = {TopStoriesCardDemoImage} className = "img-fluid article-card-image" alt = "demo-image"/>
                <Label className = "tarticle-card-heading">Video: BMW X5 M vs GLE 63 AMG and Audi RSQ8 comparison review</Label> 
                <Label className = "article-date">Dec 15, 2020</Label><br/><br/>
           </div> 
    )
  
}

export default ArticleCard;