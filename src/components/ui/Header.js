/* eslint-disable no-fallthrough */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import logo from '../../imgs/furniture-and-household.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
  },
  logo: {
    height: '4em',
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    fontSize: '15px',
    color: '#442c2e',
    textTransform: 'none',
  },
  drawerIcon: {
    height: '40px',
    width: '40px',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    backgroundColor: '442c2e',
    drawerItem: {
      opacity: 0.7,
      fontColor: '#fff',
    },
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        if (value !== 0) {
          setValue(0);
        }
        break;
      case '/projects':
        if (value !== 1) {
          setValue(1);
        }
        break;
      case '/services':
        if (value !== 2) {
          setValue(2);
        }
        break;
      case '/contact':
        if (value !== 3) {
          setValue(3);
        }
      default:
        break;
    }
  }, [value]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        className={classes.tabContainer}
        onChange={handleChange}
      >
        <Tab className={classes.tab} component={Link} to='/' label='Home' />
        <Tab
          className={classes.tab}
          component={Link}
          to='/projects'
          label='Projects'
        />
        <Tab
          className={classes.tab}
          component={Link}
          to='/services'
          label='Services'
        />
        <Tab
          className={classes.tab}
          component={Link}
          to='/contact'
          label='Contact'
        />
      </Tabs>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar position='fixed' color='primary' className={classes.appBar}>
          <Typography variant='h5'>
            <Toolbar>
              <Button
                component={Link}
                to='/'
                disableRipple
                className={classes.logoContainer}
                onClick={() => setValue(0)}
              >
                <img alt='company logo' className={classes.logo} src={logo} />
                Homestead Studios.
              </Button>
              {matches ? null : tabs}
            </Toolbar>
          </Typography>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
