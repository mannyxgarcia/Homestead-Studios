/* eslint-disable no-fallthrough */
import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import logo from '../../imgs/furniture-and-household.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

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
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  // const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setIndex] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setIndex(i);
  };

  const handleClose = event => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  // const menuOptions = [
  //   { name: 'Showcase', link: '/showcase' },
  //   { name: 'Gallery', link: '/gallery' },
  // ];

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
          setIndex(0);
        }
        break;
      // case '/showcase':
      //   if (value !== 1) {
      //     setValue(1);
      //     setIndex(1);
      //   }
      //   break;
      // // case '/gallery':
      // //   if (value !== 1) {
      // //     setValue(1);
      // //     setIndex(2);
      // //   }
      //   break;
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
          // aria-owns={anchorEl ? 'simple-menu' : undefined}
          // aria-haspopup={anchorEl ? 'true' : undefined}
          className={classes.tab}
          // onMouseOver={event => handleClick(event)}
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
      {/* <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={uuidv4()}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={event => {
              handleMenuItemClick(event, i);
              setValue(1);
              handleClose();
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu> */}
    </React.Fragment>
  );

  // const drawer = (
  //   <React.Fragment>
  //     <SwipeableDrawer
  //       disableBackdropTransition={!iOS}
  //       disableDiscovery={iOS}
  //       open={openDrawer}
  //       onClose={() => setOpenDrawer(false)}
  //       onOpen={() => setOpenDrawer(true)}
  //       classes={{ paper: classes.drawer }}
  //     >
  //       <div className={classes.toolbarMargin} />
  //       <List disablePadding>
  //         <ListItem
  //           onClick={() => {
  //             setOpenDrawer(false);
  //             setValue(0);
  //           }}
  //           divider
  //           button
  //           component={Link}
  //           to='/'
  //           selected={value === 0}
  //         >
  //           <ListItemText className={classes.drawerItem}>Home</ListItemText>
  //         </ListItem>
  //         <ListItem
  //           onClick={() => {
  //             setOpenDrawer(false);
  //             setValue(1);
  //           }}
  //           divider
  //           button
  //           component={Link}
  //           to='/showcase'
  //           selected={value === 1}
  //         >
  //           <ListItemText className={classes.drawerItem}>Showcase</ListItemText>
  //         </ListItem>
  //         <ListItem
  //           onClick={() => {
  //             setOpenDrawer(false);
  //             setValue(1);
  //           }}
  //           divider
  //           button
  //           component={Link}
  //           to='/gallery'
  //           selected={value === 1}
  //         >
  //           <ListItemText className={classes.drawerItem}>Gallery</ListItemText>
  //         </ListItem>
  //         <ListItem
  //           onClick={() => {
  //             setOpenDrawer(false);
  //             setValue(2);
  //           }}
  //           divider
  //           button
  //           component={Link}
  //           to='/services'
  //           selected={value === 2}
  //         >
  //           <ListItemText className={classes.drawerItem}>Services</ListItemText>
  //         </ListItem>
  //         <ListItem
  //           onClick={() => {
  //             setOpenDrawer(false);
  //             setValue(3);
  //           }}
  //           divider
  //           button
  //           component={Link}
  //           to='/about'
  //           selected={value === 3}
  //         >
  //           <ListItemText className={classes.drawerItem}>About</ListItemText>
  //         </ListItem>
  //       </List>
  //     </SwipeableDrawer>
  //     <IconButton
  //       className={classes.drawerIconContainer}
  //       onClick={() => setOpenDrawer(!openDrawer)}
  //       disableRipple
  //     >
  //       <MenuIcon className={classes.drawerIcon} />
  //     </IconButton>
  //   </React.Fragment>
  // );

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
