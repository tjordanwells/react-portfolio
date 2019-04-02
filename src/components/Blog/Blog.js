import React, { Component } from 'react';
import { Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 6,
    marginTop: theme.spacing.unit * 2
  },
  form: {
    justifyContent: 'center'
  },
  lower: {
    marginTop: theme.spacing.unit * 6,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Raleway',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  }
});


class Blog extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography className={classes.text} component="h4" variant="h4" gutterBottom>
            Coming Soon...
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Blog);