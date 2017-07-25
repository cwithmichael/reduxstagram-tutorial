import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

// import the root reducers
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);

let browserHistroy = createBrowserHistory();
export const history = syncHistoryWithStore(browserHistroy, store);

export default store;
