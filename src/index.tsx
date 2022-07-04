import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import { store } from './store';

import ThemeContextProvider from './app/contexts/Theme/ThemeContext';
import ScrollContextProvider from './app/contexts/Scroll/ScrollContext';

ReactDOM.render(
  <Provider store={store}>
    <ScrollContextProvider>
      <HelmetProvider>
        <ThemeContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ThemeContextProvider>
      </HelmetProvider>
    </ScrollContextProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
