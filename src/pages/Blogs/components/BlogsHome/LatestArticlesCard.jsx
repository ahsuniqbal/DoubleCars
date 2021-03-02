import React from 'react';
import {  Label } from 'reactstrap';
import '../../styles/LatestArticlesCard.css'
import LC1 from '../../../../assets/LC1.png'
import LC2 from '../../../../assets/LC2.png'
import LC3 from '../../../../assets/LC3.png'
import LC4 from '../../../../assets/LC4.png'
import LC5 from '../../../../assets/LC5.png'
import LC6 from '../../../../assets/LC6.png'
import LC7 from '../../../../assets/LC7.png'
import LC8 from '../../../../assets/LC8.png'
import LC9 from '../../../../assets/LC9.png'
import { useHistory } from 'react-router-dom';

const LatestArticlesCard = () => { 
    const history=useHistory()
    return(
        
           <div className='article-card-main' onClick={()=>history.push('/blogs')}>
                <img src = {LC1} className = "img-fluid latest-article-card-image" alt = "demo-image"/>
                <Label className = "tarticle-card-heading">Video: BMW X5 M vs GLE 63 AMG and Audi RSQ8 comparison review</Label> 
                <Label className = "article-date">Dec 15, 2020</Label><br/><br/>
           </div>
        
    )
  
}
const LatestArticlesCard2 = () => { 
    const history=useHistory()
    return(
        
           <div className='article-card-main' onClick={()=>history.push('/blogs')}>
                <img src = {LC2} className = "img-fluid latest-article-card-image" alt = "demo-image"/>
                <Label className = "tarticle-card-heading">2021 Ford Bronco Sport First Drive: Small SUV, Big Off-Road</Label> 
                <Label className = "article-date">Dec 15, 2020</Label><br/><br/>
           </div>
        
    )
  
}

const LatestArticlesCard3 = () => { 
    const history=useHistory()
    return(
        
           <div className='article-card-main' onClick={()=>history.push('/blogs')}>
                <img src = {LC3} className = "img-fluid latest-article-card-image" alt = "demo-image"/>
                <Label className = "tarticle-card-heading">2021 Volvo XC60 Review | Swedish Design; no Assembly Required</Label> 
                <Label className = "article-date">Dec 15, 2020</Label><br/><br/>
           </div>
        
    )
  
}
const LatestArticlesCard4 = () => { 
    const history=useHistory()
    return(
        
           <div className='article-card-main' onClick={()=>history.push('/blogs')}>
                <img src = {LC4} className = "img-fluid latest-article-card-image" alt = "demo-image"/>
                <Label className = "tarticle-card-heading">About 150 Cadillac Dealers would rather leave the Brand than Sell EVs</Label> 
                <Label className = "article-date">Dec 15, 2020</Label><br/><br/>
           </div>
        
    )
  
}
const LatestArticlesCard5 = () => { 
    const history=useHistory()
    return(
        
           <div className='article-card-main' onClick={()=>history.push('/blogs')}>
                <img src = {LC5} className = "img-fluid latest-article-card-image" alt = "demo-image"/>
                <Label className = "tarticle-card-heading">George Russell Answers the Question of what He Can Do in ...</Label> 
                <Label className = "article-date">Dec 15, 2020</Label><br/><br/>
           </div>
        
    )
  
}
const LatestArticlesCard6 = () => { 
    const history=useHistory()
    return(
        
           <div className='article-card-main' onClick={()=>history.push('/blogs')}>
                <img src = {LC6} className = "img-fluid latest-article-card-image" alt = "demo-image"/>
                <Label className = "tarticle-card-heading">The Next Generation Car Is Just Here, Checkout More</Label> 
                <Label className = "article-date">Dec 15, 2020</Label><br/><br/>
           </div>
        
    )
  
}

const LatestArticlesCard7 = () => { 
    const history=useHistory()
    return(
        
           <div className='article-card-main' onClick={()=>history.push('/blogs')}>
                <img src = {LC7} className = "img-fluid latest-article-card-image" alt = "demo-image"/>
                <Label className = "tarticle-card-heading">Hyundai Recalling 130,000 Santa Fe, Sonata Hybrid and Veloster models</Label> 
                <Label className = "article-date">May 1, 2018</Label><br/><br/>
           </div>
        
    )
  
}

const LatestArticlesCard8 = () => { 
    const history=useHistory()
    return(
        
           <div className='article-card-main' onClick={()=>history.push('/blogs')}>
                <img src = {LC8} className = "img-fluid latest-article-card-image" alt = "demo-image"/>
                <Label className = "tarticle-card-heading">Win One of the Most Luxurious off-roaders Made, the Mercedes AM</Label> 
                <Label className = "article-date">Feb 15, 2020</Label><br/><br/>
           </div>
        
    )
  
}

const LatestArticlesCard9 = () => { 
    const history=useHistory()
    return(
        
           <div className='article-card-main' onClick={()=>history.push('/blogs')}>
                <img src = {LC9} className = "img-fluid latest-article-card-image" alt = "demo-image"/>
                <Label className = "tarticle-card-heading">Romain Grosjean's 28-Second Fight to Live, in His Own Words</Label> 
                <Label className = "article-date">May 15, 2007</Label><br/><br/>
           </div>
        
    )
  
}
export default LatestArticlesCard;
export{LatestArticlesCard2,LatestArticlesCard3, LatestArticlesCard4, LatestArticlesCard5, LatestArticlesCard6, LatestArticlesCard7, LatestArticlesCard8, LatestArticlesCard9}
