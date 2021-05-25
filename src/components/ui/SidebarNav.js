import { Link } from 'react-router-dom';
// materialUi imports
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7
  },
  drawerItemEstimates: {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark
    }
  },
  drawerItemSelected: {
    opacity: 1
  }
}));

const SidebarNav = ({ setOpenDrawer, value, setValue }) => {
  const styles = useStyles();

  return (
    <List disablePadding>
      <ListItem
        onClick={() => {
          setOpenDrawer(false);
          setValue(0);
        }}
        selected={value === 0}
        divider
        button
        component={Link}
        to="/"
      >
        <ListItemText
          className={[
            styles.drawerItem,
            value === 0 && styles.drawerItemSelected
          ]}
          disableTypography
        >
          Home
        </ListItemText>
      </ListItem>
      <ListItem
        onClick={() => {
          setOpenDrawer(false);
          setValue(1);
        }}
        selected={value === 1}
        divider
        button
        component={Link}
        to="/services"
      >
        <ListItemText
          className={[
            styles.drawerItem,
            value === 1 && styles.drawerItemSelected
          ]}
          disableTypography
        >
          Services
        </ListItemText>
      </ListItem>
      <ListItem
        onClick={() => {
          setOpenDrawer(false);
          setValue(2);
        }}
        selected={value === 2}
        divider
        button
        component={Link}
        to="/revolution"
      >
        <ListItemText
          className={[
            styles.drawerItem,
            value === 2 && styles.drawerItemSelected
          ]}
          disableTypography
        >
          The Revolution
        </ListItemText>
      </ListItem>
      <ListItem
        onClick={() => {
          setOpenDrawer(false);
          setValue(3);
        }}
        selected={value === 3}
        divider
        button
        component={Link}
        to="/about"
      >
        <ListItemText
          className={[
            styles.drawerItem,
            value === 3 && styles.drawerItemSelected
          ]}
          disableTypography
        >
          About Us
        </ListItemText>
      </ListItem>
      <ListItem
        onClick={() => {
          setOpenDrawer(false);
          setValue(4);
        }}
        selected={value === 4}
        divider
        button
        component={Link}
        to="/contact"
      >
        <ListItemText
          className={[
            styles.drawerItem,
            value === 4 && styles.drawerItemSelected
          ]}
          disableTypography
        >
          Contact Us
        </ListItemText>
      </ListItem>
      <ListItem
        className={[styles.drawerItemEstimates]}
        onClick={() => {
          setOpenDrawer(false);
          setValue(5);
        }}
        selected={value === 5}
        divider
        button
        component={Link}
        to="/estimate"
      >
        <ListItemText
          className={[
            styles.drawerItem,
            value === 5 && styles.drawerItemSelected
          ]}
          disableTypography
        >
          Estimate
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default SidebarNav;
