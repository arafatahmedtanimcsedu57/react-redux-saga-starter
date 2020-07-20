import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { default as auth } from '../Auth/reducers'
import { default as github } from '../Github/reducers';

const createRootReducers = history =>
  combineReducers({
    github,
    auth,
    router: connectRouter(history)
  });

export default createRootReducers;
