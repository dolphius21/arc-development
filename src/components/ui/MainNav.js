import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// materialUI imports
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
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
    marginLeft: '25px'
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    margin: '2rem',
    height: '45px'
  }
}));

const MainNav = ({ value, setValue, handleChange }) => {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        if (value !== 0) setValue(0);
        break;
      case '/services':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case '/customsoftware':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case '/mobileapps':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case '/websites':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case '/revolution':
        if (value !== 2) setValue(2);
        break;
      case '/about':
        if (value !== 3) setValue(3);
        break;
      case '/contact':
        if (value !== 4) setValue(4);
        break;
      case '/estimates':
        if (value !== 5) setValue(5);
        break;
      default:
        break;
    }
  }, [value, setValue]);

  return (
    <>
      <Tabs
        className={styles.tabContainer}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
      >
        <Tab className={styles.tab} component={Link} to="/" label="Home" />
        <Tab
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup={anchorEl ? 'true' : undefined}
          className={styles.tab}
          component={Link}
          onMouseOver={(e) => handleClick(e)}
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
      <DropdownMenu
        id={'simple-menu'}
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
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
