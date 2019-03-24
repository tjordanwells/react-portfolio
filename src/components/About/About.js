import React from 'react';

import Avatar from './Avatar';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    flexGrow: 1,
  }
});

const About = (props) => {
  const { classes } = props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item md={6}>
            <Avatar />
          </Grid>
        </Grid>
      </div>
    )
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);