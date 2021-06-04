import React from 'react';
import { CardBody,Progress } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import '../styles/Chart.css';

const line = {
    labels: ['Jan \'21', 'Feb \'21', 'Mar \'21', 'Apr \'21', 'May \'21', 'Jun \'21', 'Jul \'21'],
    datasets: [
    {
        label: 'My First dataset',
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
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 93, 30, 71, 79, 70, 60, 50, 30, 10],
    },
],
};

const options = {
    tooltips: {
        enabled: false,
        // custom: CustomTooltips
    },
    maintainAspectRatio: false,
}


const Chart = () => {
    return (
        <div className="chart-wrapper p-4" >
            
            <Line data={line} options={options} height={100} width={100} />
        </div>
    )
}

export default Chart
