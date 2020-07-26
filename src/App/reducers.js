import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { default as auth } from '../Auth/reducers';
import { default as github } from '../Github/reducers';
import { default as users } from '../User/reducers';

const createRootReducers = (history) =>
  combineReducers({
    github,
    auth,
    users,
    router: connectRouter(history),
  });

export default createRootReducers;
