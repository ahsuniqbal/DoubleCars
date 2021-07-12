import React ,{useState,useEffect} from 'react';
import {Row,Col,Button,Container} from 'reactstrap'
import {useHistory,Link} from 'react-router-dom'
import ProductHeader from './ProductHeader'
import ProductSlider from './ProductSlider'
import ProductsPageAds from './ProductAds'
import ProductsLowerSection from './ProductsLowerSection'
import { GetSearchResult } from '../../Products/api/GetRequests';
import {GetRecommendationsTrendings} from '../../Home/api/GetRequests';
import { isLogin, getLogin } from '../../../config/LoginAuth'
import ProductCard from '../../../components/ProductCard/components/ProductCard';

import '../styles/CarousalProducts.css';

function CarousalProducts (props) {

    const [sliderData, setSliderData] = useState(null);
    const history=useHistory()
    useEffect(() => {
        GetRecommendationsTrendings(isLogin() ? getLogin() : -1).then(doc => {
            setSliderData(doc)
        })
        .catch(error => {
            console.log(error.message);
        });

        // GetSearchResult().then(doc => {
        //    console.log('hhhga',doc)
        //    var temp = []
        //    for(let i = 0; i < doc.length; i++){
        //        temp.push(doc[i])
        //    }
        //    setSliderData(temp);
        // })
        // .catch(error => {
        //     console.log(error.message);
        // });
    }, []);

    return(
       <div style={{backgroundColor:'white'}}>

           {/* first section */}
           <ProductHeader />
            <Container>

            
           <div className='slider-show-main-div'>
                    {sliderData ? 
                        sliderData.map((item,index)=>{
                           if(index===0){
                            return(
                                <div>
                                    <Row>
                                        <Col md="12" xs="12">
                                            <h2 className = "roll-ryce-slider-heading">New Rolls-Royce</h2>
                                        </Col>
                                    </Row>
    
                                    <ProductSlider
                                        slidesToShow = {4}
                                        items={item.data}
                                        allowBookmark={true}
                                    />
                                </div>) 
                           }
                           if(index===1){
                               return(
                                <div>
                                    <Row>
                                        <Col md="12" xs="12">
                                            <h2 className = "roll-ryce-slider-heading">Rolls-Royce Under $5000</h2>                         
                                        </Col>
                                    </Row>

                                        <ProductSlider
                                            slidesToShow = {4}
                                            items={item.data}
                                            allowBookmark={true}
                                        />
                                    </div>
                                )
                            }
                            })
                            :null
                        }
                </div>
                
                {/* third section */}
                <ProductsPageAds/>

                {/* last section */}
                <Row className='roll-ryce-row'>
                    <Col md = "6" xs = "12">
                        <h2 className = "roll-ryce-slider-heading-main">All Rolls-Royce</h2>
                    </Col>

                    <Col md = "6" xs = "12" className = "text-right view-all-link-col">
                        <Link className = "view-all-of-all-royce" to="/products">View All</Link>
                    </Col>
                </Row>

                {/* <ProductsLowerSection/> */}


                <Row>
                    <Col xs="12" sm="6" lg="3" style={{padding: '0 7px'}}>
                        <ProductCard
                            productId={1}
                            productTitle={"2019 Mercedes Benz Hybrid"}
                            productSubtitle={"19,850 mileage · California"}
                            productText={"$32,500"}
                            productImg={"https://firebasestorage.googleapis.com/v0/b/double-cars-183a8.appspot.com/o/CoverImages%2FcoverImage_61620210222T112218.jpg?alt=media&token=6bda03d4-24e4-487e-88a4-38005db3057c"}
                            productName={"2019 Mercedes Benz Hybrid"}
                            productBadge={"TRENDING"}
                            userId={1}
                            dealerPic={"data:image/jpeg;base64,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"}
                            dealer={1}
                            dealerName={"One Chance Auto"}
                            isSave={false}
                            dealerRating={Math.floor(Math.random() * (5 * 100 - 1 * 100) + 1 * 100) / (1*100)}
                            allowBookmark={true} />
                    </Col>
                </Row>

            <div className='text-center py-5'>
                <Button color='primary' outline className='view-all-cars' onClick={()=>history.push('/products')}>View all Cars</Button>
            </div>
            </Container>
       </div>

       
        
    )
  
}

export default CarousalProducts;