import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
// Material UI Imports
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
// Internal Imports
import CTASection from '../components/ui/CTASection';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import lightbulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';
import documentsAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data';
import roots from '../assets/root.svg';
import automationAnimation from '../animations/automationAnimation/data';
import uxAnimation from '../animations/uxAnimation/data';

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em'
  },
  arrowContainer: {
    marginTop: '0.5em'
  },
  mainContainer: {
    padding: '2em 5em 10em',
    [theme.breakpoints.down('sm')]: {
      padding: '1em 1.5em 10em'
    }
  },
  itemContainer: {
    maxWidth: '40em'
  }
}));

const CustomSoftWareDevelopment = ({ setSelectedIndex }) => {
  const styles = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <Grid container direction="column" className={styles.mainContainer}>
        <Grid
          item
          container
          direction="row"
          justify={matchesMD ? 'center' : undefined}
        >
          <Hidden mdDown>
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
          </Hidden>
          <Grid item container direction="column" className={styles.heading}>
            <Grid item>
              <Typography align={matchesMD ? 'center' : undefined} variant="h2">
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? 'center' : undefined}
              >
                Whether we’re replacing old software or inventing new solutions,
                Arc Development is here to help your business tackle technology.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? 'center' : undefined}
              >
                Using regular commercial software leaves you with a lot of stuff
                you don’t need, without some of the stuff you do need, and
                ultimately controls the way you work. Without using any software
                at all you risk falling behind competitors and missing out on
                huge savings from increased efficiency.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? 'center' : undefined}
              >
                Our custom solutions are designed from the ground up with your
                needs, wants, and goals at the core. This collaborative process
                produces finely tuned software that is much more effective at
                improving your workflow and reducing costs than generalized
                options.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? 'center' : undefined}
              >
                We create exactly what you what, exactly how you want it.
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
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
          </Hidden>
        </Grid>
        {/* Icons Section */}
        <Grid
          item
          container
          direction="row"
          justify="center"
          style={{ margin: '15em 0' }}
        >
          <Grid
            item
            container
            direction="column"
            md
            style={{ maxWidth: '40em' }}
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h4">Save Energy</Typography>
            </Grid>
            <Grid item>
              <img src={lightbulb} alt="energy icon" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            style={{ maxWidth: '40em', margin: matchesSM ? '10em 0' : 0 }}
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h4">Save Time</Typography>
            </Grid>
            <Grid item>
              <img src={stopwatch} alt="time icon" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            style={{ maxWidth: '40em' }}
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h4">Save Money</Typography>
            </Grid>
            <Grid item>
              <img src={cash} alt="cash icon" />
            </Grid>
          </Grid>
        </Grid>
        {/* Row 2 */}
        <Grid
          item
          container
          direction={matchesMD ? 'column' : 'row'}
          alignItems={matchesMD ? 'center' : undefined}
          justify="space-between"
        >
          <Grid
            item
            container
            className={styles.itemContainer}
            md
            direction={matchesSM ? 'column' : 'row'}
            style={{ marginBottom: matchesMD ? '15em' : 0 }}
          >
            <Grid item container direction="column" md>
              <Grid item>
                <Typography
                  variant="h4"
                  align={matchesSM ? 'center' : undefined}
                >
                  Digital Documents & Data
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? 'center' : undefined}
                >
                  Reduce Errors. Reduce Waste. Reduce Costs.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? 'center' : undefined}
                >
                  Billions are spent annually on the purchasing, printing, and
                  distribution of paper. On top of the massive environmental
                  impact this has, it causes harm to your bottom line as well.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? 'center' : undefined}
                >
                  By utilizing digital forms and documents you can remove these
                  obsolete expenses, accelerate your communication, and help the
                  Earth.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Lottie
                options={documentsOptions}
                style={{
                  maxHeight: 260,
                  maxWidth: 260,
                  minHeight: 250
                }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            className={styles.itemContainer}
            md
            direction={matchesSM ? 'column' : 'row'}
          >
            <Grid item md>
              <Lottie
                options={scaleOptions}
                style={{
                  maxHeight: 260,
                  maxWidth: 280
                }}
              />
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4" align={matchesSM ? 'center' : 'right'}>
                  Scale
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? 'center' : 'right'}
                >
                  Whether you’re a large brand, just getting started, or taking
                  off right now, our application architecture ensures pain-free
                  growth and reliability.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Row 3 */}
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ margin: '20em 0' }}
        >
          <Grid
            item
            container
            className={styles.itemContainer}
            justify="center"
          >
            <Grid item align="center">
              <img
                src={roots}
                alt="tree with roots"
                height={matchesSM ? '300em' : '450em'}
                width={matchesSM ? '300em' : '450em'}
              />
            </Grid>
            <Grid item container direction="column">
              <Grid item>
                <Typography variant="h4" align="center">
                  Root-Cause Analysis
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph align="center">
                  Many problems are merely symptoms of larger, underlying
                  issues.
                </Typography>
                <Typography variant="body1" paragraph align="center">
                  We can help you thoroughly examine all areas of your business
                  to develop a holistic plan for the most effective
                  implementation of technology.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Row 4 */}
        <Grid
          item
          container
          justify="space-between"
          style={{ marginBottom: '10em' }}
          direction={matchesMD ? 'column' : 'row'}
          alignItems={matchesMD ? 'center' : undefined}
        >
          <Grid
            item
            container
            className={styles.itemContainer}
            direction={matchesSM ? 'column' : 'row'}
            md
            style={{ marginBottom: matchesMD ? '15em' : 0 }}
          >
            <Grid item container direction="column" md>
              <Grid item>
                <Typography
                  variant="h4"
                  align={matchesSM ? 'center' : undefined}
                >
                  Automation
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? 'center' : undefined}
                >
                  Why waste time when you don’t have to?
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? 'center' : undefined}
                >
                  We can help you identify processes with time or event based
                  actions which can now easily be automated.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? 'center' : undefined}
                >
                  Increasing efficiency increases profits, leaving you more time
                  to focus on your business, not busywork.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Lottie
                options={automationOptions}
                style={{
                  maxHeight: 290,
                  maxWidth: 280
                }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            className={styles.itemContainer}
            md
            direction={matchesSM ? 'column' : 'row'}
          >
            <Grid item md>
              <Lottie
                options={uxOptions}
                style={{
                  maxHeight: 310,
                  maxWidth: 155
                }}
              />
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4" align={matchesSM ? 'center' : 'right'}>
                  User Experience Design
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? 'center' : 'right'}
                >
                  A good design that isn’t usable isn’t a good design.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? 'center' : 'right'}
                >
                  So why are so many pieces of software complicated, confusing,
                  and frustrating?
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? 'center' : 'right'}
                >
                  By prioritizing users and the real ways they interact with
                  technology we’re able to develop unique, personable
                  experiences that solve problems rather than create new ones
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CTASection />
    </>
  );
};

export default CustomSoftWareDevelopment;
