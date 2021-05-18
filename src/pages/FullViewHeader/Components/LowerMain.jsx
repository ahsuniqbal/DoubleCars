import React from'react'
import {Row,Col, Container} from 'reactstrap'
import Chart from '../../../assets/viewChart.png'
import Views from '../../../assets/totalview.png'
import DealershipChart from '../../../assets/DealershipChart.png'

import ProductTypeCard from '../../../assets/viewheaderCard.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../Styles/LowerMain.css'

function LowerMain(){
    return(
        <Container style = {{marginTop: '6rem'}}>
            <div className='lower-sec-dealership'>
                <Row style={{marginRight:'0'}}>
                    <Col md='6'>
                        <div style={{padding:' 12% 8% 0 19%'}}>
                            <img src = {DealershipChart}/>
                            {/* <img src={Chart} alt='chart-display' className='dealership-lower-img1'/>
                            <img src={Views} alt='views' className='dealership-lower-img2'/> */}
                        </div>
                        
                    </Col>
                    <Col md='6'>
                        <div className='chart-design-div'>
                            <h1 className='analysis-chart-head'>
                                Indepth Analysis of Everything You Need to Know
                            </h1>
                            <p className='analysis-chart-text'>
                                Real time market data and accurate statistics to keep your business competitive.
                                Real time market data and accurate statistics to keep your business competitive.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row style={{marginRight:'0'}}>
                    <Col md='6'>
                        <div className='chart-design-div'>
                            <h1 className='analysis-chart-head'>Get Your Car on Top Using our Ads Tools </h1>
                            <p className='analysis-chart-text'>
                                Real time market data and accurate statistics to keep your business competitive.
                                Real time market data and accurate statistics.</p>
                        </div>
                    </Col>
                    <Col  md='6' >
                        <div className='productCard-img-div'>
                            <img src={ProductTypeCard} alt='Product' className='chart-design-img-div'/>
                        </div>
                        
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
export default LowerMain