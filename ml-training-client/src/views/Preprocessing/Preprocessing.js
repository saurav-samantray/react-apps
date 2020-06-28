import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

//import { NewTraining, TrainingList } from '../../components/Training';
import { CustomizedSnackbars } from "../../components/utils/notificationbox/notificationbox";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Preprocessing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          Upload Data Panel
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
          Action panel
        </Grid>
      </Grid>
      <CustomizedSnackbars  vertical='top' horizontal='right'></CustomizedSnackbars>
    </div>
  );
};

export default Preprocessing;
