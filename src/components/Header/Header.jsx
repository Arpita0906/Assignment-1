import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ReportIcon from '@mui/icons-material/Report';
import SettingsIcon from '@mui/icons-material/Settings';
import './Header.css';

const Header = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <header className="header">
      <div className="logo">
        <span className="logo-part1">UN</span>common
      </div>
      <Tabs value={selectedTab} onChange={handleChange} className="tabs">
        <Tab icon={<DashboardIcon />} iconPosition="start" label="Dashboard" />
        <Tab icon={<PeopleIcon />} iconPosition="start" label="Users" />
        <Tab icon={<SubscriptionsIcon />} iconPosition="start" label="Subscriptions" />
        <Tab icon={<ReportIcon />} iconPosition="start" label="Reports" />
        <Tab icon={<SettingsIcon />} iconPosition="start" label="Settings" />
      </Tabs>
      <div className="user-info">
        <span>Kaustav</span>
        <span>Admin / Dashboard</span>
      </div>
    </header>
  );
};

export default Header;
