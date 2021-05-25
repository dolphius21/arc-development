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
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    }
  }
}));

const DropdownMenu = (props) => {
  const {
    id,
    anchorEl,
    open,
    value,
    handleClose,
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

  const menuOptions = [
    { name: 'Services', link: '/services' },
    { name: 'Custom Software Development', link: '/customsoftware' },
    { name: 'Mobile App Development', link: '/mobileapps' },
    { name: 'Website Development', link: '/websites' }
  ];

  return (
    <>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        MenuListProps={MenuListProps}
        classes={{ paper: styles.menu }}
        elevation={0}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={option.name}
            component={Link}
            to={option.link}
            className={styles.menuItem}
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
