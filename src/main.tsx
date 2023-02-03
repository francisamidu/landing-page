import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/inter';
import 'react-slideshow-image/dist/styles.css'
import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
