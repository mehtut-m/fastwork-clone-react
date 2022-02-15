import './App.css';
import theme from './theme.js';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './layouts/Header/Header';
import Register from './pages/Register';
import Login from './pages/Login';
import LoginEmail from './pages/LoginEmail';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        {/* <Register /> */}
        <Login />
        {/* <LoginEmail /> */}
        {/* <ForgetPassword /> */}
        {/* <ResetPassword /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
