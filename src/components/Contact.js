import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Background from '../imgs/contactus1.jpg';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '95vh',
  },
}));

export default function Contact() {
  const classes = useStyles();
  const theme = useTheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <Grid container direction='row'>
      <Grid item container className={classes.background}>
        <Grid
          item
          container
          align={'right'}
          style={{ marginRight: '5em', marginTop: '2em' }}
          direction='column'
        >
          <Grid item>
            <Typography variant='h2' style={{ lineHeight: 1 }}>
              Contact us
            </Typography>
            <Typography variant='body1'>
              We would love to hear from you.
            </Typography>
          </Grid>
          <Grid item>
            <Grid item>
              <i class='fas fa-phone'></i> (222) 222-2222
            </Grid>
            <Grid item>
              <i class='fas fa-envelope'></i> mannyalgarcia@gmail.com
            </Grid>
          </Grid>
          <Grid item>
            <Grid item>
              <TextField label='Name' id='name' value={name} />
            </Grid>
            <Grid item>
              <TextField label='Email' id='email' value={email} />
            </Grid>
            <Grid item>
              <TextField label='Phone' id='phone' value={phone} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
