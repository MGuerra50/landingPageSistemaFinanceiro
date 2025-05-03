import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PizzaGraphic = ({ series, labels, width = 380, height = 380 }) => {
  const options = {
    chart: {
      type: 'pie',
    },
    labels: labels,
    legend: {
      position: 'bottom',
    },
    dataLabels: {
      formatter: (val) => `${val.toFixed(1)}%`,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 300 },
          legend: { position: 'bottom' }
        }
      }
    ]
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="pie"
      width={width}
      height={height}
    />
  );
};

export default PizzaGraphic;
