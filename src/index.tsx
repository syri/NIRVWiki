import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Header, WikiPage } from './components';

import './css';


ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Header />
    <WikiPage />
  </HashRouter>,
  document.getElementById('root')
);
