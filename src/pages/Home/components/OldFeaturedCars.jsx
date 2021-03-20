import React,{useState,useEffect} from 'react';
import { Col, Row, Label, Container } from 'reactstrap';
import '../styles/OldFeaturedCard.css';
import {useHistory} from 'react-router-dom';
import { GetSearchResult } from '../../Products/api/GetRequests';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const OldFeaturedCars = () => {
  const history = useHistory()

   // getting product
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
        backgroundImage: `url(${require("../../../assets/BlogsDemoImage1.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
        border:'5px solid white'
        
      };

      const FeaturedDemoImage2 = {
        backgroundImage: `url(${require("../../../assets/DemoCar2.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '35vh',
        border:'5px solid white'
       
      };
      
      const FeaturedDemoImage3 = {
        backgroundImage: `url(${require("../../../assets/DemoCar3.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '35vh',
        border:'5px solid white'
       
      };
      const FeaturedDemoImage4 = {
        backgroundImage: `url(${require("../../../assets/DemoCar4.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '35vh',
        borderRight:'10px solid white',
        border:'5px solid white'  
      };
      const FeaturedDemoImage5 = {
        backgroundImage: `url(${require("../../../assets/DummyCarCard.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '35vh',
        border:'5px solid white'
            };


      
    return(
      <Container>

     
        <Row className='main-feature'>
            <Col data-aos="flip-down" data-aos-duration="1500" data-aos-easing="ease-in-sine"  md = "6" xs = "12" style = {FeaturedDemoImage1} className='main-coloumn'  onClick={()=>history.push('/product/'+ productId[5].productId)}>
                <div className="content-first">
                  <h2 className='content-header1'>$8,500</h2>
                  <Label className="content-text1">2019 Mercedes Benz Hybrid</Label>
                </div>
            </Col>
            <Col md = "6" xs = "12">
                <Row>
                    <Col data-aos="flip-down" data-aos-duration="1500" data-aos-easing="ease-in-sine" md = "6" xs = "12" style = {FeaturedDemoImage2} className='main-coloumn'  onClick={()=>history.push('/product/'+ productId[6].productId)}>
                      <div className="content">
                        <h2 className='content-header2'>$24,500</h2>
                        <Label className="content-text2">2019 Mercedes Benz Hybrid</Label>
                      </div>
                    </Col>
                    <Col data-aos="flip-down" data-aos-duration="1500" data-aos-easing="ease-in-sine" md = "6" xs = "12" style = {FeaturedDemoImage3} className='main-coloumn'  onClick={()=>history.push('/product/'+ productId[7].productId)}>
                      <div className="content">
                        <h2 className='content-header2'>$8,520</h2>
                        <Label className="content-text2">2019 Mercedes Benz Hybrid</Label>
                      </div>
                    </Col>
                </Row>
                <Row>
                    <Col data-aos="flip-down" data-aos-duration="1500" data-aos-easing="ease-in-sine"  md = "6" xs = "12" style = {FeaturedDemoImage4} className='main-coloumn'  onClick={()=>history.push('/product/'+ productId[8].productId)}>
                      <div className="content">
                        <h2 className='content-header2'>$30,500</h2>
                        <Label className="content-text2">2019 Mercedes Benz Hybrid</Label>
                      </div>
                    </Col>
                    <Col data-aos="flip-down" data-aos-duration="1500" data-aos-easing="ease-in-sine"  md = "6" xs = "12" style = {FeaturedDemoImage5} className='main-coloumn'  onClick={()=>history.push('/product/'+ productId[9].productId)}>
                      <div className="content">
                        <h2 className='content-header2'>$30,500</h2>
                        <Label className="content-text2">2019 Mercedes Benz Hybrid</Label>
                      </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        </Container>
    )
  
}

export default OldFeaturedCars;