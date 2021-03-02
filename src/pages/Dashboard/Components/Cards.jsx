import React,{useState} from 'react'
import { Card, CardText, Row, Col } from 'reactstrap';
import UpArrow from '../../../assets/arrow-up.png';
import DownArrow from '../../../assets/arrow-down.png';
import '../Styles/Cards.css'

function Cards (){

    return(
        <div>
            <Row className='dashboard-cards-main' style={{marginLeft: window.innerWidth >= 600 ? '280px' : ''}}>
                <Col lg='3' md='6' sm='12' className='dashboard-cards-col'>
                    <Card className='dashboard-cards-body'>
                        <div className='dashboard-cards'>
                            <CardText className='card-numbers-dashboard'>481</CardText>
                            <span className='cards-arrow-img'></span>
                            <CardText className='card-head-dashboard'>Total <br/>Connections</CardText>
                        </div>
                    </Card>
                </Col>

                <Col lg='3' md='6' sm='12' className='dashboard-cards-col'>
                    <Card className='dashboard-cards-body'>
                        <div className='dashboard-cards'>
                            <CardText className='card-numbers-dashboard'>132</CardText>
                            <img src={UpArrow} className='cards-arrow-img'/>
                            <CardText className='card-head-dashboard'>Connections <br/> <span className='subhead-dashboard'>(Past 60 days)</span></CardText>                       
                        </div>
                    </Card>
                </Col>

                <Col lg='3' md='6' sm='12' className='dashboard-cards-col'>
                    <Card className='dashboard-cards-body'>
                        <div className='dashboard-cards'>
                            <CardText className='card-numbers-dashboard'>49</CardText>
                             <img src={DownArrow} className='cards-arrow-img'/>
                            <CardText className='card-head-dashboard'>Connections <br/> <span className='subhead-dashboard'>(Past 7 days)</span></CardText>
                        </div>
                    </Card>
                </Col>

                <Col lg='3'  md='6' sm='12' className='dashboard-cards-col'>
                    <Card className='dashboard-cards-body'>
                        <div className='dashboard-cards'>
                            <CardText className='card-numbers-dashboard'>71</CardText>
                            <img src={UpArrow} className='cards-arrow-img'/>
                            <CardText className='card-head-dashboard'>Connections <br/> <span className='subhead-dashboard'>Month to date</span></CardText>
                        </div>
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}
export default Cards