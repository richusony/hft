import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ data }) => {
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Bar data={data} options={options} />;
};

export default Chart;
