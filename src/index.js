import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <BrowserRouter history={history}>
        <Route path='/' component={Main}>
      </Route>
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
