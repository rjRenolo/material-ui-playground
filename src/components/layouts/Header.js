import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Material-ui Playground</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
