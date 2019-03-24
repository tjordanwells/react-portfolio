import React, { Component } from 'react';
import  { Grid, Grow } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Project from './Project';

import wikiwalk from '../../images/wikiwalk.png';
import nyt from '../../images/nyt.png';
import rickandmorty from '../../images/rickandmorty.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  portfolio: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    top: 0,
    justifyContent: 'center',
    margin: theme.spacing.unit
  }
});

class Portfolio extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      willGrow: false
    }
  };

  componentDidMount() {
    this.setState({
      willGrow: true
    });
    console.log(this.state.willGrow)
  };

  render() {
    const { classes } = this.props;

    const wikiProj = (
      <Project
        title='Wiki Walking Tours'
        projectImage={wikiwalk}
        description='With Wiki Walking Tours you can easily find Wikipedia articles of cool places near you.'
        codeUrl='https://github.com/awb305/wikiwalk'
        demoUrl='https://polar-reaches-51925.herokuapp.com/'
      />
    );

    const nytProj = (
      <Project
        title='NYT Web Scraper'
        projectImage={nyt}
        description='Simple web-scraper that displays recent articles from The New York Times.'
        codeUrl='https://github.com/tjordanwells/nyt-mongo-scrape'
        demoUrl='https://sheltered-cove-94630.herokuapp.com/'
      />
    );

    return (
      <div className={classes.root}>
        <Grid className={classes.portfolio} container spacing={24}>
          <Grid item>
            <Grow in={true}>
              {wikiProj}
            </Grow>
          </Grid>
          <Grid item>
          <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...(true ? { timeout: 1000 } : {})}
          >
            {nytProj}
          </Grow>
          </Grid>
          <Grid item>
            <Project
              title='Rick & Morty Memory Game'
              projectImage={rickandmorty}
              description='Memory click game - simple, but features some of the best qualities that React has to offer'
              codeUrl='https://github.com/tjordanwells/clicky-game'
              demoUrl='https://hidden-depths-61421.herokuapp.com/'
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portfolio);