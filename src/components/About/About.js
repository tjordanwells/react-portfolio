import React from 'react';

import Nav from '../Nav'
import Avatar from './Avatar';
import Grid from '@material-ui/core/Grid';


const About = (props) => {
    return (
        <div>
          <Grid container>
            <Grid item>
              <Nav />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Avatar />
            </Grid>
          </Grid>
        </div>
    )
}

export default About;