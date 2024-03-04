import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const AccountChart = () => {
  const chartRef = useRef(null);
  let myChart;

  useEffect(() => {
    // Destroy the previous chart instance before creating a new one
    if (myChart) {
      myChart.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Collection Fees',
            data: [2000, 2500, 3000, 2800, 3500, 4000],
            backgroundColor: '#2563eb',
            borderColor: '#2563eb',
            tension: 0.1,
            fill: false,
          },
          {
            label: 'Expenses',
            data: [1500, 1800, 2000, 2200, 2100, 2300],
            backgroundColor: '#ef4444', // Apply Tailwind CSS color class
            borderColor: '#ef4444',
            tension: 0.1,
            fill: false,
          },
          {
            label: 'Profit',
            data: [500, 700, 1000, 600, 1400, 1700],
            backgroundColor: '#22c55e', // Apply Tailwind CSS color class
            borderColor: '#22c55e',
            tension: 0.1,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} className="w-full h-full" />;
};

export default AccountChart;
