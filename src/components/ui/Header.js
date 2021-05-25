import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// materialUI imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
// internal imports
import logo from '../../assets/logo.svg';
import MainNav from './MainNav';

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
  }
}));

const Header = (props) => {
  const styles = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

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
            <MainNav
              value={value}
              setValue={setValue}
              handleChange={handleChange}
            />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={styles.toolbarMargin} />
    </>
  );
};

export default Header;
