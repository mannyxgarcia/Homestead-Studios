import { createMuiTheme } from '@material-ui/core/styles';

const white = '#fff';
const arcOrange = '#FFBA60';
const textColor = '#442c2e';

export default createMuiTheme({
  shadows: ['none'],
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  palette: {
    common: {
      white: `${white}`,
      black: '#fff',
      arcOrange: `${arcOrange}`,
    },
    background: {
      paper: '#FEEAE6',
    },
    primary: {
      main: '#FEEAE6',
    },
    secondary: {
      main: textColor,
    },
  },
  typography: {
    h5: {
      fontWeight: 100,
    },
    h2: {
      fontWeight: 700,
      color: `${textColor}`,
    },
    h6: {
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
    },
  },
});
