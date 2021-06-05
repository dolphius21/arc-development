import { Link } from 'react-router-dom';
// Material UI Imports
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// Internal Imports
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import ButtonArrow from '../components/ui/ButtonArrow';

const useStyles = makeStyles((theme) => ({
  specialTxt: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange
  },
  learnBtn: {
    ...theme.typography.learnBtn,
    fontSize: '0.7rem',
    height: 35,
    padding: 7,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em'
    }
  },
  subtitle: {
    marginBottom: '1em'
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  servicesContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25
    }
  }
}));

const Services = ({ setValue, setSelectedIndex }) => {
  const styles = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          marginTop: matchesSM ? '2em' : '3em'
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          align={matchesSM ? 'center' : undefined}
        >
          Services
        </Typography>
      </Grid>
      {/* iOS/Android App Development */}
      <Grid
        container
        direction="row"
        className={styles.servicesContainer}
        justify={matchesSM ? 'center' : 'flex-end'}
        style={{ marginTop: matchesSM ? '1em' : '5em' }}
      >
        <Grid
          item
          style={{
            textAlign: matchesSM ? 'center' : undefined,
            width: matchesSM ? undefined : '35em'
          }}
        >
          <Typography variant="h4">iOS/Android App Development</Typography>
          <Typography variant="subtitle1" className={styles.subtitle}>
            Extend Functionality. Extend Access. Increase Engagement
          </Typography>
          <Typography variant="subtitle1">
            Integrate your web experience or create a standalone app
            {matchesSM ? null : <br />} with either mobile platform
          </Typography>
          <Button
            variant="outlined"
            className={styles.learnBtn}
            component={Link}
            to="/mobileapps"
            onClick={() => {
              setValue(1);
              setSelectedIndex(2);
            }}
          >
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
          <img
            className={styles.icon}
            alt="mobile phone icon"
            src={mobileAppsIcon}
            width="250em"
          />
        </Grid>
      </Grid>
      {/* Custom Software Development */}
      <Grid
        container
        direction="row"
        className={styles.servicesContainer}
        justify={matchesSM ? 'center' : undefined}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '5em',
            textAlign: matchesSM ? 'center' : undefined
          }}
        >
          <Typography variant="h4">Custom Software Development</Typography>
          <Typography variant="subtitle1" className={styles.subtitle}>
            Save Energy. Save Time. Save Money
          </Typography>
          <Typography variant="subtitle1">
            Complete digital solutions, from investigation to{' '}
            <span className={styles.specialTxt}>celebration.</span>
          </Typography>
          <Button
            variant="outlined"
            className={styles.learnBtn}
            component={Link}
            to="/customsoftware"
            onClick={() => {
              setValue(1);
              setSelectedIndex(1);
            }}
          >
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item>
          <img
            className={styles.icon}
            alt="custom software icon"
            src={customSoftwareIcon}
          />
        </Grid>
      </Grid>
      {/* Website Development */}
      <Grid
        container
        direction="row"
        className={styles.servicesContainer}
        justify={matchesSM ? 'center' : 'flex-end'}
        style={{ marginBottom: '10em' }}
      >
        <Grid
          item
          style={{
            textAlign: matchesSM ? 'center' : undefined,
            width: matchesSM ? undefined : '35em'
          }}
        >
          <Typography variant="h4">Website Development</Typography>
          <Typography variant="subtitle1" className={styles.subtitle}>
            Reach More. Discover More. Sell More.
          </Typography>
          <Typography variant="subtitle1">
            Optimized for Search Engines, Built for speed.{' '}
          </Typography>
          <Button
            variant="outlined"
            className={styles.learnBtn}
            component={Link}
            to="/websites"
            onClick={() => {
              setValue(1);
              setSelectedIndex(3);
            }}
          >
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
          <img
            className={styles.icon}
            alt="website icon"
            src={websitesIcon}
            width="250em"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
