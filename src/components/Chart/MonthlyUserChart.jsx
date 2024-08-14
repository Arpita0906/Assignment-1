import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MonthlyUserChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Active Users',
        data: [40, 60, 70, 90, 80, 60, 70, 80, 90, 100],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Premium Users',
        data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'New Users',
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }
    ],
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Bar
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
              align: 'center',
              labels: {
                boxWidth: 12,
                padding: 15,
              },
            },
            tooltip: {
              callbacks: {
                label: (context) => `${context.dataset.label}: ${context.raw}`,
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              barPercentage: 0.5, // Decrease bar width
              categoryPercentage: 0.6, // Adjust gap between bars
            },
            y: {
              grid: {
                drawBorder: false,
                drawOnChartArea: false,
              },
              beginAtZero: true,
              ticks: {
                stepSize: 10,
              },
            },
          },
          plugins: {
            // Custom plugin to add a horizontal line at the top
            afterDraw: (chart) => {
              const ctx = chart.ctx;
              const chartArea = chart.chartArea;
              if (!chartArea) return;

              ctx.save();
              ctx.strokeStyle = '#000'; // Line color
              ctx.lineWidth = 2; // Line width
              ctx.beginPath();
              ctx.moveTo(chartArea.left, chartArea.top);
              ctx.lineTo(chartArea.right, chartArea.top);
              ctx.stroke();
              ctx.restore();
            },
          },
        }}
      />
      {/* Icon button in the top right corner */}
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
      >
        <IconButton sx={{ p: 0, width: '24px', height: '24px', color: 'blue' }}>
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MonthlyUserChart;