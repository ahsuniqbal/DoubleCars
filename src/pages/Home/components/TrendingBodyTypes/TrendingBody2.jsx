import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import DummyCarCard from '../../../../assets/DummyCarCard.png'
import ProductCard from '../../../../components/ProductCard/components/ProductCard';


const TrendingBody2 = () => {
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
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    
                />
                <ProductCard
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                />
                <ProductCard
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                />
                <ProductCard
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                />
                <ProductCard
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "

                />
                <ProductCard
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                />
            </Slider> 
        </div>    
    );
};

export default TrendingBody2;