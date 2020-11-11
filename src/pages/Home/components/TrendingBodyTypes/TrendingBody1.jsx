import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import DummyCarCard from '../../../../assets/DummyCarCard.png'
import ProductCard from '../../../../components/ProductCard/components/ProductCard';
import { CardBody } from 'reactstrap';
import '../../styles/TrendingBodyTypes.css'

const TrendingBody1 = (props) => {
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
                    productText = "$32,500"
                />
                <ProductCard
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$32,500"
                />
                <ProductCard
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$32,500"
                />
                <ProductCard
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$32,500"
                />
                <ProductCard
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$32,500"

                />
                <ProductCard
                    productImg = {DummyCarCard}
                    productTitle = "2019 Mercedes Benz Hybrid"
                    productSubtitle = "19,850 mileage - california "
                    productText = "$32,500"
                />
            </Slider> 
            
        </div>    
    );
};

export default TrendingBody1;