import './App.css';
import theme from './theme.js';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './layouts/Header/Header';
import RouteConfig from './routes/routeConfig';
import Login from './pages/Login';
import { useState } from 'react';
import LoadingScreen from './components/Utils/LoadingScreen';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoadingScreen />
      <div className="App">
        <Header />
        <RouteConfig />
      </div>
    </ThemeProvider>
  );
}

export default App;
