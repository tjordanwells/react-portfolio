import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ButtonBase, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    top: 0,
    justifyContent: 'center',
  },
  button: {
    position: 'relative',
    height: 50,
    width: 100,
    padding: '0.25rem',
    margin: '4rem',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $buttonMarked': {
        opacity: 0,
      },
      '& $buttonTitle': {
        border: '2px solid currentColor',
      },
    },
  },
  focusVisible: {},
  Button: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.black,
  },
  buttonTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  buttonMarked: {
    height: 2,
    width: 20,
    backgroundColor: theme.palette.common.black,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const buttons = [
  {
    title: 'About',
    width: '6%',
    route: '/about'
  },
  {
    title: 'Blog',
    width: '6%',
    route: '/blog'
  },
  {
    title: 'Portfolio',
    width: '7%',
    route: '/portfolio'
  },
  {
    title: 'Contact',
    width: '6.8%',
    route: '/contact'
  },
];

function Nav(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {buttons.map(button => (
        <ButtonBase
          focusRipple
          key={button.title}
          className={classes.button}
          style={{
            width: button.width,
          }}
          component={Link}
          to={button.route}
        >
          <span className={classes.Button}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.buttonTitle}
            >
              {button.title}
              <span className={classes.buttonMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);