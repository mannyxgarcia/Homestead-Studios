import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import logo from '../../imgs/furniture-and-household.svg';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '2em',
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar position='fixed' color='primary'>
          <Typography variant='h5'>
            <Toolbar>
              <img alt='company logo' className={classes.logo} src={logo} />
              Homestead Studios.
            </Toolbar>
          </Typography>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
