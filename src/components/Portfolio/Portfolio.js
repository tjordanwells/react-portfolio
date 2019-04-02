import React from 'react';
import  { Grid, Grow } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Project from './Project';

import wikiwalk from '../../images/wikiwalk.png';
import nyt from '../../images/nyt.png';
import rickandmorty from '../../images/rick-and-morty.png';
import batTrivia from '../../images/batTrivia.png';
import liri from '../../images/liri.png';
import budget from '../../images/budget.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 150,
  },
  portfolio: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '80%',
    top: 0,
    justifyContent: 'center',
    marginTop: theme.spacing.unit * 4,
    marginLeft: theme.spacing.unit * 20
  },
});

const Portfolio = (props) => {
  const { classes } = props;
    return (
      <div className={classes.root}>
        <Grid className={classes.portfolio} container spacing={40}>
          <Grid item>
            <Grow in={true}>
              <Project className={classes.proj}
                title='Wiki Walking Tours'
                projectImage={wikiwalk}
                description='With Wiki Walking Tours you can easily find Wikipedia articles of cool places near you.'
                codeUrl='https://github.com/awb305/wikiwalk'
                demoUrl='https://polar-reaches-51925.herokuapp.com/'
              />
            </Grow>
          </Grid>
          <Grid item>
            <Project className={classes.proj}
              title='NYT Web Scraper'
              projectImage={nyt}
              description='Simple web-scraper that displays recent articles from The New York Times.'
              codeUrl='https://github.com/tjordanwells/nyt-mongo-scrape'
              demoUrl='https://sheltered-cove-94630.herokuapp.com/'
            />
          </Grid>
          <Grid item>
            <Project className={classes.proj}
              title='Rick & Morty Memory Game'
              projectImage={rickandmorty}
              description='Memory click game - simple, but features some of the best qualities that React has to offer'
              codeUrl='https://github.com/tjordanwells/clicky-game'
              demoUrl='https://hidden-depths-61421.herokuapp.com/'
            />
          </Grid>
          <Grid item>
            <Project className={classes.proj}
              title='Batman Trivia'
              projectImage={batTrivia}
              description='A trivia game utilizing jQuery and JavaScript timeouts'
              codeUrl='https://github.com/tjordanwells/TriviaGameEasier'
              demoUrl='https://tjordanwells.github.io/TriviaGameEasier/'
            />
          </Grid>
          <Grid item>
            <Project className={classes.proj}
              title='Budget Application'
              projectImage={budget}
              description="Modeled after Dave Ramsey's Every Dollar App - A simple rework"
              codeUrl='https://github.com/tjordanwells/project-2'
              demoUrl='https://apricot-custard-46835.herokuapp.com/'
            />
          </Grid>
          <Grid item>
            <Project className={classes.proj}
              title='CLI'
              projectImage={liri}
              description='CLI that integrates the Twitter, Spotify, and OMDB APIs to display information via commands'
              codeUrl='https://github.com/tjordanwells/liri-node-app'
            />
          </Grid>
        </Grid>
      </div>
    )
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portfolio);