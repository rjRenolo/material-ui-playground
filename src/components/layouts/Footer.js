import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Footer = ({ muscles }) => {
  return (
    <Paper>
      <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
        <Tab label="All" />
        {muscles.map(categ => (
          <Tab label={categ} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default Footer;
