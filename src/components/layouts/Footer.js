import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Footer = ({ muscles, category, onSelect }) => {
  const index = category
    ? muscles.findIndex(categ => categ === category) + 1
    : 0;

  const tabSelected = (e, index) => {
    onSelect(index === 0 ? '' : muscles[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={tabSelected}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(categ => (
          <Tab key={categ} label={categ} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default Footer;
