import React from 'react';
import { Col, Row, Label} from 'reactstrap';
import AboutCheck from '../../../assets/AboutCheck.svg'
import AboutChooseDummy from '../../../assets/AboutChooseDummy.png'
import '../styles/AboutChoose.css'
import { Check} from 'react-feather';
import CheckIcon from '@material-ui/icons/Check';
const AboutChoose = () => {
      
    return(
        <Row >
           <Col xs = "12" md = "4" className = "about-choose-col">
                <img src = {AboutChooseDummy} className = "img-fluid about-dummy-img" alt = "demo Image"/>
           </Col>
           <Col md = "1" className = "about-choose-col"></Col>
           {/* <Col xs = "12" md = "7" className = "about-choose-col">
                <h2 className = "choose-heading">Why choose us?</h2>
                <p className = "choose-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis, rutrum neque sit amet.</p>
                <ul className="choose-list">
                        <li className="">
                        <p><img src = {AboutCheck} className = "img-fluid about-check-icon"/>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li className="">
                        <p><img src = {AboutCheck} className = "img-fluid about-check-icon"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </li>
                        <li className="">
                        <p><img src = {AboutCheck} className = "img-fluid about-check-icon"/>Lorem ipsum dolor sit ametDonec orci lorem, mattis at porta vitae, accumsan vel libero. </p>
                        </li>
                        <li className="">
                            <p><img src = {AboutCheck} className = "img-fluid about-check-icon"/>Lorem ipsum dolor sit ametDonec orci lorem, mattis at porta.</p>
                        </li>
                    </ul> 
           </Col> */}
             <Col xs = "12" md = "6" className='service-col'>
                <h2 className='service-head'>Why choose us?</h2>
                <p className='choose-paragraph' id='root'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis, rutrum neque sit amet.</p>
                <ul className="choose-list">
                    <div className="d-flex d-md-block">
                        <Check color="#1C67CE" className='about-check-icon mr-3'/>
                        <Label ><p className="">Lorem ipsum dolor sit amet consectet.</p></Label>
                    </div>
                    <div className="d-flex d-md-block">
                        <Check color="#1C67CE" className='about-check-icon mr-3'/>
                        <Label><p className="service-nav-Item">Lorem ipsum dolor sit amet consectetur.</p></Label>
                    </div>
                    <div className="d-flex d-md-block">
                        <Check color="#1C67CE" className='about-check-icon mr-3'/>
                        <Label><p className="service-nav-Item">Lorem ipsum dolor sit amet consectetur.</p></Label>
                    </div>
                    <div className="d-flex d-md-block">
                        <Check color="#1C67CE" className='check mr-3'/>
                        <Label><p className="service-nav-Item">Lorem ipsum dolor sit amet consectetur.</p></Label>
                    </div>
                </ul> 
           </Col>
        </Row>
        
    )
  
}

export default AboutChoose;