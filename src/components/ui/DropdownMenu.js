import { Link } from 'react-router-dom';
// materialUI imports
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: 0
  },
  menuItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    }
  },
  selectedMenuItem: {
    ...theme.typography.tab,
    opacity: 1
  }
}));

const DropdownMenu = (props) => {
  const {
    id,
    anchorEl,
    open,
    value,
    handleClose,
    menuOptions,
    selectedIndex,
    setValue,
    setAnchorEl,
    setOpen,
    setSelectedIndex,
    MenuListProps
  } = props;
  const styles = useStyles();

  const handleMenuItemClick = (e, index) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(index);
  };

  return (
    <>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        MenuListProps={MenuListProps}
        classes={{ paper: styles.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={option.name}
            component={Link}
            to={option.link}
            className={
              index === selectedIndex
                ? styles.selectedMenuItem
                : styles.menuItem
            }
            onClick={(e) => {
              handleMenuItemClick(e, index);
              setValue(1);
              handleClose();
            }}
            selected={index === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropdownMenu;
