import React,{useState,useEffect} from 'react';
import { Col, Row, Label, Badge, Container } from 'reactstrap';
import '../styles/FeaturedCars.css'
import {useHistory} from 'react-router-dom'
import { GetFeaturedCars } from '../api/GetRequests';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { AddCommaToNumber } from '../../../utils/NumberManipulation';
AOS.init()

const NewFeaturedCars = (props) => {

  const history= useHistory()

  console.log(props)

   // getting products
   const[productId,setProductIds]=useState([])
    useEffect(()=>{
      GetFeaturedCars().then(doc => {
        setProductIds(doc)
      })
      .catch(error => {
          console.log(error.message);
      });
    },[])
    
    const FeaturedDemoImage1 = {
        backgroundImage: `url(${props.featuredCars[0].coverPic})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '481px',
        border:'5px solid white'
        
      };

      const FeaturedDemoImage2 = {
        backgroundImage: `url(${props.featuredCars[1].coverPic})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '240px',
        border:'5px solid white'
       
      };
      
      const FeaturedDemoImage3 = {
        backgroundImage: `url(${props.featuredCars[2].coverPic})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '240px',
        border:'5px solid white'
       
      };
      const FeaturedDemoImage4 = {
        backgroundImage: `url(${props.featuredCars[3].coverPic})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '240px',
        borderRight:'10px solid white',
        border:'5px solid white'  
      };
      const FeaturedDemoImage5 = {
        backgroundImage: `url(${props.featuredCars[4].coverPic})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '240px',
        border:'5px solid white'
            };

      
    return(
      <Container>

     
        <Row className='main-feature'>
            <Col data-aos="" data-aos-duration="1500" data-aos-easing="ease-in-sine" md = "6" xs = "12" style = {FeaturedDemoImage1} className='main-coloumn' onClick={()=>history.push('/product/'+ productId[0].productId)}>
                <Badge color="primary" className = "feature-car-badge1">New</Badge>
                <div className="content-first">
                  <h2 className='content-header1'>${AddCommaToNumber(props.featuredCars[0].price)}</h2>
                  <Label className="content-text1">{props.featuredCars[0].carName}</Label>
                </div>
            </Col>
            <Col md = "6" xs = "12">
                <Row>
                    <Col  data-aos="" data-aos-duration="1500" data-aos-easing="ease-in-sine"  md = "6" xs = "12" style = {FeaturedDemoImage2} className='main-coloumn' onClick={()=>history.push('/product/'+ productId[1].productId)}>
                    <Badge color="primary" className = "feature-car-badge2">New</Badge>
                      <div className="content">
                        <h2 className='content-header2'>${AddCommaToNumber(props.featuredCars[1].price)}</h2>
                        <Label className="content-text2">{props.featuredCars[1].carName}</Label>
                      </div>
                    </Col>
                    <Col data-aos="" data-aos-duration="1500" data-aos-easing="ease-in-sine"  md = "6" xs = "12" style = {FeaturedDemoImage3} className='main-coloumn'  onClick={()=>history.push('/product/'+ productId[2].productId)}>
                      <Badge color="primary" className = "feature-car-badge2">New</Badge>
                      <div className="content">
                        <h2 className='content-header2'>${AddCommaToNumber(props.featuredCars[2].price)}</h2>
                        <Label className="content-text2">{props.featuredCars[2].carName}</Label>
                      </div>
                    </Col>
                </Row>
                <Row>
                    <Col data-aos="" data-aos-duration="1500" data-aos-easing="ease-in-sine"  md = "6" xs = "12" style = {FeaturedDemoImage4} className='main-coloumn'  onClick={()=>history.push('/product/'+ productId[3].productId)}>
                    <Badge color="primary" className = "feature-car-badge2">New</Badge>
                      <div className="content">
                        <h2 className='content-header2'>${AddCommaToNumber(props.featuredCars[3].price)}</h2>
                        <Label className="content-text2">{props.featuredCars[3].carName}</Label>
                      </div>
                    </Col>
                    <Col data-aos="" data-aos-duration="1500" data-aos-easing="ease-in-sine" md = "6" xs = "12" style = {FeaturedDemoImage5} className='main-coloumn'  onClick={()=>history.push('/product/'+ productId[4].productId)}>
                     <Badge color="primary" className = "feature-car-badge2">New</Badge>
                      <div className="content">
                        <h2 className='content-header2'>${AddCommaToNumber(props.featuredCars[4].price)}</h2>
                        <Label className="content-text2">{props.featuredCars[4].carName}</Label>
                      </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        </Container>
    )
  
}

export default NewFeaturedCars;