import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

const router = (
  <BrowserRouter history={history}>
      <Route path='/' component={Main}>
    </Route>
  </BrowserRouter>
)
ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
