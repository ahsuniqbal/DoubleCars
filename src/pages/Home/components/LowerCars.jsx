import React ,{useState} from 'react';
import '../styles/Lowercar.css'
import LowerCarsImage1 from '../../../assets/LowerCarsImage1.png';
import LowerCarsImage2 from '../../../assets/LowerCarsImage2.png';
import LowerCarsImage3 from '../../../assets/LowerCarsImage3.png';
import LowerCarsImage4 from '../../../assets/LowerCarsImage4.png';
import LowerCarsImage5 from '../../../assets/LC6.png';
import LowerCarsImage6 from '../../../assets/LC2.png';
import LowerCarsImage7 from '../../../assets/LowerSectionDummyImage.png';
import LowerCarsImage8 from '../../../assets/TopStoriesCardDemoImage.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Slider from "react-slick";
import RightArrow from '../../../assets/RightArrow.png'

const NextIcon=(props)=>{
     const { className, onClick,activeSlide } = props;
     console.log(activeSlide)
     return (
       <div>
         {activeSlide==0 &&  
               <div className={className} onClick={onClick}>
               <img src={RightArrow}  />
             </div>
           }
       </div>
     );
   }
   const PrevoiusIcon=(props)=>{
     const { className, onClick ,activeSlide} = props;
     return (
       <div>
         {activeSlide!==0 && 
           <div
           className={className}
           onClick={onClick}
         >
           <img src={RightArrow} className='prev-arr'/>
         </div>
         }
       </div>
     );
   }
const LowerCar = (props) => {

// data of api get through home.jsx
//      const {bodyTypes}=props
//     useEffect(()=>{
//      GetProductsOfBodyType(isLogin() ? getLogin() : -1).then(doc=>{
//           console.log('lowecar',doc)
//      }).catch(e=>{
//           alert(e.message)
//      })
//     },[])
const [activeSlide,setActiveSlide]=useState(0)

     var settings = {
          dots: false,
          speed:800,
          nextArrow: <NextIcon activeSlide={activeSlide}/>,
          prevArrow:<PrevoiusIcon activeSlide={activeSlide}/>,
          dots: false,
          beforeChange: (current, next) => setActiveSlide(next),
          swipeToSlide: true,
          slidesToScroll: 1,
          slidesToShow: 4,
          autoplay: false,
          infinite: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
               //  infinite: true,
               //  dots: false
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
            {/* <Slider {...settings}>
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
               
          </Slider> */}
            <Slider {...settings}>
               <div className = "lower-section-car" >
                    <LazyLoadImage width="100%" alt="demo image" effect="blur" src={LowerCarsImage1} className='img-fluid lower-cars-carousel-images'/>
                    {/* <img src={LowerCarsImage1} className='img-fluid lower-cars-carousel-images'/> */}
                    <p className='text'>Sedan</p>
               </div>
               <div className = "lower-section-car">
               <LazyLoadImage width="100%" alt="demo image" effect="blur" src={LowerCarsImage2} className='img-fluid lower-cars-carousel-images'/>
                    {/* <img src={LowerCarsImage2} className='img-fluid lower-cars-carousel-images'/> */}
                    <p className='text'>Suv</p>
               </div>
               <div className = "lower-section-car">
               <LazyLoadImage width="100%" alt="demo image" effect="blur" src={LowerCarsImage3} className='img-fluid lower-cars-carousel-images'/>
                    {/* <img src={LowerCarsImage3} className='img-fluid lower-cars-carousel-images'/> */}
                    <p className='text'>Sports Car</p>
               </div>
               <div className = "lower-section-car">
               <LazyLoadImage width="100%" alt="demo image" effect="blur" src={LowerCarsImage4} className='img-fluid lower-cars-carousel-images'/>
                    {/* <img src={LowerCarsImage4} className='img-fluid lower-cars-carousel-images'/> */}
                    <p className='text'>Hatchback</p>
               </div>
                   
               <div className = "lower-section-car">
               <LazyLoadImage width="100%" alt="demo image" effect="blur" src={LowerCarsImage5} className='img-fluid lower-cars-carousel-images'/>
                    {/* <img src={LowerCarsImage5} className='img-fluid lower-cars-carousel-images'/> */}
                    <p className='text'>Mecedez</p>
               </div>
               <div className = "lower-section-car">
               <LazyLoadImage width="100%" alt="demo image" effect="blur" src={LowerCarsImage6} className='img-fluid lower-cars-carousel-images'/>
                    {/* <img src={LowerCarsImage6} className='img-fluid lower-cars-carousel-images'/> */}
                    <p className='text'>Land Rover</p>
               </div>
               <div className = "lower-section-car">
               <LazyLoadImage width="100%" alt="demo image" effect="blur" src={LowerCarsImage7} className='img-fluid lower-cars-carousel-images'/>
                    {/* <img src={LowerCarsImage7} className='img-fluid lower-cars-carousel-images'/> */}
                    <p className='text'>Audi</p>
               </div>
               <div className = "lower-section-car" >
               <LazyLoadImage width="100%" alt="demo image" effect="blur" src={LowerCarsImage8} className='img-fluid lower-cars-carousel-images'/>
                    {/* <img src={LowerCarsImage8} className='img-fluid lower-cars-carousel-images'/> */}
                    <p className='text'>Mecedez Benz</p>
               </div>
          </Slider>
       </div>
        
    )
  
}

export default LowerCar;