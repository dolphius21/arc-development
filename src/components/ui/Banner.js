import Lottie from 'react-lottie';
// Material UI Imports
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// Internal Imports
import ButtonArrow from './ButtonArrow';
import animationData from '../../animations/landinganimation/data';

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em'
    }
  },
  estimateBtn: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  btnContainer: {
    marginTop: '1em'
  },
  learnBtnHero: {
    ...theme.typography.learnBtn,
    fontSize: '0.9rem',
    height: 45,
    width: 145
  },
  heroTxtContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  }
}));

const HeroBanner = () => {
  const styles = useStyles();
  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Grid container justify="flex-end" alignItems="center">
      <Grid sm item className={styles.heroTxtContainer}>
        <Typography variant="h2" align="center">
          Bringing West Coast Technology
          <br /> to the Midwest
        </Typography>
        <Grid container justify="center" className={styles.btnContainer}>
          <Grid item>
            <Button className={styles.estimateBtn} variant="contained">
              Free Estimate
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" className={styles.learnBtnHero}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={styles.animation} sm item>
        <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
      </Grid>
    </Grid>
  );
};

export default HeroBanner;
