import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#FEEAE6',
    width: '100%',
    height: '60px',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return <footer className={classes.footer}></footer>;
}
