import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import ReportIcon from '@mui/icons-material/Report';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', backgroundColor: '#f4f4f4', paddingTop: '20px' }}>
      <List>
        <ListItem button>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><PaymentIcon /></ListItemIcon>
          <ListItemText primary="Subscriptions" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ReportIcon /></ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ContentPasteIcon /></ListItemIcon>
          <ListItemText primary="Content" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
