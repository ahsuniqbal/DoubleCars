import React  from 'react';
import { Col, Row, Button, CustomInput } from 'reactstrap';
import '../styles/Lowercar.css'
import Image1 from '../../../assets/TopNewsDummyImage.png';
import Image2 from '../../../assets/DemoCar2.png';
import Image3 from '../../../assets/DemoCar3.png';
import Slider from "react-slick";

const LowerCar = (props) => {

     const {bodyTypes}=props
     console.log('bodytyes',bodyTypes)
     var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    return(
       <div>
            <Slider {...settings}>
                 {
                      bodyTypes? bodyTypes.map((item,index)=>{
                           return(
                                <div>
                                   <img src={Image1} className='img-fluid lower-section-img '/>
                                   <p className='text'>{item}</p>  
                                </div>
                           )
                      }) :null
                 }
               
          </Slider>
            {/* <Slider {...settings}>
               <div>
                    <img src={Image1} className='img-fluid'/>
                    <p className='text'>Sedan</p>
               </div>
               <div>
                    <img src={Image2} className='img-fluid'/>
                    <p className='text'>Suv</p>
               </div>
               <div>
                    <img src={Image1} className='img-fluid'/>
                    <p className='text'>Sports Car</p>
               </div>
               <div>
                    <img src={Image2} className='img-fluid'/>
                    <p className='text'>Hatchback</p>
               </div>
                   
               <div>
                    <img src={Image3} className='img-fluid'/>
                    <p className='text'>Sedan</p>
               </div>
               <div>
                    <img src={Image2} className='img-fluid'/>
                    <p className='text'>Suv</p>
               </div>
               <div>
                    <img src={Image1} className='img-fluid'/>
                    <p className='text'>Sports Car</p>
               </div>
               <div>
                    <img src={Image3} className='img-fluid'/>
                    <p className='text'>Hatchback</p>
               </div>
          </Slider> */}
       </div>
        
    )
  
}

export default LowerCar;