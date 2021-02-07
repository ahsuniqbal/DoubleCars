import React from 'react';
import { Label } from 'reactstrap';
import CardImage1 from '../../../assets/TopStoriesCardDemoImage.png'
import CardImage2 from '../../../assets/TopNewsDummy5.png'
import CardImage6 from '../../../assets/BlogPageImage1.png';
import CardImage7 from '../../../assets/DummyCarCard.png';
import CardImage3 from '../../../assets/TopNewsDummy2.png'
import CardImage4 from '../../../assets/TopNewsDummyImage.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../styles/ArticleCard.css'
import { useHistory } from 'react-router-dom';

const ArticlesCard = () => { 
    
    return(
        
           <div className='article-card-main' >
               <LazyLoadImage alt="demo-image" effect="blur" src={CardImage1} className = "img-fluid article-card-image"/>           
                 {/* <img src = {CardImage1} className = "img-fluid article-card-image" alt = "demo-image"/> */}
             
                    <Label className = "tarticle-card-heading">Video: BMW X5 M vs GLE 63 AMG and Audi RSQ8 comparison review</Label> 
                    <Label className = "article-date">Dec 15, 2020</Label><br/><br/>
                
           </div>
        
    )
  
}


const ArticleCard1 = () => { 
    const history=useHistory()
    return(
           <div className='article-card-main' >
                <LazyLoadImage alt="demo-image" effect="blur" src={CardImage4} className = "img-fluid article-card-image"/>
                {/* <img src = {CardImage4} className = "img-fluid article-card-image" alt = "demo-image"/> */}
                <Label className = "tarticle-card-heading">2021 Ford Bronco Sport First Drive: Small SUV, Big Off-Road</Label> 
                <Label className = "article-date">Apr 1, 2009</Label><br/><br/>
           </div> 
    )
  
}
const ArticleCard2 = () => { 
    const history=useHistory()
    return(
           <div className='article-card-main' >
                <LazyLoadImage alt="demo-image" effect="blur" src={CardImage3} className = "img-fluid article-card-image"/>
                {/* <img src = {CardImage3} className = "img-fluid article-card-image" alt = "demo-image"/> */}
                <Label className = "tarticle-card-heading">2021 Volvo XC60 Review | Swedish Design; no Assembly Required</Label> 
                <Label className = "article-date">Feb 24, 2019</Label><br/><br/>
           </div> 
    )
  
}
const ArticleCard3 = () => { 
    const history=useHistory()
    return(
           <div className='article-card-main'>
               <LazyLoadImage alt="demo-image" effect="blur" src={CardImage6} className = "img-fluid article-card-image"/>
                {/* <img src = {CardImage6} className = "img-fluid article-card-image" alt = "demo-image"/> */}
                <Label className = "tarticle-card-heading">The Next Generation Car Is Just Here, Checkout More</Label> 
                <Label className = "article-date">Oct 8, 2017</Label><br/><br/>
           </div> 
    )
  
}
const ArticleCard4 = () => { 
    const history=useHistory()
    return(
           <div className='article-card-main'>
                <LazyLoadImage alt="demo-image" effect="blur" src={CardImage2} className = "img-fluid article-card-image"/>
                {/* <img src = {CardImage2} className = "img-fluid article-card-image" alt = "demo-image"/> */}
                <Label className = "tarticle-card-heading">2009 Audi A4 Tiptronic Premium Unleaded</Label> 
                <Label className = "article-date">Dec 30, 2020</Label><br/><br/>
           </div> 
    )
  
}
const ArticleCard5 = () => { 
    const history=useHistory()
    return(
           <div className='article-card-main' >
               <LazyLoadImage alt="demo-image" effect="blur" src={CardImage7} className = "img-fluid article-card-image"/>
                {/* <img src = {CardImage7} className = "img-fluid article-card-image" alt = "demo-image"/> */}
                <Label className = "tarticle-card-heading">2014 Land Rover Range Rover Evoque Pure Plus With 6-Speed Automatic</Label> 
                <Label className = "article-date">Apr 28, 2015</Label><br/><br/>
           </div> 
    )
  
}

export default ArticlesCard;

export {ArticleCard1,ArticleCard2,ArticleCard3,ArticleCard4,ArticleCard5 };