import React from'react'
import {Row,Col} from 'reactstrap'
import Chart from '../../../assets/viewChart.png'
import Views from '../../../assets/totalview.png'
import ProductTypeCard from '../../../assets/viewheaderCard.png'
import '../Styles/LowerMain.css'

function LowerMain(){
    return(
        <div>
            <div className='lower-sec-dealership'>
                <Row style={{marginRight:'0'}}>
                    <Col md='6'>
                        <div style={{padding:' 6rem 6rem 0 8rem'}}>
                            <img src={Chart} className='dealership-lower-img1'/>
                            <img src={Views} className='dealership-lower-img2'/>
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
                            <img src={ProductTypeCard} className='chart-design-img-div'/>
                        </div>
                        
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default LowerMain