// Material UI Imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// Internal Imports
import ButtonArrow from './ButtonArrow';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import websitesIcon from '../../assets/websiteIcon.svg';

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
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25
    }
  }
}));

const ServicesSection = () => {
  const styles = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
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
          <Button variant="outlined" className={styles.learnBtn}>
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
      {/* iOS/Android App Development */}
      <Grid
        container
        direction="row"
        className={styles.servicesContainer}
        justify={matchesSM ? 'center' : 'flex-end'}
      >
        <Grid
          item
          style={{
            textAlign: matchesSM ? 'center' : undefined
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
          <Button variant="outlined" className={styles.learnBtn}>
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
          />
        </Grid>
      </Grid>
      {/* Website Development */}
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
          <Typography variant="h4">Website Development</Typography>
          <Typography variant="subtitle1" className={styles.subtitle}>
            Reach More. Discover More. Sell More.
          </Typography>
          <Typography variant="subtitle1">
            Optimized for Search Engines, Built for speed.{' '}
          </Typography>
          <Button variant="outlined" className={styles.learnBtn}>
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item>
          <img className={styles.icon} alt="website icon" src={websitesIcon} />
        </Grid>
      </Grid>
    </>
  );
};

export default ServicesSection;
