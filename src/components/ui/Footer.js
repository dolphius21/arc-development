import { Link } from 'react-router-dom';
// Material UI imports
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
// internal import
import footerAdornment from '../../assets/Footer Adornment.svg';
import SocialMediaIcons from './SocialMediaIcons';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%'
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '12em'
    }
  },
  mainContainer: {
    position: 'absolute'
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  gridItem: {
    margin: '3em'
  }
}));

const Footer = ({ setValue, setSelectedIndex }) => {
  const styles = useStyles();

  return (
    <footer className={styles.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={styles.mainContainer}>
          <Grid item className={styles.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setValue(0)}
                to="/"
                className={styles.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={styles.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                to="/services"
                className={styles.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                to="/customsoftware"
                className={styles.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                to="/mobileapps"
                className={styles.link}
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
                to="/websites"
                className={styles.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={styles.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                to="/revolution"
                className={styles.link}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                to="/revolution"
                className={styles.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                to="/revolution"
                className={styles.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                to="/revolution"
                className={styles.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={styles.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to="/about"
                className={styles.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to="/about"
                className={styles.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to="/about"
                className={styles.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={styles.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setValue(4)}
                to="/contact"
                className={styles.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={styles.adornment}
      />
      <SocialMediaIcons />
    </footer>
  );
};

export default Footer;
