import './App.css';
import theme from './theme.js';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './layouts/Header/Header';
import Register from './pages/Register';
import Login from './pages/Login';
import { Divider } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Register />
        {/* <Login /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
