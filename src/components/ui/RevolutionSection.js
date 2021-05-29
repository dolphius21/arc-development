// Material UI Imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// Internal Imports
import ButtonArrow from './ButtonArrow';
import revolutionBackground from '../../assets/repeatingBackground.svg';

const useStyles = makeStyles((theme) => ({
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: '8em 0',
      borderRadius: 0,
      width: '100%'
    }
  },
  learnBtnHero: {
    ...theme.typography.learnBtn,
    fontSize: '0.9rem',
    height: 45,
    width: 145
  }
}));

const RevolutionSection = () => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ height: '100em', marginTop: '12em' }}
    >
      <Card className={styles.revolutionCard}>
        <CardContent>
          <Grid container direction="column" style={{ textAlign: 'center' }}>
            <Grid item>
              <Typography variant="h3" gutterBottom>
                The Revolution
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Visionary insights coupled with cutting-edge technology is a
                recipe for revolution.
              </Typography>
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
        </CardContent>
      </Card>
      <div className={styles.revolutionBackground} />
    </Grid>
  );
};

export default RevolutionSection;
