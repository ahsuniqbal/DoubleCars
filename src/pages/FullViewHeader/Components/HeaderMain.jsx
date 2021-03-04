import React from'react'
import {Container,Row,Col,Button} from 'reactstrap'
import GooglePlay from '../../../assets/GooglePlay.png'
import FullViewHeaderImage from '../../../assets/fullviewheader.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../Styles/HeaderMain.css'

function HeaderMain(){
    return(
        <div>
            <div className='fullview-header'>
                <Row style={{marginRight:'0'}}>

                    <Col lg='6' md='12' className='fullview-header-left'>
                        <h1 className='fullview-header-text'>
                            Powerful Tools to Quickly Sell and Manage Your Invetory
                        </h1>
                        <div className='fullview-header-bttn-div'>
                            <img src={GooglePlay} alt='Google Play' className='fullview-header-googleplay' />
                            <Button className='ios-coming-soon-btn'><span className='ios-coming-soon-text'>iOS Coming Soon</span></Button>
                        </div>
                    </Col>

                    <Col lg='6' md='12'  className='fullview-header-right'>
                        <LazyLoadImage alt="subsrcibe-image" effect="blur" src={FullViewHeaderImage} className='fullview-header-right-img'/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default HeaderMain