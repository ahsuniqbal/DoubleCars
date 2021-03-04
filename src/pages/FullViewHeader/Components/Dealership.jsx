import React from'react'
import {Row,Col,Button} from 'reactstrap'
import NoContract from '../../../assets/NoContract.png'
import Listing from '../../../assets/listing.png'
import Market from '../../../assets/market.png'
import Organize from '../../../assets/organize.png'
import Desktop from '../../../assets/desktop.png'
import Communication from '../../../assets/communication.png'
import LightBlue from '../../../assets/EllipseLightBlue.png'
import DarkBlue from '../../../assets/EllipseDark.png'
import MobileImage from '../../../assets/mobile Image.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../Styles/Dealership.css'

function Dealership(){
    return(
        <div  className='dealership-main-div'>
            
            <div className='dealership-main-top-div'>
                <h1 className='dealership-heading'>DoubleCars Dealership+</h1>
                <p className='dealership-text'>Designed, Built for Dealership and Sellers. Advanced features to maximize your business potential.</p>
            </div>

            <div className='dealership-center-main'>
                <Row >
                    {/* first coloumn */}
                    <Col md='4' className='dealership-center-col'>
                        <div className='dealership-image-text-main'>
                            <div className='dealership-image-text'>
                                <img src={NoContract} className='contract-img'/>
                                <p className='inner-dealership-head'>No Contract, No Fee</p>
                            </div>
                            <p className='inner-dealership-text'> DoubleCars is a Free to use. Buyer, Seller, Dealerships.</p>
                        </div>

                        <div className='dealership-image-text-main'>
                            <div className='dealership-image-text'>
                                <img src={Listing} className='contract-img'/>
                                <p className='inner-dealership-head'>Listing & Inventory</p>
                            </div>
                            <p className='inner-dealership-text'> Post or instantly transfer your inventory in seconds.</p>
                        </div>

                        <div className='dealership-image-text-main'>
                            <div className='dealership-image-text'>
                                <img src={Market} className='contract-img'/>
                                <p className='inner-dealership-head'> Market Analysis</p>
                            </div>
                            <p className='inner-dealership-text'>Real time market data and accurate statistics to keep your business competitive.</p>
                        </div>
                    </Col>

                    {/* second column */}
                    <Col md='4'>
                        <div className='dealership-images-div'>
                            <LazyLoadImage src={LightBlue} className='light-blue-dealership'/>
                            <LazyLoadImage src={DarkBlue} className='dark-blue-dealership'/>
                            <LazyLoadImage src={MobileImage} className='mob-img-dealership'/>
                        </div>
                    </Col>

                    {/* third coloumn */}
                    <Col md='4' className='dealership-center-col-third'>
                    <div className='dealership-image-text-main'>
                            <div className='dealership-image-text'>
                                <img src={Organize} className='contract-img'/>
                                <p className='inner-dealership-head'>Organize</p>
                            </div>
                            <p className='inner-dealership-text'>Access and maintan your inventory easily.</p>
                        </div>

                        <div className='dealership-image-text-main'>
                            <div className='dealership-image-text'>
                                <img src={Communication} className='contract-img'/>
                                <p className='inner-dealership-head'>Easy Commucation</p>
                            </div>
                            <p className='inner-dealership-text'>Instantly and easily chat with customers. No more slow emails.</p>
                        </div>

                        <div className='dealership-image-text-main'>
                            <div className='dealership-image-text'>
                                <img src={Desktop} className='contract-img'/>
                                <p className='inner-dealership-head'>Desktop & Mobile</p>
                            </div>
                            <p className='inner-dealership-text'>
                                    In the office, on the go, or at the auction.
                                    Manage your business anywhere, anytime.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Dealership