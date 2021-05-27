import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
// materialUI imports
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { makeStyles } from '@material-ui/styles';
// internal imports
import DropdownMenu from './DropdownMenu';

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
    '&:hover': {
      opacity: 1
    }
  },
  estimateBtn: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    margin: '2rem',
    height: '45px'
  }
}));

const MainNav = (props) => {
  const {
    value,
    setValue,
    selectedIndex,
    setSelectedIndex,
    handleChange,
    routes
  } = props;
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = useMemo(
    () => [
      { name: 'Services', link: '/services', navIndex: 1, menuIndex: 0 },
      {
        name: 'Custom Software Development',
        link: '/customsoftware',
        navIndex: 1,
        menuIndex: 1
      },
      {
        name: 'Mobile App Development',
        link: '/mobileapps',
        navIndex: 1,
        menuIndex: 2
      },
      {
        name: 'Website Development',
        link: '/websites',
        navIndex: 1,
        menuIndex: 3
      }
    ],
    []
  );

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.navIndex) {
            setValue(route.navIndex);
            if (route.navIndex && route.menuIndex !== selectedIndex) {
              setSelectedIndex(route.menuIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, setValue, menuOptions, routes, selectedIndex, setSelectedIndex]);

  return (
    <>
      <Tabs
        className={styles.tabContainer}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {routes.map((route, index) => {
          return route.name === 'Services' ? (
            <Tab
              key={index}
              className={styles.tab}
              component={Link}
              to={route.link}
              label={route.name}
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup={anchorEl ? 'true' : undefined}
              onMouseOver={(e) => handleClick(e)}
            />
          ) : (
            <Tab
              key={index}
              className={
                route.name === 'Estimates' ? styles.estimateBtn : styles.tab
              }
              component={Link}
              to={route.link}
              label={route.name}
            />
          );
        })}
      </Tabs>
      <DropdownMenu
        id={'simple-menu'}
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        menuOptions={menuOptions}
        value={value}
        setValue={setValue}
        setAnchorEl={setAnchorEl}
        setOpen={setOpen}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </>
  );
};

export default MainNav;
