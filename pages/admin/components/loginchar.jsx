import React, { useState, useEffect } from 'react';
import Chart from './chart';

var socket = require('socket.io-client')('http://localhost:3000'); // replace with your backend server URL

const LoginChart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Logins',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    socket.on('Login', (count) => {
      setData((prevData) => {
        const newLabels = [...prevData.labels, new Date().toLocaleTimeString()];
        const newData = [...prevData.datasets[0].data, count];
        return { labels: newLabels, datasets: [{ ...prevData.datasets[0], data: newData }] };
      });
    });
  }, []);

  return <Chart data={data} />;
};

export default LoginChart;
