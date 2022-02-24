import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import AuthContextProvider from './contexts/AuthContext';
import LoadingContextProvider from './contexts/LoadingContext';
import CheckoutContextProvider from './contexts/CheckoutContext';
import OrderContextProvider from './contexts/OrderContext';
import UserContextProvider from './contexts/UserContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingContextProvider>
        <UserContextProvider>
          <AuthContextProvider>
            <CheckoutContextProvider>
              <OrderContextProvider>
                <App />
              </OrderContextProvider>
            </CheckoutContextProvider>
          </AuthContextProvider>
        </UserContextProvider>
      </LoadingContextProvider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
