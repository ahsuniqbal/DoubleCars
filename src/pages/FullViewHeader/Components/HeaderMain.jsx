import React from'react'
import {Container,Row,Col,Button} from 'reactstrap'
import GooglePlay from '../../../assets/GooglePlay.png'
import AppStore from '../../../assets/AppStore.png'
import FullViewHeaderImage from '../../../assets/fullviewheader.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../Styles/HeaderMain.css'
import { Link } from 'react-router-dom';

function HeaderMain(){
    return(
        <div>
            <div className='fullview-header'>
                <Row style={{marginRight:'0'}}>

                    <Col lg='6' md='12' className='fullview-header-left'>
                        <h1 className='fullview-header-text'>
                            Quicky Sell and Manage your Inventory. Lists for free now.
                        </h1>
                        <div className='fullview-header-bttn-div'>
                        <Link to='https://play.google.com/store/apps'>
                                <img src={GooglePlay} alt='get it on google play' className='fullview-header-googleplay'/>
                        </Link>
                         
                        <img src={AppStore} alt='get it on App Store' className='fullview-header-googleplay'/>
                        </div>
                    </Col>

                    <Col lg='6' md='12'  className='fullview-header-right'>
                        <LazyLoadImage alt="subsrcibe-image" effect="blur" src={FullViewHeaderImage} className='img-fluid fullview-header-right-img'/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default HeaderMain