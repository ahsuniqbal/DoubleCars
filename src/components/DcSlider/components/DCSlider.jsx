import React,{useState,useEffect} from "react"
import '../styles/DCSlider.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../../ProductCard';
import { AddCommaToNumber } from "../../../utils/NumberManipulation";
import nextIcon from '../../../assets/next-icon.png';
import previousIcon from '../../../assets/prev-icon.png';

const NextIcon=(props)=>{
  const { className, onClick,activeSlide } = props;
  console.log(activeSlide)
  return (
    <div>
      {activeSlide==0 &&  
            <div className={className} onClick={onClick}>
            <img src={nextIcon} className='icon-image' id='show-sliders'/>
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
        <img src={previousIcon} className='prev-icon-image' id='show-sliders'/>
      </div>
      }
    </div>
  );
}
const DCSlider = (props) => {

  const [activeSlide,setActiveSlide]=useState(0)

    let settings = {
        adaptiveHeight: true,
        speed:800,
        nextArrow: <NextIcon activeSlide={activeSlide}/>,
        prevArrow:<PrevoiusIcon activeSlide={activeSlide}/>,
        dots: false,
        beforeChange: (current, next) => setActiveSlide(next),
        swipeToSlide: true,
        slidesToScroll: 1,
        slidesToShow: 5,
        autoplay: false,
        infinite: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
        // slidesPerRow: 1,
        
    }

    return (
        <Slider {...settings}  className='silder-class'>
            {
                props.items ? 
                    props.items.map((item, index) => (
                        <ProductCard 
                            key={index}
                            productId={item.productId}
                            productBadge={props.productBadge}
                            productImg={item.coverPic}
                            productName={item.productName}
                            productTitle={item.carName}
                            productSubtitle={AddCommaToNumber(item.mileage) + " mileage · " + item.zipCode}
                            productText={"$" + AddCommaToNumber(item.price)}
                            allowBookmark={props.allowBookmark}
                           
                        />      
                    ))
                : null
            }
        </Slider>
    );
  }
  
  export default DCSlider;
