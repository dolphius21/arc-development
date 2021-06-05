import { Link } from 'react-router-dom';
// Material UI Imports
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// Internal Imports
import CTASection from '../components/ui/CTASection';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em'
  },
  arrowContainer: {
    marginTop: '0.5em'
  },
  mainContainer: {
    padding: '2em 5em 10em'
  }
}));

const CustomSoftWareDevelopment = ({ setSelectedIndex }) => {
  const styles = useStyles();
  const theme = useTheme();
  // const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid container direction="column" className={styles.mainContainer}>
        <Grid item container direction="row">
          <Grid
            item
            className={styles.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to="/services"
              onClick={() => setSelectedIndex(0)}
            >
              <img src={backArrow} alt="Back to Services Page" />
            </IconButton>
          </Grid>
          <Grid item container direction="column" className={styles.heading}>
            <Grid item>
              <Typography variant="h2">Custom Software Development</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Whether we’re replacing old software or inventing new solutions,
                Arc Development is here to help your business tackle technology.
              </Typography>
              <Typography variant="body1" paragraph>
                Using regular commercial software leaves you with a lot of stuff
                you don’t need, without some of the stuff you do need, and
                ultimately controls the way you work. Without using any software
                at all you risk falling behind competitors and missing out on
                huge savings from increased efficiency.
              </Typography>
              <Typography variant="body1" paragraph>
                Our custom solutions are designed from the ground up with your
                needs, wants, and goals at the core. This collaborative process
                produces finely tuned software that is much more effective at
                improving your workflow and reducing costs than generalized
                options.
              </Typography>
              <Typography variant="body1" paragraph>
                We create exactly what you what, exactly how you want it.
              </Typography>
            </Grid>
          </Grid>
          <Grid item className={styles.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to="/mobileapps"
              onClick={() => setSelectedIndex(2)}
            >
              <img
                src={forwardArrow}
                alt="Go to iOS/Android App Development Page."
              />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <CTASection />
    </>
  );
};

export default CustomSoftWareDevelopment;
