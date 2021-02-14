import React,{useState,useEffect} from 'react';
import { Col, Row, Label, Badge } from 'reactstrap';
import '../styles/FeaturedCars.css'
import {useHistory} from 'react-router-dom'
import { GetSearchResult } from '../../Products/api/GetRequests';

const NewFeaturedCars = () => {
  const history= useHistory()

   // getting products
   const[productId,setProductIds]=useState([])
    useEffect(()=>{
        ShowSearchResults()
    },[])
    const ShowSearchResults = () => {
        GetSearchResult().then(doc => {
          console.log(doc)
          setProductIds(doc)
        })
        .catch(error => {
            alert(error.message);
        });
    }
    const FeaturedDemoImage1 = {
        backgroundImage: `url(${require("../../../assets/FearturedDemo11.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
        border:'5px solid white'
        
      };

      const FeaturedDemoImage2 = {
        backgroundImage: `url(${require("../../../assets/FeaturedDemo2.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '35vh',
        border:'5px solid white'
       
      };
      
      const FeaturedDemoImage3 = {
        backgroundImage: `url(${require("../../../assets/FeaturedDemo3.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '35vh',
        border:'5px solid white'
       
      };
      const FeaturedDemoImage4 = {
        backgroundImage: `url(${require("../../../assets/FeaturedDemo4.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '35vh',
        borderRight:'10px solid white',
        border:'5px solid white'  
      };
      const FeaturedDemoImage5 = {
        backgroundImage: `url(${require("../../../assets/FeaturedDemo5.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '35vh',
        border:'5px solid white'
            };

      
    return(
        <Row className='main-feature'>
            <Col md = "6" xs = "12" style = {FeaturedDemoImage1} className='main-coloumn'  onClick={()=>history.push('/product/'+ productId[0].productId)}>
                <Badge color="primary" className = "feature-car-badge1">New</Badge>
                <div className="content-first">
                  <h2 className='content-header1'>$30,500</h2>
                  <Label className="content-text1">2019 Mercedes Benz Hybrid</Label>
                </div>
            </Col>
            <Col md = "6" xs = "12">
                <Row>
                    <Col md = "6" xs = "12" style = {FeaturedDemoImage2} className='main-coloumn'  onClick={()=>history.push('/product/'+ productId[1].productId)}>
                    <Badge color="primary" className = "feature-car-badge2">New</Badge>
                      <div className="content">
                        <h2 className='content-header2'>$12,500</h2>
                        <Label className="content-text2">2019 Mercedes Benz Hybrid</Label>
                      </div>
                    </Col>
                    <Col md = "6" xs = "12" style = {FeaturedDemoImage3} className='main-coloumn'  onClick={()=>history.push('/product/'+ productId[2].productId)}>
                      <Badge color="primary" className = "feature-car-badge2">New</Badge>
                      <div className="content">
                        <h2 className='content-header2'>$26,700</h2>
                        <Label className="content-text2">2019 Mercedes Benz Hybrid</Label>
                      </div>
                    </Col>
                </Row>
                <Row>
                    <Col md = "6" xs = "12" style = {FeaturedDemoImage4} className='main-coloumn'  onClick={()=>history.push('/product/'+ productId[3].productId)}>
                    <Badge color="primary" className = "feature-car-badge2">New</Badge>
                      <div className="content">
                        <h2 className='content-header2'>$42,900</h2>
                        <Label className="content-text2">2019 Mercedes Benz Hybrid</Label>
                      </div>
                    </Col>
                    <Col md = "6" xs = "12" style = {FeaturedDemoImage5} className='main-coloumn'  onClick={()=>history.push('/product/'+ productId[4].productId)}>
                     <Badge color="primary" className = "feature-car-badge2">New</Badge>
                      <div className="content">
                        <h2 className='content-header2'>$30,500</h2>
                        <Label className="content-text2">2019 Mercedes Benz Hybrid</Label>
                      </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        
    )
  
}

export default NewFeaturedCars;