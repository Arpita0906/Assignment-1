import React from 'react';
import MonthlyUserChart from '../Chart/MonthlyUserChart';
import SubscriptionChart from '../Chart/SubscriptionChart';
import GenderDistributionPie from '../Chart/GenderDistributionPie';
import './Dashboard.css';
import { People, Star, Subscriptions, Cached, PersonAdd, Report } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import MostLikedUsers from '../Chart/MostLikedUsers';


const Dashboard = () => {
  return (
    <div class="main-content">
    <div class="container">
  <div class="column first">
    <div class="row">
      <div class="stats-cards">
        <div class="stat-card">
          <Box>
            <Typography variant="body2" fontWeight="bold">Total Users</Typography>
            <Typography variant="h6">45</Typography>
          </Box>
          <People fontSize="large" />
        </div>
        <div class="stat-card">
          <Box>
            <Typography variant="body2" fontWeight="bold">Premium Users</Typography>
            <Typography variant="h6">20</Typography>
          </Box>
          <Star fontSize="large" />
        </div>
        <div class="stat-card">
          <Box>
            <Typography variant="body2" fontWeight="bold">Subscriptions</Typography>
            <Typography variant="h6">15</Typography>
          </Box>
          <Subscriptions fontSize="large" />
        </div>
        <div class="stat-card">
          <Box>
            <Typography variant="body2" fontWeight="bold">Active Users</Typography>
            <Typography variant="h6">12</Typography>
          </Box>
          <Cached fontSize="large" />
        </div>
        <div class="stat-card">
          <Box>
            <Typography variant="body2" fontWeight="bold">New Registrations</Typography>
            <Typography variant="h6">5</Typography>
          </Box>
          <PersonAdd fontSize="large" />
        </div>
        <div class="stat-card">
          <Box>
            <Typography variant="body2" fontWeight="bold">Total Received Reports</Typography>
            <Typography variant="h6">3</Typography>
          </Box>
          <Report fontSize="large" />
        </div>
      </div>
    </div>
    <div class="row">
    <div className="chart">
    <h3>Gender Distribution of Users</h3>
    <GenderDistributionPie />
  </div>
    </div>
  </div>
  <div class="column">
  <div className="chart">
    <h3 style={{marginLeft:10}}>Monthly User Growth</h3>
    <MonthlyUserChart />
  </div>
  
  </div>
  <div class="column">
  <div className="chart">
    <h3>Total Subscription Amount</h3>
    <h2>$8,999</h2>
    <SubscriptionChart />
  </div>
  </div>
</div>
< MostLikedUsers />
{/* <div class="most-liked-users">
<h2>Most Liked Users</h2>
<table>
  <thead>
    <tr>
      <th>User ID</th>
      <th>User Name</th>
      <th>Registered Email</th>
      <th>Registered Mobile</th>
      <th>Gender</th>
      <th>Country</th>
      <th>City</th>
      <th>Active Time</th>
      <th>Last Seen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>John Brown</td>
      <td>john@example.com</td>
      <td>+1234567890</td>
      <td>Male</td>
      <td>USA</td>
      <td>New York</td>
      <td>2 hours</td>
      <td>1 day ago</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jim Green</td>
      <td>jim@example.com</td>
      <td>+9876543210</td>
      <td>Male</td>
      <td>UK</td>
      <td>London</td>
      <td>5 hours</td>
      <td>2 hours ago</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Joe Black</td>
      <td>joe@example.com</td>
      <td>+1122334455</td>
      <td>Male</td>
      <td>Australia</td>
      <td>Sydney</td>
      <td>24 hours</td>
      <td>3 days ago</td>
    </tr>
  </tbody>
</table>
</div> */}
</div>
  );
};

export default Dashboard;