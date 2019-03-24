import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    backgroundColor: 'black',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function SocialNav(props) {
  const { classes } = props;
  return (
    <div>
      <Fab className={classes.fab}>

      </Fab>
      <Fab className={classes.fab}>
        
      </Fab>
      <Fab className={classes.fab}>
        
      </Fab>
    </div>
  );
}

SocialNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocialNav);