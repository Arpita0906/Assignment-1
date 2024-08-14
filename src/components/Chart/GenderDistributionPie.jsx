import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Box } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const GenderDistributionPie = () => {
  const data = {
    labels: ['Man', 'Woman'],
    datasets: [
      {
        label: '# of Votes',
        data: [57.9, 42.1],
        backgroundColor: [
          '#3c49fc',
          '#21f519ef',
        ],
        borderColor: [
          '#3c49fc',
          '#21f519ef',
        ],
        borderWidth: 1,
      },
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
      }}
    >
      <Pie
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false, // Allow the chart to stretch
        }}
      />
    </Box>
  );
};

export default GenderDistributionPie;