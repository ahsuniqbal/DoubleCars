import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import DummyCarCard from '../../../../assets/DummyCarCard.png'
import DummyCarCard2 from '../../../../assets/DemoCar2.png'
import DummyCarCard3 from '../../../../assets/DemoCar3.png'
import DummyCarCard4 from '../../../../assets/DemoCar4.png'
import ProductCard from '../../../../components/ProductCard/components/ProductCard';


const TrendingBody2 = () => {
    let settings = {
        dot:true,
        infinite: true,
        rows: 1,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        mobileFirst:true,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
            }
          }],
        
        }
    return(
        <div>    
             <Slider {...settings}>
                <ProductCard
                    productId={166}
                    productImg = {DummyCarCard3}
                    productTitle = "2019 Ferari Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$32,500"
                    
                />
                <ProductCard
                    productId={166}
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$12,890"
                />
                <ProductCard
                    productId={166}
                    productImg = {DummyCarCard2}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$45,780"
                />
                <ProductCard
                    productId={166}
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$23,783"
                />
                <ProductCard
                    productId={166}
                    productImg = {DummyCarCard3}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$23,780"

                />
                <ProductCard
                    productId={166}
                    productImg = {DummyCarCard4}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$42,500"
                />
            </Slider> 
        </div>    
    );
};

export default TrendingBody2;