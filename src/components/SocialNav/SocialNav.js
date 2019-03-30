import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faGithub, faLinkedinIn, faEnvelope);

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    justifyContent: 'center',
    bottom: 0,
    marginTop: '20px',
    position: 'relative'
  },
  fab: {
    margin: theme.spacing.unit,
    backgroundColor: 'black',
    justifyContent: 'center',
    position: 'relative',
  },
});

class SocialNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isHiddenOct: true,
      isHiddenIn: true,
      isHiddenMail: true
    }

  }

  toggleHiddenOct = () => {
    this.setState({
      isHiddenOct: !this.state.isHiddenOct
    });
  }

  toggleHiddenIn = () => {
    this.setState({
      isHiddenIn: !this.state.isHiddenIn
    });
  }

  toggleHideOct = () => {
    this.setState({
      isHiddenOct: true
    });
  }

  toggleHideIn = () => {
    this.setState({
      isHiddenIn: true
    });
  }

  toggleHiddenMail = () => {
    this.setState({
      isHiddenMail: !this.state.isHiddenMail
    });
  }

  toggleHideMail = () => {
    this.setState({
      isHiddenMail: true
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <a target='_blank' rel="noopener noreferrer" href='https://github.com/tjordanwells'>
          <Fab className={classes.fab} size='small' onMouseEnter={this.toggleHiddenOct} onMouseLeave={this.toggleHideOct}>
            {!this.state.isHiddenOct && <FontAwesomeIcon icon={faGithub} size="lg" />}
            {this.state.isHiddenOct && <FontAwesomeIcon inverse icon={faGithub} size="lg" />}
          </Fab>
        </a>
        <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/tjordanwells/'>
          <Fab className={classes.fab} size='small' onMouseEnter={this.toggleHiddenIn} onMouseLeave={this.toggleHideIn}>
            {!this.state.isHiddenIn && <FontAwesomeIcon icon={faLinkedinIn} size="lg" />}
            {this.state.isHiddenIn && <FontAwesomeIcon inverse icon={faLinkedinIn} size="lg" />}
          </Fab>
        </a>
        <a href='/contact'>
          <Fab className={classes.fab} size='small' onMouseEnter={this.toggleHiddenMail} onMouseLeave={this.toggleHideMail}>
            {!this.state.isHiddenMail && <FontAwesomeIcon icon={faEnvelope} size="lg" />}
            {this.state.isHiddenMail && <FontAwesomeIcon inverse icon={faEnvelope} size="lg" />}
          </Fab>
        </a>
      </div>
    );
  }
}

SocialNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocialNav);