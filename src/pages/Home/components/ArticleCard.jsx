import React from 'react';
import { Col, Row, Label, Button } from 'reactstrap';
import CardImage1 from '../../../assets/TopStoriesCardDemoImage.png'
import CardImage2 from '../../../assets/DemoCar4.png'
import CardImage3 from '../../../assets/TopNewsDummy2.png'
import CardImage4 from '../../../assets/TopNewsDummyImage.png'
import '../styles/ArticleCard.css'
import { useHistory } from 'react-router-dom';

const ArticleCard = () => { 
    const history=useHistory()
    return(
           <div className='article-card-main' onClick={()=>history.push('/blogshome')}>
                <img src = {CardImage1} className = "img-fluid article-card-image" alt = "demo-image"/>
                <Label className = "tarticle-card-heading">Video: BMW X5 M vs GLE 63 AMG and Audi RSQ8 comparison review</Label> 
                <Label className = "article-date">Dec 15, 2020</Label><br/><br/>
           </div> 
    )
  
}
const ArticleCard1 = () => { 
    const history=useHistory()
    return(
           <div className='article-card-main' onClick={()=>history.push('/blogshome')}>
                <img src = {CardImage2} className = "img-fluid article-card-image" alt = "demo-image"/>
                <Label className = "tarticle-card-heading">Video: BMW X5 M vs GLE 63 AMG and Audi RSQ8 comparison review</Label> 
                <Label className = "article-date">Dec 15, 2020</Label><br/><br/>
           </div> 
    )
  
}
const ArticleCard2 = () => { 
    const history=useHistory()
    return(
           <div className='article-card-main' onClick={()=>history.push('/blogshome')}>
                <img src = {CardImage3} className = "img-fluid article-card-image" alt = "demo-image"/>
                <Label className = "tarticle-card-heading">Video: BMW X5 M vs GLE 63 AMG and Audi RSQ8 comparison review</Label> 
                <Label className = "article-date">Dec 15, 2020</Label><br/><br/>
           </div> 
    )
  
}
const ArticleCard3 = () => { 
    const history=useHistory()
    return(
           <div className='article-card-main' onClick={()=>history.push('/blogshome')}>
                <img src = {CardImage4} className = "img-fluid article-card-image" alt = "demo-image"/>
                <Label className = "tarticle-card-heading">Video: BMW X5 M vs GLE 63 AMG and Audi RSQ8 comparison review</Label> 
                <Label className = "article-date">Dec 15, 2020</Label><br/><br/>
           </div> 
    )
  
}
export default ArticleCard
export {ArticleCard1,ArticleCard2,ArticleCard3};