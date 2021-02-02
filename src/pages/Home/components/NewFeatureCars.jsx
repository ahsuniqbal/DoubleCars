import React,{useEffect} from 'react';
import { Col, Row, Label, Badge } from 'reactstrap';
import '../styles/FeaturedCars.css'
import {useHistory} from 'react-router-dom'

const NewFeaturedCars = () => {
  const history= useHistory()
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

            // useEffect(()=>{
            //   lazyLoadFunction()
            // })
            // const lazyLoadFunction= function() {
            //   var lazyloadImages;    
            
            //   if ("IntersectionObserver" in window) {
            //     lazyloadImages = document.querySelectorAll(".main-coloumn");
            //     var imageObserver = new IntersectionObserver(function(entries, observer) {
            //       entries.forEach(function(entry) {
            //         if (entry.isIntersecting) {
            //           var image = entry.target;
            //           image.classList.remove("main-coloumn");
            //           imageObserver.unobserve(image);
            //         }
            //       });
            //     });
            
            //     lazyloadImages.forEach(function(image) {
            //       imageObserver.observe(image);
            //     });
            //   } else {  
            //     var lazyloadThrottleTimeout;
            //     lazyloadImages = document.querySelectorAll(".main-coloumn");
                
            //     function lazyload () {
            //       if(lazyloadThrottleTimeout) {
            //         clearTimeout(lazyloadThrottleTimeout);
            //       }    
            
            //       lazyloadThrottleTimeout = setTimeout(function() {
            //         var scrollTop = window.pageYOffset;
            //         lazyloadImages.forEach(function(img) {
            //             if(img.offsetTop < (window.innerHeight + scrollTop)) {
            //               img.src = img.dataset.src;
            //               img.classList.remove('main-coloumn');
            //             }
            //         });
            //         if(lazyloadImages.length == 0) { 
            //           document.removeEventListener("scroll", lazyload);
            //           window.removeEventListener("resize", lazyload);
            //           window.removeEventListener("orientationChange", lazyload);
            //         }
            //       }, 20);
            //     }
            
            //     document.addEventListener("scroll", lazyload);
            //     window.addEventListener("resize", lazyload);
            //     window.addEventListener("orientationChange", lazyload);
            //   }
            // }
      
    return(
        <Row className='main-feature'>
            <Col md = "6" xs = "12" style = {FeaturedDemoImage1} className='main-coloumn'  onClick={()=>history.push('/products')}>
                <Badge color="primary" className = "feature-car-badge1">New</Badge>
                <div className="content-first">
                  <h2 className='content-header1'>$30,500</h2>
                  <Label className="content-text1">2019 Mercedes Benz Hybrid</Label>
                </div>
            </Col>
            <Col md = "6" xs = "12">
                <Row>
                    <Col md = "6" xs = "12" style = {FeaturedDemoImage2} className='main-coloumn'  onClick={()=>history.push('/products')}>
                    <Badge color="primary" className = "feature-car-badge2">New</Badge>
                      <div className="content">
                        <h2 className='content-header2'>$12,500</h2>
                        <Label className="content-text2">2019 Mercedes Benz Hybrid</Label>
                      </div>
                    </Col>
                    <Col md = "6" xs = "12" style = {FeaturedDemoImage3} className='main-coloumn'  onClick={()=>history.push('/products')}>
                      <Badge color="primary" className = "feature-car-badge2">New</Badge>
                      <div className="content">
                        <h2 className='content-header2'>$26,700</h2>
                        <Label className="content-text2">2019 Mercedes Benz Hybrid</Label>
                      </div>
                    </Col>
                </Row>
                <Row>
                    <Col md = "6" xs = "12" style = {FeaturedDemoImage4} className='main-coloumn'  onClick={()=>history.push('/products')}>
                    <Badge color="primary" className = "feature-car-badge2">New</Badge>
                      <div className="content">
                        <h2 className='content-header2'>$42,900</h2>
                        <Label className="content-text2">2019 Mercedes Benz Hybrid</Label>
                      </div>
                    </Col>
                    <Col md = "6" xs = "12" style = {FeaturedDemoImage5} className='main-coloumn'  onClick={()=>history.push('/products')}>
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