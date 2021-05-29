// Material UI Imports
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// Internal Imports
import HeroBanner from './ui/Banner';
import RevolutionSection from './ui/RevolutionSection';
import ServicesSection from './ui/ServicesSection';
import InfoSection from './ui/InfoSection';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em'
    }
  }
}));

const LandingPage = () => {
  const styles = useStyles();

  return (
    <Grid container direction="column" className={styles.mainContainer}>
      <Grid item>
        <HeroBanner />
      </Grid>
      <Grid item>
        <ServicesSection />
      </Grid>
      <Grid item>
        <RevolutionSection />
      </Grid>
      <Grid item>
        <InfoSection />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
