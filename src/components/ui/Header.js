import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// materialUI imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
// internal imports
import logo from '../../assets/logo.svg';

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
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '7em',
    display: 'block'
  },
  logoContainer: {
    padding: 0
  },
  tabContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px'
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    margin: '2rem',
    height: '45px'
  }
}));

const Header = (props) => {
  const styles = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/revolution' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/about' && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === '/estiamates' && value !== 5) {
      setValue(5);
    }
  }, [value]);

  return (
    <>
      <ElevationScroll>
        <AppBar>
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
            <Tabs
              value={value}
              onChange={handleChange}
              className={styles.tabContainer}
              indicatorColor="primary"
            >
              <Tab
                className={styles.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                className={styles.tab}
                component={Link}
                to="/services"
                label="Services"
              />
              <Tab
                className={styles.tab}
                component={Link}
                to="/revolution"
                label="The Revolution"
              />
              <Tab
                className={styles.tab}
                component={Link}
                to="/about"
                label="About Us"
              />
              <Tab
                className={styles.tab}
                component={Link}
                to="/contact"
                label="Contact Us"
              />
            </Tabs>
            <Button
              component={Link}
              to="/estimates"
              onClick={handleChange}
              variant="contained"
              color="secondary"
              className={styles.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={styles.toolbarMargin} />
    </>
  );
};

export default Header;
