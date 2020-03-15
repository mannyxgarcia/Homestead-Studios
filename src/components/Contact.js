import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Background from '../imgs/contactus1.jpg';
import { useMediaQuery } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import SnackBar from '@material-ui/core/Snackbar';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '95vh',
  },
  message: {
    border: `2px solid #442c2e`,
    marginTop: '2em',
    borderRadius: 5,
  },
  sendButton: {
    marginTop: 10,
    width: 180,
  },
  formBackground: {
    background: '#fff',
  },
}));

export default function Contact() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  });

  const onChange = event => {
    let error;

    //Form Validation
    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        error = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value,
        );
        if (!error) {
          setEmailError('Invalid email');
        } else {
          setEmailError('');
        }
        break;
      case 'phone':
        setPhone(event.target.value);
        error = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value,
        );

        if (!error) {
          setPhoneError('Invalid phone number');
        } else {
          setPhoneError('');
        }
        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);
    axios
      .get(
        'https://us-central1-stackathon-project.cloudfunctions.net/sendMail',
        {
          params: {
            name: name,
            email: email,
            phone: phone,
            message: message,
          },
        },
      )
      .then(res => {
        setLoading(false);
        setOpen(false);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setAlert({
          open: true,
          message: 'Message sent, thank you!',
          backgroundColor: '#4BB543',
        });
      })
      .catch(err => {
        setLoading(false);
        setAlert({
          open: true,
          message: 'Message was not sent. Try again.',
          backgroundColor: '#FFF3232',
        });
      });
  };

  const buttonLabel = (
    <React.Fragment>
      Send <i class='fas fa-paper-plane'></i>
    </React.Fragment>
  );

  return (
    <Grid container direction='row'>
      <Grid item container className={classes.background}>
        <Grid
          item
          container
          align={matchesSM ? 'center' : 'right'}
          style={
            matchesSM
              ? {
                  marginTop: '2em',
                  width: '25em',
                  height: '35em',
                  borderRadius: 5,
                  paddingTop: '1em',
                }
              : { marginRight: '5em', marginTop: '2em' }
          }
          direction='column'
          className={matchesSM ? classes.formBackground : null}
        >
          <Grid item>
            <Typography variant='h2' style={{ lineHeight: 1 }}>
              Contact us
            </Typography>
            <Typography variant='body1' style={{ color: '#442c2e' }}>
              We would love to hear from you.
            </Typography>
          </Grid>
          <Grid item style={{ color: '#442c2e' }}>
            <Grid item>
              <i class='fas fa-phone'></i>
              <a
                href='tel:2222222222'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {' '}
                (222) 222-2222
              </a>
            </Grid>
            <Grid item>
              <i class='fas fa-envelope'></i>
              <a
                href='mailto:mannyalgarcia@gmail.com'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {' '}
                mannyalgarcia@gmail.com
              </a>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item>
              <TextField
                label='Name'
                id='name'
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                label='Email'
                error={emailError.length !== 0}
                helperText={emailError}
                id='email'
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item>
              <TextField
                label='Phone'
                error={phoneError.length !== 0}
                helperText={phoneError}
                id='phone'
                value={phone}
                onChange={onChange}
              />
            </Grid>
            <Grid item>
              <TextField
                InputProps={{ disableUnderline: true }}
                value={message}
                className={classes.message}
                multiline
                rows='8'
                id='message'
                onChange={event => setMessage(event.target.value)}
              />
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneError.length !== 0 ||
                  emailError.length !== 0
                }
                onClick={() => setOpen(true)}
                variant='contained'
                className={classes.sendButton}
              >
                {buttonLabel}
              </Button>
            </Grid>
            {/* DIALOG START */}
            <Dialog
              style={{ zIndex: 302 }}
              open={open}
              onClose={() => setOpen(false)}
              align='center'
              PaperProps={{
                style: {
                  marginTop: '4em',
                  paddingTop: '2em',
                  paddingBottom: '2em',
                },
              }}
            >
              <DialogContent style={matchesSM ? null : { width: '30em' }}>
                <Grid
                  container
                  direction='column'
                  style={matchesSM ? null : { width: '30em' }}
                >
                  <Grid item>
                    <Typography variant='h5' align='center' gutterBottom>
                      Confirm Message
                    </Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      label='Name'
                      id='name'
                      value={name}
                      onChange={event => setName(event.target.value)}
                      style={matchesSM ? null : { width: '20em' }}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label='Email'
                      error={emailError.length !== 0}
                      helperText={emailError}
                      id='email'
                      value={email}
                      onChange={onChange}
                      style={matchesSM ? null : { width: '20em' }}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label='Phone'
                      error={phoneError.length !== 0}
                      helperText={phoneError}
                      id='phone'
                      value={phone}
                      onChange={onChange}
                      style={matchesSM ? null : { width: '20em' }}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      InputProps={{ disableUnderline: true }}
                      value={message}
                      className={classes.message}
                      multiline
                      rows='8'
                      id='message'
                      onChange={event => setMessage(event.target.value)}
                      style={matchesSM ? null : { width: '20em' }}
                    />
                  </Grid>
                  <Grid item>
                    <Grid item>
                      <Button
                        align='center'
                        color='secondary'
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        disabled={
                          name.length === 0 ||
                          message.length === 0 ||
                          phoneError.length !== 0 ||
                          emailError.length !== 0
                        }
                        onClick={onConfirm}
                      >
                        {buttonLabel}
                      </Button>
                    </Grid>
                    {loading ? <CircularProgress color='secondary' /> : null}
                  </Grid>
                </Grid>
              </DialogContent>
            </Dialog>
            {/* DIALOG END */}
            <SnackBar
              open={alert.open}
              message={alert.message}
              ContentProps={{
                style: { backgroundColor: alert.backgroundColor },
              }}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              onClose={() => setAlert({ ...alert, open: false })}
              autoHideDuration={4000}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
