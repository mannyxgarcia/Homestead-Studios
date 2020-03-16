import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#FEEAE6',
    width: '100%',
    height: '70px',
    align: 'center',
  },
  mainContainer: {
    position: 'absolute',
  },
  gridItem: {
    margin: '1em',
  },
  link: {
    color: '#442c2e',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify='center' className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          A stackathon project made at Fullstack Academy by Manny Garcia{' '}
          <a
            href='https://github.com/mannyxgarcia/stackathon-project'
            className={classes.link}
          >
            <i class='fab fa-github'></i>
          </a>
        </Grid>
      </Grid>
    </footer>
  );
}
