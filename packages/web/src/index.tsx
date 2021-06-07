/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeContextProvider } from '~/theme';
import { Router } from '~/router';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Router />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept();
}
