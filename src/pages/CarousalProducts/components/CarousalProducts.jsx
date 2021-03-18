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

            <ProductsPageAds/>

            <Row className='roll-ryce-row'>
                <Col md = "6" xs = "12">
                    <h2 className = "roll-ryce-slider-heading">All Rolls-Royce</h2>
                </Col>

                <Col md = "6" xs = "12" className = "text-right view-all-link-col">
                    <Link className = "view-all-of-all-royce" to="/products">View All</Link>
                </Col>
            </Row>

            <ProductsLowerSection/>

            <div className='text-center py-5'>
                <Button color='primary' outline className='view-all-cars' onClick={()=>history.push('/')}>View all Cars</Button>
            </div>
            </Container>
       </div>

       
        
    )
  
}

export default CarousalProducts;