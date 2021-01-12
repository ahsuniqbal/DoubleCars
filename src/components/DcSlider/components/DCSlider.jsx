import React from "react"
import '../styles/DCSlider.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '../../ProductCard';
import { AddCommaToNumber } from "../../../utils/NumberManipulation";
import '../styles/DCSlider.css'
import nextIcon from '../../../assets/next-icon.png';
import previousIcon from '../../../assets/prev-icon.svg';

const NextIcon=(props)=>{
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src={nextIcon} className='icon-image'/>
    </div>
  );
}
const PrevoiusIcon=(props)=>{
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img src={previousIcon} className='prev-icon-image'/>
    </div>
  );
}
const DCSlider = (props) => {

    let settings = {
        adaptiveHeight: true,
        
        autoplaySpeed: 2000,
        autoplay: false,
        nextArrow: <NextIcon />,
        prevArrow:<PrevoiusIcon/>,
        // centerMode: true,
        // centerPadding: '50px',
        dots: false,
        // fade: true,
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
        swipeToSlide: true,
        slidesToScroll: 1,
        slidesToShow: 5,
    }

    return (
        <Slider {...settings}>
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
                            productSubtitle={AddCommaToNumber(item.mileage) + " miles · " + item.zipCode}
                            productText={"$" + AddCommaToNumber(item.price)}
                        
                        />      
                    ))
                : null
            }
        </Slider>
    );
  }
  
  export default DCSlider;
