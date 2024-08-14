import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler } from 'chart.js';
import { Box, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import PanToolIcon from '@mui/icons-material/PanTool';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Filler);

const SubscriptionChart = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const iconStyles = (iconName) => ({
    p: 0,
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    color: activeIcon === iconName ? 'white' : 'blue',
    backgroundColor: activeIcon === iconName ? 'blue' : 'transparent',
    '&:hover': {
      backgroundColor: 'blue',
      color: 'white',
    }
  });

  const data = {
    labels: ['Jan 23', '', 'Mar 23', '', 'May 23', '', 'Jul 23', '', 'Sep 23', '', 'Nov 23', ''],
    datasets: [
      {
        data: [30, 40, 35, 50,49,60,70,90,125, 100, 80, 95],
        borderColor: 'skyblue',
        backgroundColor: 'rgb(255, 255, 204, 0.7)',
        borderWidth: 5,
        fill: true,
        tension: 0.4,
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
        backgroundColor: '#fff',
        position: 'relative',
      }}
    >
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: () => null,
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                color: 'rgba(0, 0, 0, 0.1)',
              },
              beginAtZero: false, // This allows customizing the y-axis start point
              min: 30, // Start y-axis from 30
              ticks: {
                stepSize: 10,
              },
            },
          },
        }}
      />
      {/* Icons container */}
      <Box
        sx={{
          position: 'absolute',
          top: -20,
          right: 10,
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          zIndex: 1,
        }}
      >
        <IconButton sx={iconStyles('zoomIn')} onClick={() => handleIconClick('zoomIn')}>
          <ZoomInIcon />
        </IconButton>
        <IconButton sx={iconStyles('zoomOut')} onClick={() => handleIconClick('zoomOut')}>
          <ZoomOutIcon />
        </IconButton>
        <IconButton sx={iconStyles('panTool')} onClick={() => handleIconClick('panTool')}>
          <PanToolIcon />
        </IconButton>
        <IconButton sx={iconStyles('home')} onClick={() => handleIconClick('home')}>
          <HomeIcon />
        </IconButton>
        <IconButton sx={iconStyles('menu')} onClick={() => handleIconClick('menu')}>
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SubscriptionChart;