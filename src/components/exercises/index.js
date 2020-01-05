import React from 'react';
import { Grid, Paper } from '@material-ui/core';

const styles = {
  Paper: {
    padding: '20px',
    marginBottom: '10px'
  }
};

const index = ({ exercises }) => {
  console.log(exercises);
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>Left Panel</Paper>
      </Grid>

      <Grid item sm>
        <Paper style={styles.Paper}>Left Panel</Paper>
      </Grid>
    </Grid>
  );
};

export default index;
