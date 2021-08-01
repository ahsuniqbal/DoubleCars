import React from 'react';

import { Card, CardBody, Col, Label, Row, Progress } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import SliderChart from './SliderChart';
import '../styles/Chart.css';
import { AlertCircle } from 'react-feather';

const options = {
    scales : {
        xAxes : [ {
            gridLines : {
                display : false
            }
        } ]
    },
    tooltips: {
        enabled: false,
    },
    maintainAspectRatio: false,
}


const Chart = (props) => {
    const { xAxis, data } = props.data;

    const line = {
        labels: xAxis,
        datasets: [
            {
                label: 'Price History',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: '#1C67CE',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 0,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: data,
            },
        ],
    }


    return (
        <Card  style={{marginTop: '4rem'}}>
            <CardBody>
                <Row>
                    <Col xs="6">
                        <Label>The similar cars in this marketplace typcially range between $12000-16000.</Label>
                    </Col>
                    <Col xs="6">
                        {
                            props.goodDeal ? <SliderChart goodDeal={props.goodDeal} /> : null
                        }
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col xs="12" className="mb-2">
                        <h6 className="chart-title">Price History <AlertCircle size={13} color={'rgba(0, 0, 0, 0.45)'} className="cursor-pointer" /></h6>
                    </Col>
                    <Col xs="12">
                        <div className="chart-wrapper">
                            <Line 
                                data={line} 
                                options={options} 
                                legend={false} 
                                height={100} 
                                width={100}
                            />
                        </div>
                    </Col>
                </Row>
            </CardBody>
            
        </Card>
    )
}

export default Chart
