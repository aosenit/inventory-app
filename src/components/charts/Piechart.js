import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Shop A', 'Shop B', 'Shop C'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 2,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: true,
      position: 'right',

      labels: {
        boxWidth: 10,
        padding: 20,

        font: {
          size: 14,
          weight: 'bolder',
        },
      },
    },
  },
};

const Piechart = () => (
  <div>
    <Doughnut className="pie" data={data} options={options} />
  </div>
);

export default Piechart;
