import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  background:
    'linear-gradient(90.3deg, #FF6A95 -0.98%, rgba(255, 106, 149, 0.63) -0.97%, #B67BFD 79.83%)',
  backgroundHead:
    'linear-gradient(135.3deg, #FF6A95 -0.98%, rgba(255, 106, 149, 0.63) -0.97%, #B67BFD 79.83%)',
  palette: {
    primary: {
      main: '#7900FF',
    },
    border: {
      main: '',
    },
    'nav-primary-color': { main: '#000' },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'Kanit',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
