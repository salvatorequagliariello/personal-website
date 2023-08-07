import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import "./styles/normalize.css";
import "./styles/reset.css";
import "./fonts/basier/basier.css"
import "./fonts/SaolDisplay/saol.css"
import "./styles/main.css";
import "./styles/components-styling/home.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
