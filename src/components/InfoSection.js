import { Link } from 'react-router-dom';
// Material UI Imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// Internal Imports
import infoBackground from '../assets/infoBackground.svg';
import ButtonArrow from './ui/ButtonArrow';

const useStyles = makeStyles((theme) => ({
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  learnBtn: {
    ...theme.typography.learnBtn,
    fontSize: '0.7rem',
    height: 35,
    padding: 7,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em'
    }
  }
}));

const InfoSection = ({ setValue }) => {
  const styles = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid
      container
      direction="row"
      style={{ height: '80em' }}
      alignItems="center"
    >
      <Grid
        item
        container
        style={{
          position: 'absolute',
          textAlign: matchesXS ? 'centered' : 'inherit'
        }}
        direction={matchesXS ? 'column' : 'row'}
        spacing={matchesXS ? 10 : 0}
      >
        <Grid
          item
          sm
          style={{
            marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em',
            textAlign: matchesXS ? 'center' : 'left'
          }}
        >
          <Grid container direction="column">
            <Typography variant="h2" style={{ color: 'white' }}>
              About Us
            </Typography>
            <Typography variant="subtitle2">Let's get personal</Typography>
            <Grid item>
              <Button
                variant="outlined"
                style={{ color: 'white', borderColor: 'white' }}
                className={styles.learnBtn}
                component={Link}
                to="/about"
                onClick={() => setValue(3)}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow width={10} height={10} fill="white" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sm
          style={{
            marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
            textAlign: matchesXS ? 'center' : 'right'
          }}
        >
          <Grid container direction="column">
            <Typography variant="h2" style={{ color: 'white' }}>
              Contact Us
            </Typography>
            <Typography variant="subtitle2">Say Hello!</Typography>
            <Grid item>
              <Button
                variant="outlined"
                style={{ color: 'white', borderColor: 'white' }}
                className={styles.learnBtn}
                component={Link}
                to="/contact"
                onClick={() => setValue(4)}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow width={10} height={10} fill="white" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={styles.infoBackground} />
    </Grid>
  );
};

export default InfoSection;
