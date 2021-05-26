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
    ...theme.typography.tab,
    color: 'white',
    opacity: 1
  }
}));

const SidebarNav = ({ setOpenDrawer, value, setValue, routes }) => {
  const styles = useStyles();

  return (
    <List disablePadding>
      {routes.map((route) => (
        <ListItem
          onClick={() => {
            setOpenDrawer(false);
            setValue(route.navIndex);
          }}
          divider
          button
          component={Link}
          to={route.link}
          selected={value === route.navIndex}
          key={route.navIndex}
          className={
            route.name === 'Estimates' ? styles.drawerItemEstimates : null
          }
        >
          <ListItemText
            className={
              value === route.navIndex
                ? styles.drawerItemSelected
                : styles.drawerItem
            }
            disableTypography
          >
            {route.name}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarNav;
