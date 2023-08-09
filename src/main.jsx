import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';


import "./fonts/basier/basier.css"
import "./fonts/SaolDisplay/saol.css"

import "./styles/normalize.css";
import "./styles/reset.css";

import 'animate.css';

import "./styles/main.css";
import "./styles/components-styling/home.css";
import "./styles/components-styling/page-navigator.css";
import "./styles/components-styling/work.css";
import "./styles/components-styling/project-preview.css";
import "./styles/components-styling/about.css";
import "./styles/components-styling/contact.css";

import "./styles/media-queries/width<320px.css";
import "./styles/media-queries/width>425px.css";
import "./styles/media-queries/width>600px.css";
import "./styles/media-queries/width>900px.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
