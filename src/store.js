import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

import { createBrowserHistory } from 'react-router-dom';

// import the root reducers
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments
};

export default const store = createStore(rootReducer, defaultState);

let browserHistroy = createBrowserHistory();
export const history = syncHistoryWithStore(browserHistroy, store);
