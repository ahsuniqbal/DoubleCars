import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import UpperSection from './UpperSection'
import { Link } from 'react-router-dom';
import '../../styles/BlogsHome.css'
import {useHistory} from 'react-router-dom';

const UpcomingCars = () => {
  const history = useHistory()
    const UpcomingCarDemo3 = {
        backgroundImage: `url(${require("../../../../assets/UpcomingCarDemo3.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '15vh',
        borderRadius:'4px',
      };

      const UpcomingCarDemo4 = {
        backgroundImage: `url(${require("../../../../assets/UpcomingCarDemo4.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '15vh',
        borderRadius:'4px',
      };
      
      const UpcomingCarDemo1 = {
        backgroundImage: `url(${require("../../../../assets/UpcomingCarDemo1.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '15vh',
        borderRadius:'4px',
      };
      const UpcomingCarDemo2 = {
        backgroundImage: `url(${require("../../../../assets/UpcomingCarDemo1.png")})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '15vh',
        borderRadius:'4px',
      };
    return(
        <Row>
          {/* <Col md = "6" xs = "12" style = {UpcomingCarDemo1}></Col>
          <Col md = "3" xs = "12" style = {UpcomingCarDemo2}></Col> */}
          <Col md = "12" xs = "12">
            <Row className='upcoming-img'>
                <Col md = "9" xs = "12" style = {UpcomingCarDemo1} onClick={()=>history.push('/blogs')} className='upcoming-coloumn'></Col>
                <Col md = "3" xs = "12" style = {UpcomingCarDemo2} onClick={()=>history.push('/blogs')} className='upcoming-coloumn'></Col>
                <Col md = "3" xs = "12" style = {UpcomingCarDemo3} onClick={()=>history.push('/blogs')} className='upcoming-coloumn'></Col>
                <Col md = "9" xs = "12" style = {UpcomingCarDemo4} onClick={()=>history.push('/blogs')} className='upcoming-coloumn'></Col>
            </Row>
            {/* <Row>
                <Col md = "12" xs = "12" style = {UpcomingCarDemo4}></Col>
            </Row>   */}
        </Col>
    </Row>
    )
}

export default UpcomingCars;