import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Code, ArrowForward } from '@material-ui/icons';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  a: {
    textDecoration: 'none',
    color: 'inherit'
  }
};

function Project(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.projectImage}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {props.title}
        </Typography>
        <Typography component="p">
        {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <a className={classes.a} href={props.codeUrl} rel="noopener noreferrer" target='_blank'>
          <Button size="small" color="primary" to={props.codeUrl}>
            <Code />
            &nbsp; Code
          </Button>
        </a>
        <a className={classes.a} href={props.demoUrl} rel="noopener noreferrer" target='_blank'>
          <Button size="small" color="primary" to={props.demoUrl}>
            Demo &nbsp;
            <ArrowForward />
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);