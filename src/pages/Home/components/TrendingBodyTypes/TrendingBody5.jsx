import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import DummyCarCard from '../../../../assets/DummyCarCard.png'
import ProductCard from '../../../../components/ProductCard/components/ProductCard';


const TrendingBody5 = () => {
    let settings = {
        dot:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        }
    return(
        <div>    
           <Slider {...settings}>
                <ProductCard
                    productImg = {DummyCarCard}
                    
                />
                <ProductCard
                    productImg = {DummyCarCard}
                />
                <ProductCard
                    productImg = {DummyCarCard}
                />
                <ProductCard
                    productImg = {DummyCarCard}
                />
                <ProductCard
                    productImg = {DummyCarCard}

                />
                <ProductCard
                    productImg = {DummyCarCard}
                />
            </Slider> 
        </div>    
    );
};

export default TrendingBody5;