import React from 'react'
import ProductAds from '../../../assets/ProductsPageAds.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../styles/ProductAds.css'

function ProductsPageAds(){
    return(
        <div>
            <div className="product-ads-div">
                <LazyLoadImage alt="ads here" effect="blur" src={ProductAds} className='img-fluid product-ads-Image'/>
            </div>
        </div>
    )
}
export default ProductsPageAds