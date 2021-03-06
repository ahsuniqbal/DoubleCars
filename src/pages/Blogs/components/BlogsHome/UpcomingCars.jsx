import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import UpperSection from './UpperSection'
import { Link } from 'react-router-dom';
import '../../styles/BlogsHome.css'
import {useHistory} from 'react-router-dom';

const UpcomingCars = () => {
  const history = useHistory()
    const UpcomingCarDemo3 = {
        backgroundImage: `url(${require("../../../../assets/UpcomingCarDemo3.jpg")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '15vh',
        
      };

      const UpcomingCarDemo4 = {
        backgroundImage: `url(${require("../../../../assets/UpcomingCarDemo4.jpg")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '15vh',
        
      };
      
      const UpcomingCarDemo1 = {
        backgroundImage: `url(${require("../../../../assets/UpcomingCarDemo1.jpg")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '15vh',
        
      };
      const UpcomingCarDemo2 = {
        backgroundImage: `url(${require("../../../../assets/UpcomingCarDemo1.jpg")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '15vh',
        
      };
    return(
        <Row>
          {/* <Col md = "6" xs = "12" style = {UpcomingCarDemo1}></Col>
          <Col md = "3" xs = "12" style = {UpcomingCarDemo2}></Col> */}
          <Col md = "12" xs = "12">
            <Row className='upcoming-img'>
                <Col md = "9" xs = "12" style={{paddingLeft: '0px', paddingRight: '3px'}} onClick={()=>history.push('/blogs')} className='upcoming-car-hover'>
                  <div style = {UpcomingCarDemo1}></div>
                </Col>
                <Col md = "3" xs = "12" style={{paddingLeft: '3px', paddingRight: '0px'}} onClick={()=>history.push('/blogs')} className='upcoming-car-hover'>
                  <div style = {UpcomingCarDemo2}></div>
                </Col>
                <Col md = "3" xs = "12" style={{paddingLeft: '0px', paddingRight: '3px', paddingTop: '4px'}}  onClick={()=>history.push('/blogs')} className='upcoming-car-hover'>
                  <div style = {UpcomingCarDemo2}></div>
                </Col>
                <Col md = "9" xs = "12" style={{paddingLeft: '3px', paddingRight: '0px', paddingTop: '4px'}}  onClick={()=>history.push('/blogs')} className='upcoming-car-hover'>
                  <div style = {UpcomingCarDemo2}></div>
                </Col>
            </Row>
            {/* <Row>
                <Col md = "12" xs = "12" style = {UpcomingCarDemo4}></Col>
            </Row>   */}
        </Col>
    </Row>
    )
}

export default UpcomingCars;