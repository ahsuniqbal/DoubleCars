import React from 'react';
import { Card, CardBody, Col, Label, Row } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import '../styles/Chart.css';

// const line = {
//     labels: [
//         "June 2nd",
//         "June 3rd",
//         "June 4th",
//         "June 9th"
//     ],
//     datasets: [
//     {
//         label: 'Price History',
//         fill: false,
//         lineTension: 0.1,
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: '#1C67CE',
//         borderCapStyle: 'butt',
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: 'miter',
//         pointBorderColor: 'rgba(75,192,192,1)',
//         pointBackgroundColor: '#fff',
//         pointBorderWidth: 0,
//         pointHoverRadius: 5,
//         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//         pointHoverBorderColor: 'rgba(220,220,220,1)',
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: [
//             310000,
//             300000,
//             370000,
//             270000
//         ],
//     },
// ],
// };

const options = {
    tooltips: {
        enabled: false,
        // custom: CustomTooltips
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
        <Card>
            <CardBody>
                <Row>
                    <Col xs="6">
                        <Label>The similar cars in this marketplace typcially range between $12000-16000.</Label>
                    </Col>
                </Row>
            </CardBody>
            <div className="chart-wrapper">
                <Line data={line} options={options} height={100} width={100} />
            </div>
        </Card>
    )
}

export default Chart
