import React, { Component } from 'react';
import { Grid, TextField, Paper, Typography, Button, Grow, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import * as emailjs from 'emailjs-com';

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

function Transition(props) {
  return <Grow {...props} />;
}

class Contact extends Component {

  state = {
      name: '',
      subject: '',
      email: '',
      message: '',
      open: false
    };
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  formSubmit = () => { emailjs.send('gmail', 'template_wXRGbnfO', this.state, 'user_hF2KvSHVU1Y2sHgYSC7Q5')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text, this.state);
      this.setState({
        name: '',
        subject: '',
        email: '',
        message: '',
        open: true
      });
    }, (err) => {
      console.log('FAILED...', err);
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid className={classes.form} container spacing={24}>
          <Grid item lg={12}>
            <Typography className={classes.text} component="h4" variant="h4" gutterBottom>
              Interested in working together?
            </Typography>
          </Grid>
          <Grid item lg={12} />
          <Paper className={classes.root} elevation={1}>
            <form className={classes.container} noValidate autoComplete="off" id='contactForm'>
              <Grid item xs={5}>
                <TextField
                  id="outlined-name"
                  label="Name"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={6}>
                <TextField
                  id="outlined-email"
                  label="Email Address"
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="outlined-subject"
                  label="Subject"
                  className={classes.textField}
                  value={this.state.subject}
                  onChange={this.handleChange('subject')}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={8} />
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Message"
                  multiline
                  rowsMax="4"
                  value={this.state.message}
                  onChange={this.handleChange('message')}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid className={classes.lower} container spacing={24}>
          <Grid item xs={5} />
            <Grid item xs={2}>
              <Button variant="outlined" color="inherit" className={classes.button} fullWidth onClick={this.formSubmit}>
                Send
              </Button>
            </Grid>
          <Grid item xs={5} />
        </Grid>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Thanks for reaching out!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              I will get back to you as soon as possible. <br/><br/>
              Best, <br/>
              Jordan
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);