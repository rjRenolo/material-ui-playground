import React, { Fragment } from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItemText,
  ListItem,
  Divider
} from '@material-ui/core';

const styles = {
  Paper: {
    padding: '20px',
    marginBottom: '10px',
    height: '80vh',
    overflowY: 'auto'
  }
};

const index = ({ exercises }) => {
  //   console.log(exercises);
  return (
    <Grid container>
      <Grid item sm>
        {/* list of exercises */}
        <Paper style={styles.Paper}>
          <Typography variant="h2">Exercise List</Typography>
          <Divider style={{ marginBottom: '8px', background: 'black' }} />

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
                <Divider style={{ marginBottom: '4px' }} />
              </Fragment>
            );
          })}
        </Paper>
      </Grid>

      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="h2">Exercise Details</Typography>
          <Divider style={{ marginBottom: '8px', background: 'black' }} />
          <Typography variant="subtitle1">
            Please Select an Exercise in the List
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default index;
