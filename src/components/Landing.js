import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Parallax } from 'react-parallax';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    fontSize: '20px',
    color: theme.palette.text.secondary,
  },
  container: {
    backgroundColor: '#FEEAE6',
    padding: '60px',
  },
  estimateButton: {
    padding: '12px',
    color: 'white',
    backgroundColor: '#442c2e',
  },
  ourWorkButton: {
    padding: '12px',
    color: '#442c2e',
    backgroundColor: 'transparent',
    border: '442c2e',
  },
}));
const styles = {
  fontSize: '30px',
  color: '#634043',
};
const insideStyles = {
  background: 'transparent',
  padding: 20,
  position: 'absolute',
  top: '40%',
  left: '20%',
  transform: 'translate(-50%,-50%)',
};
const insideStyles2 = {
  background: 'transparent',
  padding: 20,
  position: 'absolute',
  top: '35%',
  left: '40%',
  transform: 'translate(-50%,-50%)',
};

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div style={styles}>
      <Parallax
        bgImage={require('../imgs/daniil-silantev-nBuiLbz_j4A-unsplash.jpg')}
        strength={500}
      >
        <div style={{ height: '100vh' }}>
          <div style={insideStyles}>
            <Typist avgTypingDelay={100} startDelay={2100}>
              <span> Welcome To </span>
              <Typist.Backspace count={11} delay={100} />
              <span> Homestead Studios. </span>
            </Typist>
          </div>
        </div>
      </Parallax>

      <div className={classes.root}>
        <Grid container spacing={1} className={classes.container}>
          <Grid item xs={12}>
            <Paper className={classes.paper} align='center'>
              <ScrollAnimation animateIn='fadeIn'>
                <h1>
                  Interior Design Firm
                  <br /> Based in NY
                </h1>
                Tart dessert bear claw. Lemon drops cake pudding pie toffee.
                Chocolate bar carrot cake cheesecake apple pie. Ice cream halvah
                danish gingerbread.
                <br />
                <br />
              </ScrollAnimation>
            </Paper>
          </Grid>
          <Grid item xs={6} align='right'>
            <Paper className={classes.paper}>
              <ScrollAnimation animateIn='fadeIn'>
                <Button
                  className={classes.estimateButton}
                  disable
                  component={Link}
                  to='/about'
                  variant='outlined'
                >
                  Free Estimate
                </Button>
              </ScrollAnimation>
            </Paper>
          </Grid>
          <Grid item xs={6} alight='left'>
            <Paper className={classes.paper}>
              <ScrollAnimation animateIn='fadeIn' delay={1}>
                <Button
                  className={classes.ourWorkButton}
                  disable
                  component={Link}
                  to='/projects'
                  variant='outlined'
                >
                  Our Work
                </Button>
              </ScrollAnimation>
            </Paper>
          </Grid>
        </Grid>
      </div>

      <Parallax
        bgImage={require('../imgs/mitch-moondae-zXFtsdi9dIc-unsplash.jpg')}
        // blur={{ min: -1, max: 3 }}
      >
        <div style={{ height: 500 }}>
          {/* <div style={insideStyles}>Dynamic Blur</div> */}
        </div>
      </Parallax>
      <div className={classes.root}>
        <Grid container spacing={1} className={classes.container}>
          <Grid item xs={12}>
            <Paper className={classes.paper} align='center'>
              <ScrollAnimation animateIn='bounce' delay={2}>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
              </ScrollAnimation>
              <br />
              Highly Rated Designs
              <br />
              <Grid item style={{ marginTop: '1em' }}>
                <ScrollAnimation animateIn='fadeIn'>
                  <i
                    class='fab fa-instagram fa-2x'
                    style={{ marginRight: '1em' }}
                  ></i>
                  <i
                    class='fab fa-facebook-square fa-2x'
                    style={{ marginRight: '1em' }}
                  ></i>
                  <i class='fab fa-twitter-square fa-2x'></i>
                </ScrollAnimation>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <Parallax
        bgImage={require('../imgs/katsia-jazwinska-zSgzGRdJmMY-unsplash.jpg')}
        strength={-100}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles2}>Design Made Livable.</div>
        </div>
      </Parallax>
    </div>
  );
}
