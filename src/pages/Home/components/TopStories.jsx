import React from 'react';
import { Col, Row, Label, Button } from 'reactstrap';
import TopStoriesCardDemoImage from '../../../assets/TopStoriesCardDemoImage.png'
import '../styles/TopStories.css'

const TopStories = () => { 
    return(
           <div>
                <img src = {TopStoriesCardDemoImage} className = "img-fluid top-stories-image" alt = "demo-image"/>
                <Label className = "top-stories-card-heading">Video: BMW X5 M vs GLE 63 AMG and Audi RSQ8 comparison review</Label>
                <Label className = "top-stories-date">Dec 15, 2020</Label>
           </div> 
    )
  
}

export default TopStories;