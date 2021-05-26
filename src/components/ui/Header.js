import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// materialUI imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// internal imports
import logo from '../../assets/logo.svg';
import MainNav from './MainNav';
import SidebarNav from './SidebarNav';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles((theme) => ({
  appbar: {
    zIndex: theme.zIndex.modal + 1
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em'
    }
  },
  logo: {
    height: '7em',
    display: 'block',
    [theme.breakpoints.down('md')]: {
      height: '6em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '5em'
    }
  },
  logoContainer: {
    padding: 0
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  drawerIcon: {
    height: '50px',
    width: '40px',
    color: 'white'
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
    width: '250px'
  }
}));

const Header = (props) => {
  const styles = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const routes = [
    { name: 'Home', link: '/', navIndex: 0 },
    {
      name: 'Services',
      link: '/services',
      navIndex: 1
    },
    { name: 'The Revolution', link: '/revolution', navIndex: 2 },
    { name: 'About Us', link: '/about', navIndex: 3 },
    { name: 'Contact Us', link: '/contact', navIndex: 4 },
    { name: 'Estimates', link: '/estimates', navIndex: 5 }
  ];

  const mainNav = (
    <>
      <MainNav
        value={value}
        setValue={setValue}
        handleChange={handleChange}
        routes={routes}
      />
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: styles.drawer }}
      >
        <div className={styles.toolbarMargin} />
        <SidebarNav
          setOpenDrawer={setOpenDrawer}
          value={value}
          setValue={setValue}
          routes={routes}
        />
      </SwipeableDrawer>
      <IconButton
        className={styles.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={styles.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar className={styles.appbar}>
          <Toolbar disableGutters>
            <Link
              to="/"
              className={styles.logoContainer}
              onClick={handleChange}
            >
              <img
                className={styles.logo}
                src={logo}
                alt="Arc Development Logo"
              />
            </Link>
            {matches ? drawer : mainNav}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={styles.toolbarMargin} />
    </>
  );
};

export default Header;
