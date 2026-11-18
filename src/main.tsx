import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
// Self-hosted fonts (no requests to Google); unicode-range loads only the subsets used (latin + latin-ext for Serbian)
import '@fontsource-variable/inter';
import '@fontsource-variable/space-grotesk';
import '@fontsource/instrument-serif/400-italic.css';
import './index.css';
import { initGA4 } from './utils/analytics';

// Initialize Google Analytics 4 tracking
initGA4();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

