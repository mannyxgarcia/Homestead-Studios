import { createMuiTheme } from '@material-ui/core/styles';

const white = '#fff';
const arcOrange = '#FFBA60';

export default createMuiTheme({
  palette: {
    common: {
      white: `${white}`,
      arcOrange: `${arcOrange}`,
    },
    primary: {
      main: `${white}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    h5: {
      fontWeight: 100,
      fontFamily: 'Inconsolata',
    },
  },
});
