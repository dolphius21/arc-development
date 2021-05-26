import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`
    },
    primary: {
      main: `${arcBlue}`,
      light: '#59a0ec',
      dark: '#004789'
    },
    secondary: {
      main: `${arcOrange}`,
      light: '#ffec90',
      dark: '#c88a31'
    }
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem'
    },
    estimate: {
      fontFamily: 'Pacifico',
      textTransform: 'none',
      fontSize: '1rem',
      color: 'white',
      boxShadow: '0px 2px 3px 0px rgba(0,0,0,0.25)',
      backgroundColor: `${arcOrange}`,
      opacity: 1,
      '&:hover': {
        backgroundColor: 'black',
        color: 'white'
      }
    }
  }
});
