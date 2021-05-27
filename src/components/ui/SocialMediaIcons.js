// MaterialUI Imports
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// Internal Imports
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles((theme) => ({
  icon: {
    height: '3rem',
    width: '3rem',
    [theme.breakpoints.down('xs')]: {
      height: '2.5rem',
      width: '2.5rem'
    }
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6rem',
    right: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      right: '0.6rem',
      marginTop: '-5rem'
    }
  }
}));

const SocialMediaIcons = () => {
  const styles = useStyles();

  return (
    <Grid
      container
      justify="flex-end"
      spacing={2}
      className={styles.socialContainer}
    >
      <Grid
        item
        component={'a'}
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="facebook logo" src={facebook} className={styles.icon} />
      </Grid>
      <Grid
        item
        component={'a'}
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="twitter logo" src={twitter} className={styles.icon} />
      </Grid>
      <Grid
        item
        component={'a'}
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="instagram logo" src={instagram} className={styles.icon} />
      </Grid>
    </Grid>
  );
};

export default SocialMediaIcons;
