import React from 'react';
import ReactDOM from 'react-dom';
// Import css
import './styles/style.styl';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <BrowserRouter history={history}>
        <Route path='/' component={App}>
      </Route>
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
