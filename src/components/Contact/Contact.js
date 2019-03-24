import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import * as emailjs from 'emailjs-com';

const styles = () => ({
  root: {
    flexGrow: 1,
  }
});

const formSubmit = () => { emailjs.sendForm(process.env.EJS_SERVICE_ID, process.env.EJS_TEMPLATE_ID, '#myForm', process.env.EJS_USER_ID)
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });
};

console.log(process.env.EJS_SERVICE_ID)

const Contact = (props) => {
  const { classes } = props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item md={6}>
            <p>
                contact form?
            </p>
          </Grid>
        </Grid>
      </div>
    )
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);