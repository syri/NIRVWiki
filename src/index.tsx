import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Header, WikiPage } from './components';

import 'semantic-ui-css/semantic.min.css';
import './css';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <WikiPage />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
