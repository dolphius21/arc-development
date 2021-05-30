// Material UI Imports
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// Internal Imports
import HeroBanner from './ui/Banner';
import RevolutionSection from './ui/RevolutionSection';
import ServicesSection from './ui/ServicesSection';
import InfoSection from './ui/InfoSection';
import CTASection from './ui/CTASection';

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

const LandingPage = ({ setValue, setSelectedIndex }) => {
  const styles = useStyles();

  return (
    <Grid container direction="column" className={styles.mainContainer}>
      <Grid item>
        <HeroBanner setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
      <Grid item>
        <ServicesSection
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
      </Grid>
      <Grid item>
        <RevolutionSection
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
      </Grid>
      <Grid item>
        <InfoSection setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
      <Grid item>
        <CTASection setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
