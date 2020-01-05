import React, { Fragment } from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItemText,
  ListItem
} from '@material-ui/core';

const styles = {
  Paper: {
    padding: '20px',
    marginBottom: '10px'
  }
};

const index = ({ exercises }) => {
  //   console.log(exercises);
  return (
    <Grid container spacing={2}>
      <Grid item sm>
        {/* list of exercises */}
        <Paper style={styles.Paper}>
          {exercises.map(([category, exercises]) => {
            return (
              <Fragment key={category}>
                <Typography
                  variant="h6"
                  style={{ textTransform: 'capitalize' }}
                >
                  {category}
                </Typography>
                <List component="ul">
                  {exercises.map(exercise => {
                    // console.log(exercise);
                    return (
                      <ListItem key={exercise.id} button>
                        <ListItemText>{exercise.title}</ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              </Fragment>
            );
          })}
        </Paper>
      </Grid>

      <Grid item sm>
        <Paper style={styles.Paper}>Left Panel</Paper>
      </Grid>
    </Grid>
  );
};

export default index;
