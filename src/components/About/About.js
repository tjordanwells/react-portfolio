import React from 'react';

import Avatar from './Avatar';
import { Grid, Typography, Button, Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 150,
  },
  photo: {
    marginLeft: '5rem'
  },
  text: {
    marginTop: '5rem'
  },
  type: {
    fontFamily: 'Raleway',
    fontSize: '20px',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  strike: {
    textDecoration: 'line-through',
    marginLeft: '20rem',
    fontSize: '16px',
  },
  scott: {
    marginLeft: '20rem',
    fontSize: '16px',
  },
  bio: {
    margin: `${theme.spacing.unit * 5}px 0`,
    marginLeft: '-10rem',
    marginRight: '3rem',
    fontFamily: 'Raleway',
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
    marginRight: '3rem'
  },
  div2: {
    marginLeft: '-10rem',
    margin: `${theme.spacing.unit * 2}px 0`,
    marginRight: '3rem'
  }
});

const About = (props) => {
  const { classes } = props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid className={classes.photo} item md={6}>
            <Avatar />
          </Grid>
          <Grid className={classes.text} item lg={4} alignContent='flex-end'>
            <Typography className={classes.type}>
              "You miss 100 percent of the shots you never take..."
            </Typography>
            <Typography className={classes.strike}>
              - Wayne Gretzky
            </Typography>
            <Typography className={classes.scott}>
              - Michael Scott
            </Typography>
            <Divider className={classes.divider} />
            <Typography className={classes.bio}>
              Full-Stack Developer interested in Data Visualization and intuitive design. 
              I have an extensive background in operations and am very much a self-starter and fast-learner. 
              I pride myself on the ability to take point on projects as well as maintaining a dedicated focus. 
              I am a creative problem-solver and leverage my experience from start-up environments to effectively deliver solutions. 
            </Typography>
            <Divider className={classes.div2} />
            <Button className={classes.button} alignContent='right'>
              {/* <a href='src/images/Jordan_Wells_Resume_Jan_2019.pdf' download="Jordan_Wells_Resume_Jan_2019.pdf">Download Resume</a> */}
            </Button>
          </Grid>
        </Grid>
      </div>
    )
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);