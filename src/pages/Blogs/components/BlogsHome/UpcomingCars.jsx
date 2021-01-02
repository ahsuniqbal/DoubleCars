import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import UpperSection from './UpperSection'
import { Link } from 'react-router-dom';
import '../../styles/BlogsHome.css'

const UpcomingCars = () => {
    const UpcomingCarDemo3 = {
        backgroundImage: `url(${require("../../../../assets/UpcomingCarDemo3.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '15vh',
      };

      const UpcomingCarDemo4 = {
        backgroundImage: `url(${require("../../../../assets/UpcomingCarDemo4.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '15vh',
      };
      
      const UpcomingCarDemo1 = {
        backgroundImage: `url(${require("../../../../assets/UpcomingCarDemo1.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '15vh',
      };
      const UpcomingCarDemo2 = {
        backgroundImage: `url(${require("../../../../assets/UpcomingCarDemo1.png")})`,
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
            <Row>
                <Col md = "9" xs = "12" style = {UpcomingCarDemo1}></Col>
                <Col md = "3" xs = "12" style = {UpcomingCarDemo2}></Col>
                <Col md = "3" xs = "12" style = {UpcomingCarDemo3}></Col>
                <Col md = "9" xs = "12" style = {UpcomingCarDemo4}></Col>
            </Row>
            {/* <Row>
                <Col md = "12" xs = "12" style = {UpcomingCarDemo4}></Col>
            </Row>   */}
        </Col>
    </Row>
    )
}

export default UpcomingCars;