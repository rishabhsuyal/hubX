import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
import './PieChart.css';


function DoughnutChart({ invest, rate, duration }) {
  const est = invest * [(1 + rate) ^ (duration * 12) - 1] * (1 + rate) / rate;
  console.log(est);
  const data = {
    labels: ['Total Inv', 'Est. Return'],
    datasets: [
      {
        data: [invest, est],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Doughnut className="graph" data={data} />
      <Button className="temp2" variant="primary">
        INVEST NOW
      </Button>
    </div>
  )
}

export default DoughnutChart;