import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
